import React from 'react';
import ProgressIcon from './ProgressIcon';
import StartUp from './StartUp';
import Button from './Button';
import {Link} from 'react-router'

const OverviewProgress = ({total, next}) => {
  const isStart = total == 0;
  return (
    <div className='overview__block'>
      <div className='overview__progress'>
        {isStart
          ? <StartUp/>
          : <ProgressIcon total={total}/>
}
        <div className='mission-about'>
          <div>
            {isStart
              ? <span className='mission-about__text'>Начать миссию</span>
              : <span className='mission-about__text'>Продолжить миссию</span>
}
            <div className='mission-about__next'>
              <span>Следующее задание: {next}</span>
            </div>
          </div>
          <Link to='/practice'>
            <Button inner='Старт' className='start-button'/>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default OverviewProgress;
