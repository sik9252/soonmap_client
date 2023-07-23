import React, { useState, useEffect } from 'react';
import { MapContainer, SearchSection, MapSection } from './style';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import BuildingInfoPopup from '../../components/BuildingInfoPopup';
import SelectedMarker from '../../assets/icons/SelectedMarker.svg';
import DefaultMarker from '../../assets/icons/DefaultMarker.svg';
import { ReactComponent as MapMyBtn } from '../../assets/icons/MapMyBtn.svg';
import BuildingImage from '../../assets/images/Map.png';

const { kakao } = window;

function Map() {
  const [kakaoMap, setKakaoMap] = useState(null);

  // 건물 리스트 및 선택된 건물 정보 관련 상태
  const [allBuildingList, setAllBuildingList] = useState([
    {
      id: 1,
      name: '자연과학관',
      detail: '충남 아산시 신창면 읍내리 646',
      image: BuildingImage,
      posX: 36.7695631618121,
      posY: 126.93001758315143,
    },
    {
      id: 2,
      name: '공학관',
      detail: '충남 아산시 신창면 읍내리 646',
      image: BuildingImage,
      posX: 36.76927604997737,
      posY: 126.9321683837876,
    },
    {
      id: 3,
      name: '학생회관',
      detail: '충남 아산시 신창면 읍내리 646',
      image: BuildingImage,
      posX: 36.77000372339155,
      posY: 126.93141952711613,
    },
  ]);
  const [buildingInfoPopup, setBuildingInfoPopup] = useState(false);
  const [buildingInfo, setBuildingInfo] = useState({});

  // 마커 이미지 및 선택된 마커 객체 관련 변수
  const imageSize = new kakao.maps.Size(25, 25);
  const imageOffset = new kakao.maps.Point(10, 30);
  const defaultMarkerImage = new kakao.maps.MarkerImage(DefaultMarker, imageSize, { offset: imageOffset });
  const selectedMarkerImage = new kakao.maps.MarkerImage(SelectedMarker, imageSize, { offset: imageOffset });
  let lastClickedMarker = null;

  /** 1. 지도 객체 생성 및 지도 관련 환경 설정 */
  const onMapClick = () => {
    if (lastClickedMarker !== null) {
      lastClickedMarker.setImage(defaultMarkerImage);
      lastClickedMarker = null;
      setBuildingInfoPopup(false);
    }
  };

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(36.769978528263614, 126.93148227420234),
      level: 4,
    };

    setKakaoMap(new kakao.maps.Map(container, options));
  }, []);

  useEffect(() => {
    if (kakaoMap !== null) {
      kakao.maps.event.addListener(kakaoMap, 'click', onMapClick);

      kakaoMap.setMinLevel(2);
      kakaoMap.setMaxLevel(5);
    }
  }, [kakaoMap]);

  /** 2. 모든 건물 데이터에 대한 마커 선택 & 비선택 여부에 따른 마커 생성 */
  const changeMarkerImage = (marker) => {
    if (lastClickedMarker !== null) {
      lastClickedMarker.setImage(defaultMarkerImage);
    }

    marker.setImage(selectedMarkerImage);
    lastClickedMarker = marker;
  };

  const createMarker = (id, latlng, info) => {
    var marker = new kakao.maps.Marker({
      id: id,
      map: kakaoMap,
      position: latlng,
      image: defaultMarkerImage,
    });

    kakao.maps.event.addListener(marker, 'click', function () {
      changeMarkerImage(marker);
      setBuildingInfoPopup(true);
      setBuildingInfo(info);
    });

    return marker;
  };

  useEffect(() => {
    const positions = [...allBuildingList];

    for (let i = 0; i < positions.length; i++) {
      const latlng = new kakao.maps.LatLng(positions[i].posX, positions[i].posY);
      createMarker(i, latlng, positions[i]);
    }
  }, [kakaoMap, allBuildingList]);

  return (
    <MapContainer>
      <Header pageTitle={'지도 검색'} />
      <SearchSection>
        <MapMyBtn />
        <SearchBar placeholder={'건물/강의실 이름을 입력해주세요.'} />
      </SearchSection>
      <MapSection>
        <div id="map" />
      </MapSection>
      <BuildingInfoPopup buildingInfo={buildingInfo} buildingInfoPopup={buildingInfoPopup} />
    </MapContainer>
  );
}

export default Map;
