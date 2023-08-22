import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapDetailContainer, SelectSection, FloorImageSection } from './style';
import Header from '../../components/Header';
import SelectBar from '../../components/SelectBar';
import { useGetBuildingDetailRequest, useGetFloorImageRequest } from '../../api/Building';
import toast from 'react-hot-toast';

function MapDetailPage() {
  const location = useParams();

  const [floors, setFloors] = useState([{ value: '', label: '' }]);
  const [selectedFloor, setSelectedFloor] = useState(floors[0].value);
  const [selectedFloorNum, setSelectedFloorNum] = useState(0);
  const [selectedFloorImage, setSelectedFloorImage] = useState('');

  const { data: getBuildingDetailResult, isError: getBuildingDetailError } = useGetBuildingDetailRequest({
    id: location.id,
  });

  const {
    data: getFloorImageResult,
    isError: getFloorImageResultError,
    refetch: floorImageRefetch,
  } = useGetFloorImageRequest({ buildingId: location.id, floorValue: selectedFloorNum }, false);

  useEffect(() => {
    if (getBuildingDetailResult) {
      const floorList = [];

      for (let i = 0; i < getBuildingDetailResult.data.count; i++) {
        floorList.push({ value: `${i + 1}층`, label: `${i + 1}층` });
      }

      setFloors(floorList);
    } else if (getBuildingDetailError) {
      toast.error('건물 상세정보를 불러오는데 실패했습니다.');
    }
  }, [getBuildingDetailResult, getBuildingDetailError]);

  useEffect(() => {
    if (floors && floors[0].value !== '') {
      setSelectedFloor(floors[0].value);
      setSelectedFloorNum(floors[0].value.replace('층', ''));
    }
  }, [floors]);

  useEffect(() => {
    if (selectedFloor && selectedFloor.value) {
      setSelectedFloorNum(selectedFloor.value.replace('층', ''));
    }
  }, [selectedFloor]);

  useEffect(() => {
    if (selectedFloorNum !== 0) floorImageRefetch();
  }, [selectedFloorNum]);

  useEffect(() => {
    if (getFloorImageResult) {
      setSelectedFloorImage(getFloorImageResult.data);
    } else if (getFloorImageResultError) {
      toast.error('도면 이미지를 불러오는데 실패했습니다.');
    }
  }, [getFloorImageResult, getFloorImageResultError]);

  return (
    <MapDetailContainer>
      <Header pageTitle={`OOO 상세정보`} />
      <SelectSection>
        <SelectBar options={floors} selectedFloor={selectedFloor} setSelectedFloor={setSelectedFloor} />
      </SelectSection>
      <FloorImageSection>
        <img src={selectedFloorImage} alt="도면" />
      </FloorImageSection>
    </MapDetailContainer>
  );
}

export default MapDetailPage;
