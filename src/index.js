import React from 'react';
import ReactDOM from 'react-dom';




const timerFunc = () => {
  const elem = (
    <div>
      <h1>my timer show</h1>
      <h2>the time is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(elem, document.getElementById('root'))
}

setInterval(() => {
  timerFunc()
}, 1000);


