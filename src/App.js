import React, {useEffect, useState} from 'react';
import Field from './tree/field/field';
import Tree from './tree/tree';
import './App.css';
import jsonData from './data'

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    //TODO: add simulated loader to simulate data fetching
    setData(jsonData);
  }, []);

  return (
    <div className="App">
      {!!data &&
        <Tree data={data} />
      }
    </div>
  );
}

export default App;
