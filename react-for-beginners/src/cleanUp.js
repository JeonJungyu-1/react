import { useState, useEffect } from 'react';

function Hello() {
  //first
  // useEffect(() => {
  //   console.log('created :)');
  //   return () =>console.log('destroyed :(');
  // }, []);

  // second
  // function byFN() {
  //   console.log('bye :(');
  // }
  // function hiFn() {
  //   console.log('created :)');
  //   return byFN;
  // }
  // useEffect(hiFn, []);

  // third
  useEffect(function () {
    console.log('hi :)');
    return function() {
      console.log('bye :(');
    }
  }, []);
  
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
