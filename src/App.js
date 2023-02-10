import Field from './tree/field/field';
import './App.css';

function App() {
  return (
    <div className="App">
      <Field name={'checkboxTest'} type={'boolean'} onChange={(e) => console.log(e)} /><br/>
      <Field name={'numberTest'} type={'number'} onChange={(e) => console.log(e)} /><br/>
      <Field name={'textTest'} type={'string'} onChange={(e) => console.log(e)} /><br/>
      <Field name={'arrayTest'} type={['test1', 'test2', 'test3']} onChange={(e) => console.log(e)} />
    </div>
  );
}

export default App;
