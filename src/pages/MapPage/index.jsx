import React, { useEffect } from 'react';
import {
  MapContainer,
  MapHead,
  MapHeadAnchor,
  SearchAnchor,
  MapBody,
  MapSection,
  MapFoot,
  MapFootAnchorAfter,
} from './style';
import SearchBar from '../../components/SearchBar';
import SearchBtn from '../../assets/icons/SearchBtn.svg';
import MapMyBtn from '../../assets/icons/MapMyBtn.svg';
import Foot from '../../assets/images/Map.png';
import ArrowBtn from '../../assets/icons/ArrowBtn.svg';
import { Form } from 'react-router-dom';

const { kakao } = window;

function Map() {
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
  }, []);

  return (
    <MapContainer>
      <MapHead>
        <MapHeadAnchor $mapMyBtn={MapMyBtn} />
        <form>
          <input type="text" placeholder={'건물/강의실 이름을 입력해주세요.'} />
          <SearchAnchor $searchBtn={SearchBtn} />
        </form>
      </MapHead>
      <MapBody>
        <MapSection id="map"></MapSection>
      </MapBody>
      <MapFoot>
        <img src={Foot} alt="" />
        <strong>공학관</strong>
        <p>충남관 아산시 신창면 순천향로 22</p>
        <button type="button" onClick="">
          상세보기
          <MapFootAnchorAfter $arrowBtn={ArrowBtn} />
        </button>
      </MapFoot>
    </MapContainer>
  );
}

export default Map;
