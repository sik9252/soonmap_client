import styled from 'styled-components';
import COLOR from '../../styles/common/color';

export const NoticeSliderStyle = styled.div`
  position: relative;
  width: 100%;
  height: 59px;
  margin-top: 10px;
  cursor: pointer;

  .splide {
    height: 100%;
    padding: 7px 10px 10px 10px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    color: ${COLOR.MAIN_WHITE};
  }

  .splide__slide {
    & > div:nth-child(1) {
      display: flex;
      font-size: 12px;
      padding-bottom: 5px;

      & > div:nth-child(2) {
        padding: 0 3px;
      }
    }

    & > div:nth-child(2) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 700;
    }
  }

  .splide__pagination {
    position: absolute;
    bottom: -50%;
  }

  .splide__pagination__page {
    width: 20px;
    height: 3px;
    margin: 0 1px;
    background-color: white;
    border-radius: 0;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .splide__pagination__page.is-active {
    transform: scale(100%);
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const AdSliderStyle = styled.div`
  cursor: pointer;

  .splide__slide {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
