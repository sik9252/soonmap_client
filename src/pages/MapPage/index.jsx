import React, { useState, useEffect } from 'react';
import { MapContainer, MapHead, MapHeadAnchor, MapBody, MapSection, MapFoot, MapFootAnchorAfter } from './style';
import SearchBar from '../../components/SearchBar';
import SelectedPin from '../../assets/icons/SelectedPin.svg';
import DefaultPin from '../../assets/icons/DefaultPin.svg';
import MapMyBtn from '../../assets/icons/MapMyBtn.svg';
import Foot from '../../assets/images/Map.png';
import { Button } from '../../components/Button';
import ArrowBtn from '../../assets/icons/ArrowBtn.svg';
import { Form } from 'react-router-dom';

const { kakao } = window;

function Map() {
  const [showFooter, setShowFooter] = useState(false);
  const [isPinClicked, setIsPinClicked] = useState(false);

  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(36.76990282929828, 126.93147338090354),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);

    var marker = new kakao.maps.Marker({
      position: map.getCenter(),
    });
    marker.setMap(map);

    var pinPosition = new kakao.maps.LatLng(36.76930848379686, 126.93215715448547);
    var customMarker1 = new kakao.maps.Marker({
      position: pinPosition,
      image: new kakao.maps.MarkerImage(
        DefaultPin, // 바꿀 이미지 URL
        new kakao.maps.Size(30, 30),
        { offset: new kakao.maps.Point(20, 20) },
      ),
    });
    customMarker1.setMap(map);

    var customMarker2 = new kakao.maps.Marker({
      position: pinPosition,
      clickable: true, // 클릭 이벤트 활성화
      image: new kakao.maps.MarkerImage(
        SelectedPin, // 바꿀 이미지 URL
        new kakao.maps.Size(30, 30),
        { offset: new kakao.maps.Point(20, 20) },
      ),
    });

    kakao.maps.event.addListener(customMarker1, 'click', function (mouseEvent) {
      setIsPinClicked(true);
      marker.setMap(null);
      customMarker1.setMap(null);
      customMarker2.setMap(map);
      setShowFooter(true);
    });

    kakao.maps.event.addListener(map, 'click', function () {
      setIsPinClicked(false);
      customMarker2.setMap(null);
      customMarker1.setMap(map);
      setShowFooter(null);
    });
  }, []);

  return (
    <MapContainer>
      <MapHead>
        <Button>
          <MapHeadAnchor $mapMyBtn={MapMyBtn} />
        </Button>
        <SearchBar placeholder={'건물/강의실 이름을 입력해주세요.'} />
      </MapHead>
      <MapBody>
        <MapSection id="map"></MapSection>
      </MapBody>
      <MapFoot style={{ display: showFooter ? 'block' : 'none' }}>
        <img src={Foot} alt="" />
        <strong>공학관</strong>
        <p>충남관 아산시 신창면 순천향로 22</p>
        <Button>
          상세보기
          <MapFootAnchorAfter $arrowBtn={ArrowBtn} />
        </Button>
      </MapFoot>
    </MapContainer>
  );
}

export default Map;
