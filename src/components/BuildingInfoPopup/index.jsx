import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BuildingInfoContainer, BuildingInfoSection, BuildingImageSection, BuildingMainInfoSection } from './style';
import { ReactComponent as DetailArrowBtn } from '../../assets/icons/DetailArrowBtn.svg';
import DefaultImage from '../../assets/images/soonmap.png';

function BuildingInfoPopup({ buildingInfo, buildingInfoPopup }) {
  const navigate = useNavigate();

  const clickGoToBuildingInfoDetail = (buildingId) => {
    navigate(`/map/${buildingId}`);
  };

  const clickImage = (e) => {
    e.stopPropagation();
  };

  return (
    <BuildingInfoContainer
      $buildingInfoPopup={buildingInfoPopup}
      onClick={() => clickGoToBuildingInfoDetail(buildingInfo.id)}
    >
      <BuildingInfoSection>
        <BuildingImageSection onClick={(e) => clickImage(e)}>
          <img src={buildingInfo.image || DefaultImage} alt="" />
        </BuildingImageSection>
        <BuildingMainInfoSection>
          <div>
            <div>{buildingInfo.name}</div>
            <DetailArrowBtn onClick={() => clickGoToBuildingInfoDetail(buildingInfo.id)} />
          </div>
          <div>{buildingInfo.description}</div>
        </BuildingMainInfoSection>
      </BuildingInfoSection>
    </BuildingInfoContainer>
  );
}

export default BuildingInfoPopup;
