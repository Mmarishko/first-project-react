import React, { createElement as el, useState } from 'react';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return el('div', {className: 'container'}, [
    el('h1', {className: 'font-dold', key: 1}, `Test ${count}`),
    el('button', {
      className: 'py-2 px-4 border', 
      key: 2,
      onClick: () => setCount(count + 1)
    }, 'Click me')
  ])
}

export default App;
