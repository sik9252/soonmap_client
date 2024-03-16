import React from 'react';
import { CardContainer, CardBackground, CardInfo } from './style';
import { ReactComponent as ViewsIcon } from '../../assets/icons/ViewsIcon.svg';

export const InfoCard = ({ category, thumbnail, title, view, onClick }) => {
  return (
    <CardContainer $thumbnail={thumbnail} onClick={onClick}>
      <CardBackground>
        <CardInfo>
          <div>
            {category ? `[${category}]` : ''} {title}
          </div>
          <div>
            <ViewsIcon />
            {view}
          </div>
        </CardInfo>
      </CardBackground>
    </CardContainer>
  );
};
