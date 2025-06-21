import React, { useState } from 'react';
import './App.css';
import { FightData, FightNightData } from './types';
import Fight from './components/Fight';
import Counter from './components/Counter';

const fightNightData: FightNightData = [
  {
    fightId: 1,
    fighters: [
      {
        name: 'Charles Oliveira',
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2504169.png&w=350&h=254',
        stats: 'Stats for Charles Oliveira'
      },
      {
        name: 'Islam Makhachev',
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3332412.png&w=350&h=254',
        stats: 'Stats for Islam Makhachev'
      }
    ]
  },
  {
    fightId: 2,
    fighters: [
      {
        name: 'Ilia Topuria',
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4350812.png&w=350&h=254',
        stats: 'Stats for Ilia Topuria'
      },
      {
        name: 'Conor McGregor',
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3022677.png&w=350&h=254',
        stats: 'Stats for Conor McGregor'
      }
    ]
  },
  {
    fightId: 3,
    fighters: [
      {
        name: 'Dustin Poirier',
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2506549.png&w=350&h=254',
        stats: 'Stats for Dustin Poirier'
      },
      {
        name: 'Max Holloway',
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2614933.png&w=350&h=254',
        stats: 'Stats for Max Holloway'
      }
    ]
  }
  // Add more fight data as needed
];
// This is a mock data structure for fights. Each fight contains an ID and an array of fighters.
// You can expand this structure to include more details about each fight, such as date, location, etc.

//TODO: Make mock data for fighters and pass it to Fights component

function App() {
  const [pickCount, setPickCount] = useState(0);
  const countState = {
    count: pickCount,
    setCount: setPickCount
  }
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
