import React from 'react';
import { CardContainer, CardBackground, CardInfo } from './style';
import { ReactComponent as ViewsIcon } from '../../assets/icons/ViewsIcon.svg';

export const InfoCard = ({ thumbnail, title, views, onClick }) => {
  return (
    <CardContainer $thumbnail={thumbnail} onClick={onClick}>
      <CardBackground>
        <CardInfo>
          <div>{title}</div>
          <div>
            <ViewsIcon />
            {views}
          </div>
        </CardInfo>
      </CardBackground>
    </CardContainer>
  );
};
