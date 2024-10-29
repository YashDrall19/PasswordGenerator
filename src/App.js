import { useState } from 'react';
import './App.css';
import {upperCase, lowerCase, numberCase, symbolCase} from './data/Data.jsx'
function App() {

  let [UC, setUC] = useState(false)
  let [LC, setLC] = useState(false)
  let [NC, setNC] = useState(false)
  let [SC, setSC] = useState(false)
  let [passLength, setPassLength] = useState(10)

  let [finalPassword, setFinalPassword] = useState()

  let [selectsAllButton, setSelectsAllButton] = useState(false)

  let createPassword= () => {
    
    let charset = ''
    let finalPass = ''

    if(UC || LC || NC || SC) {
      if(UC) charset += upperCase
      if(LC) charset += lowerCase
      if(NC) charset += numberCase
      if(SC) charset += symbolCase
      
      for (let i=0; i<passLength; i++){
        finalPass += charset.charAt(Math.floor(Math.random()*charset.length))
      }
      setFinalPassword(finalPass);
      
    } else {
      alert('Select at least one check box!!');
    }
  }

  let copyPassword =() => {
    navigator.clipboard.writeText(finalPassword);
  }

  let selectAll = () => {
    setUC(true)
    setLC(true)
    setNC(true)
    setSC(true)
    setSelectsAllButton(true)
  }

  let unselectAll = () => {
    setUC(false)
    setLC(false)
    setNC(false)
    setSC(false)
    setSelectsAllButton(false)
  }

  let toggleSelectAll = () => {
    if (selectsAllButton) {
        unselectAll();
    } else {
        selectAll();
    }
};

  return (
    <>
      <div className="patch">
        <h1>PassWord Generator</h1>

        <div className="passIn">
          <input type="text" readOnly value={finalPassword}/> <button onClick={copyPassword}>Copy</button>
        </div>

        <div className="passLength">
          <label>Password Length</label>
          <input type="number" value={passLength} onChange={(e)=>setPassLength(e.target.value)} max={20} min={10}/>
        </div>

        <div className="options">
          <div className="checkbox">
            <label>Include Uppercase Letters</label>
            <input type="checkbox" checked={UC} onChange={()=>setUC(!UC)}/>
          </div>

          <div className="checkbox">
            <label>Include LowerCase Letters</label>
            <input type="checkbox" checked={LC} onChange={()=>setLC(!LC)}/>
          </div>

          <div className="checkbox">
            <label>Include Numbers</label>
            <input type="checkbox" checked={NC} onChange={()=>setNC(!NC)}/>
          </div>

          <div className="checkbox">
            <label>Include Symbols</label>
            <input type="checkbox" checked={SC} onChange={()=>setSC(!SC)}/>
          </div>

          <div className="selectAll">
            <label>Include All</label>
            <input type="checkbox" onChange={toggleSelectAll} />
          </div>
        </div>

        <div className="btn" onClick={createPassword}>
          <button>Generate Password</button>
        </div>
      </div>

      
    </>
  );
}

export default App;
