import React from 'react';
import Header from './components/Header';
import Video from './components/Video';
import Description from './components/Description';
import Colors from './components/Colors';

const App = ({ location }) => {
  return (
    <>
      <div className="container">
        <Header location={location}/>
        <Video/>
        <Description />
        <Colors />
      </div>
    </>
  );
};

export default App;
