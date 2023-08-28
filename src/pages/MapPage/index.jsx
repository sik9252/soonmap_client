import React, { useRef, useState, useEffect, useCallback } from 'react';
import { MapContainer, SearchSection, MapSection } from './style';
import Header from '../../components/Header';
import BuildingInfoPopup from '../../components/BuildingInfoPopup';
import SelectedMarker from '../../assets/icons/SelectedMarker.svg';
import DefaultMarker from '../../assets/icons/DefaultMarker.svg';
import { ReactComponent as MapMyBtn } from '../../assets/icons/MapMyBtn.svg';
import { useGetBuildingRequest } from '../../api/Building';
import { Input } from '@chakra-ui/react';

const { kakao } = window;

function Map() {
  const [kakaoMap, setKakaoMap] = useState(null);
  const inputRef = useRef();

  // 건물 리스트 및 선택된 건물 정보 관련 상태
  const [allBuildingList, setAllBuildingList] = useState([]);
  const [buildingInfoPopup, setBuildingInfoPopup] = useState(false);
  const [buildingInfo, setBuildingInfo] = useState({});
  const [keyword, setKeyword] = useState('');

  // 마커 이미지 및 선택된 마커 객체 관련 변수
  const imageSize = new kakao.maps.Size(35, 30);
  const imageOffset = new kakao.maps.Point(15, 30);
  const defaultMarkerImage = new kakao.maps.MarkerImage(DefaultMarker, imageSize, { offset: imageOffset });
  const selectedMarkerImage = new kakao.maps.MarkerImage(SelectedMarker, imageSize, { offset: imageOffset });
  let lastClickedMarker = null;

  const { mutate: getBuildingRequest, data: getBuildingResult, error: getBuildingError } = useGetBuildingRequest();

  useEffect(() => {
    getBuildingRequest({ keyword: keyword });
  }, []);

  useEffect(() => {
    if (keyword === '') {
      getBuildingRequest({ keyword: '' });
    }
  }, [keyword]);

  useEffect(() => {
    if (getBuildingResult) {
      setAllBuildingList(getBuildingResult.data);
    } else if (getBuildingError) {
      alert('건물이 존재하지 않습니다.');
    }
  }, [getBuildingResult, getBuildingError]);

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
  }, [getBuildingResult]);

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

    if (info?.uniqueNumber.length > 1) {
      const overlayContent =
        '<div style="font-size: 10px; font-weight: 700; position: absolute; bottom: 11px; left: -4px; color: #FFFFFF;">' +
        info?.uniqueNumber +
        '</div>';

      const overlay = new kakao.maps.CustomOverlay({
        content: info?.uniqueNumber !== 'NONE' ? overlayContent : '',
        map: kakaoMap,
        position: marker.getPosition(),
      });

      overlay.setMap(kakaoMap);
    } else {
      const overlayContent =
        '<div style="font-size: 10px; font-weight: 700; position: absolute; bottom: 11px; left: -0.5px; color: #FFFFFF;">' +
        info?.uniqueNumber +
        '</div>';

      const overlay = new kakao.maps.CustomOverlay({
        content: info?.uniqueNumber !== 'NONE' ? overlayContent : '',
        map: kakaoMap,
        position: marker.getPosition(),
      });

      overlay.setMap(kakaoMap);
    }

    kakao.maps.event.addListener(marker, 'click', function () {
      changeMarkerImage(marker);
      setBuildingInfoPopup(true);
      setBuildingInfo(info);
    });

    return marker;
  };

  useEffect(() => {
    const positions = allBuildingList;
    if (positions) {
      if (positions.length > 1) {
        positions.map((building) => {
          const latlng = new kakao.maps.LatLng(building.latitude, building.longitude);
          createMarker(building.id, latlng, building);
        });
      } else {
        const latlng = new kakao.maps.LatLng(positions[0]?.latitude, positions[0]?.longitude);
        createMarker(positions[0]?.id, latlng, positions[0]);
      }
    }
  }, [kakaoMap, allBuildingList]);

  // 외부 클릭 감지 함수
  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너 등록
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleOnEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      getBuildingRequest({ keyword: keyword });
    }
  };

  const openAlertModal = (e) => {
    alert('현재 기능 개발중입니다!');
  };

  return (
    <MapContainer>
      <Header pageTitle={'지도 검색'} />
      <SearchSection>
        <MapMyBtn onClick={() => openAlertModal()} />
        <Input
          ref={inputRef}
          placeholder="건물 이름을 입력해주세요."
          onChange={handleKeyword}
          onKeyDown={handleOnEnterKeyDown}
          boxShadow="1px 1px 4px 0px rgba(0, 0, 0, 0.25)"
          border="none"
          borderRadius="64px"
          backgroundColor="#fff"
        />
      </SearchSection>
      <MapSection>
        <div id="map" />
      </MapSection>
      <BuildingInfoPopup buildingInfo={buildingInfo} buildingInfoPopup={buildingInfoPopup} />
    </MapContainer>
  );
}

export default Map;
