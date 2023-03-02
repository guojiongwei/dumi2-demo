import React from 'react';
import sleep from '../index';

const App = () => {
  const handleSleepClick = async () => {
    await sleep(2000);
    alert('延迟2s执行点击alert');
  };

  return (
    <>
      <button onClick={handleSleepClick} type="button">
        延迟2s执行点击事件回调
      </button>
    </>
  );
};

export default App;
