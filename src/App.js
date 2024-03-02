import React, {useState} from 'react';
import Button from './component/commons/button';
import Input from './component/commons/input';
import Selectoption from './component/commons/selectoption'
import './App.css';
const typeApp = {
  color: 'tomato',
  border: '1px solid tomato'
}
const typeSearch = {
  color: 'blue',
  border: '1px solid blue'
}
const typeClear = {
  color: 'yellow',
  border: '1px solid yellow'
}
const style = {
  padding: '5px 8px',
  margin: '0px 5px 0px 5px',
  borderRadius: '5px'
}
const timeOption = [
  "1h", "2h", "3h", "4h", "5h",
  "6h", "7h", "8h", "9h", "10h",
  "11h", "12h", "13h", "14h", "15h",
  "16h", "17h", "18h", "19h", "20h",
  "21h", "22h", "23h", "24h",
]
const selecstatus = [
  'Done', 'Not done'
]
function App() {
  const [button, setButton] = useState('');
  const [input, setInput] = useState('');
  const [time , setTime] = useState('');
  const [status, setStatus] = useState('Done')
  const handleAdd = () =>{
    console.log('Add')
  }
  const handleSearch = () =>{
    console.log('Search')
  }
  const handleClear = () =>{
    console.log('Clear')
  }
  const handleOnchangeInput = (event) =>{
    console.log('------input------')
  }
  const hendleChangetime = (event) =>{
    const {value} = event.target;
    setTime(value)
  }
  const hendleChangeStatus = (event) =>{
    const {value} = event.target;
    setStatus(value)
  }
  return (
    <React.Fragment>
      <div className='app'>
        <h1>Todo List</h1>
        <div className='todo-list-header'>
          <div className='add-todo-list'>
            <Button name="Add" style={typeApp} onClick={handleAdd}/>
          </div>
          <div className='search-todo-list'>
            <Input 
              type='text'  
              placeholder='Search' 
              onChange={handleOnchangeInput} 
              value={input} 
              name='search'
            />
            <Button name="Search" style={typeSearch} onClick={handleSearch}/>
            <Button name="Clear" style={typeClear} onClick={handleClear}/>
          </div>
        </div>
        <h1>Selectoption</h1>
        <div className='selectoption'>
          <Selectoption style={style} name="timeSelec" onChange={hendleChangetime} options={timeOption} value={null}/>
          <Selectoption name="selectstatus" onChange={hendleChangeStatus} options={selecstatus} value={null}/>
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
