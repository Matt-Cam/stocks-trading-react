import React from 'react';
import AssetsDataWrapper from '../data/AssetsDataWrapper';
import AGGridWrapper from '../components/AGGridWrapper';

const Assets = () => {
  return (
    <React.Fragment>
      <div>Assets</div>
      <AssetsDataWrapper render={data => <AGGridWrapper data={data} />} />
    </React.Fragment>
  );
};

export default Assets;
