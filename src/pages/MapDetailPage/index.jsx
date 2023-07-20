import React, { useState } from 'react';
import { MapDetailContainer, SelectSection, FloorImageSection } from './style';
import Header from '../../components/Header';
import SelectBar from '../../components/SelectBar';
import FloorTestImage from '../../assets/images/FloorTestImage.png';

function MapDetailPage() {
  const [floors, setFloors] = useState([
    { value: 'B2층', label: 'B2층' },
    { value: 'B1층', label: 'B1층' },
    { value: '1층', label: '1층' },
    { value: '2층', label: '2층' },
    { value: '3층', label: '3층' },
    { value: '4층', label: '4층' },
  ]);

  return (
    <MapDetailContainer>
      <Header pageTitle={`OOO 상세정보`} />
      <SelectSection>
        <SelectBar options={floors} />
      </SelectSection>
      <FloorImageSection>
        <img src={FloorTestImage} alt="도면" />
      </FloorImageSection>
    </MapDetailContainer>
  );
}

export default MapDetailPage;
