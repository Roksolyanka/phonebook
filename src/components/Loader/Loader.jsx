import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './LoaderContainer.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#120c07"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderContainer>
  );
};
