import React from 'react';
import ReactDom from 'react-dom'



const Hello = () => {
  return (
    <div>Bonjour A Vous!</div>
  )
}


ReactDom.render(<Hello />, document.getElementById('app'))