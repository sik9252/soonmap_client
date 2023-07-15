import React from 'react';
import { CardContainer, CardInfo } from './style';
import { ReactComponent as ViewsIcon } from '../../assets/icons/ViewsIcon.svg';

export const InfoCard = ({ title, views }) => {
  return (
    <CardContainer>
      <CardInfo>
        <div>{title}</div>
        <div>
          <ViewsIcon />
          {views}
        </div>
      </CardInfo>
    </CardContainer>
  );
};
