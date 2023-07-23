import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { BuildingInfoContainer, BuildingInfoSection, BuildingImageSection, BuildingMainInfoSection } from './style';
import { ReactComponent as DetailArrowBtn } from '../../assets/icons/DetailArrowBtn.svg';

function BuildingInfoPopup({ buildingInfo, buildingInfoPopup }) {
  const navigate = useNavigate();

  const clickGoToBuildingInfoDetail = (buildingId) => {
    navigate(`/map/${buildingId}`);
  };

  return (
    <BuildingInfoContainer $buildingInfoPopup={buildingInfoPopup}>
      <BuildingInfoSection>
        <BuildingImageSection>
          <img src={buildingInfo.image} alt="" />
        </BuildingImageSection>
        <BuildingMainInfoSection>
          <div>{buildingInfo.name}</div>
          <div>{buildingInfo.detail}</div>
        </BuildingMainInfoSection>
      </BuildingInfoSection>
      <Button width={130} height={38} onClick={() => clickGoToBuildingInfoDetail(buildingInfo.id)}>
        <div>상세보기</div>
        <DetailArrowBtn />
      </Button>
    </BuildingInfoContainer>
  );
}

export default BuildingInfoPopup;
