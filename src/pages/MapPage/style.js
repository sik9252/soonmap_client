import styled from 'styled-components';

export const MapContainer = styled.div`
  height: calc(100vh - 60px);
`;

export const SearchSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 10px 0 10px;
  position: relative;
  z-index: 10;

  & > svg {
    cursor: pointer;
    padding-top: 3px;
  }
`;

export const MapSection = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: -106px;

  #map {
    width: 100%;
    height: 100%;
  }
`;
