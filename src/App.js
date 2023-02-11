import React, {useEffect, useState} from 'react';
import Tree from './tree/tree';
import Field from './tree/field/field'
import jsonData from './data';
import bigJsonData from './bigdata';

function App() {
  const [data, setData] = useState();
  const [isBigData, setIsBigData] = useState(false);

const toggleData = () => {
  !!isBigData ? setData(jsonData) : setData(bigJsonData);
  setIsBigData(!isBigData);
}

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="App" style={{width: '700px'}}>
      <Field name="useBigData" type="boolean" parent="none" onChange={toggleData} />
      {!!data && <Tree data={data} /> }
    </div>
  );
}

export default App;
