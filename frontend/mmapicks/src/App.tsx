import React, { useEffect, useState } from 'react';
import './App.css';
import { FightData, FightNightData } from './types';
import Fight from './components/Fight';
import Counter from './components/Counter';
import { Button } from '@mui/material';

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
      <div style={{display:'flex', position:'sticky', top:'0', backgroundColor:'#D20A0A', zIndex:'9999', borderBottom:'1px solid', borderColor:'grey'}}>
        <img src={require('./assets/logo.webp')} style={{width:'250px', margin:'15px'}}/>
        <div style={{margin:'15px 15px 15px auto'}}>
          <Button variant="text" sx={{color:'white', margin:'0px 20px'}}>Results</Button>
          <Button variant="contained" sx={{backgroundColor:'#730707'}}>Sign In</Button>
        </div>
      </div>
      {fightNightData.map((fightData: FightData) => {
        return (
          <Fight data={fightData} count={countState} />
        );
      })}
      <div style={{display:'flex', position:'sticky', bottom:'0'}}>
        <Counter count={countState.count}/>
      </div>
    </div>
  );
}

export default App;
