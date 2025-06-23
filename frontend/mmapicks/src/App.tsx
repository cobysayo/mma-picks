import React, { useEffect, useState } from 'react';
import './App.css';
import { FightData, FightNightData } from './types';
import Fight from './components/Fight';
import Counter from './components/Counter';

function App() {
  const [pickCount, setPickCount] = useState(0);
  const countState = {
    count: pickCount,
    setCount: setPickCount
  }

  const [fightNightData, setFightNightData] = useState<FightNightData>([]);
  
  useEffect(() => {
    fetch('http://localhost:8080/fights')
    .then(res => res.json())
    .then(dataObject => {
      setFightNightData((dataObject as FightNightData).reverse())
    });
  }, [])
  

  return (
    <div>
      {fightNightData.map((fightData: FightData) => {
        return (
          <Fight data={fightData} count={countState} />
        );
      })}
      <div style={{display: 'flex'}}>
        <Counter count={countState.count}/>
      </div>
    </div>
  );
}

export default App;
