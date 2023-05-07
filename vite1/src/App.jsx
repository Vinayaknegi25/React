import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  var min=0,sec=0,hour=0;
  const start=document.querySelector("#Start");
  const stop=document.querySelector("#Stop");
  const reset=document.querySelector("#Reset");
  const time= document.querySelector("#Time");

  var interval;
  function StartFun(){
    interval=setInterval(TimerStart, 10)
  }

  async function TimerStart (){
    sec++;
    if(sec>60)
    {
      sec=0;
      min++;
    }
    if(min>60)
    {
      min=0;
      hour++;
    }
    time.innerHTML=`${hour}:${min}:${sec}`;
  }

  function StopFun(){
    clearInterval(interval);
  }

  function ResetFun(){
    console.log("Stopping")
    min=sec=hour=0;
    clearInterval(interval);
    time.innerHTML='0:0:0';
   
  }


  return (
    <div id="Stopwatch">
      <h1 id="Time">0:0:0</h1>

      <button id="Start" onClick={StartFun}>Start</button>
      <button id="Reset" onClick={ResetFun}>Reset</button>
      <button id="Stop" onClick={StopFun}>Stop</button>
    </div>
  )
}

export default App
