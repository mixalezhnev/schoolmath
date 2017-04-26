import React from 'react';
import ProgressIcon from './ProgressIcon';

const OverviewProgress = ({total, next}) => (
  <div className='overview__block'>
    <div className='overview__progress'>
      <ProgressIcon total={total}/>
    </div>
  </div>
);

export default OverviewProgress;
