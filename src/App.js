import React from 'react';
import Header from './components/Header';
import Video from './components/Video';
import Description from './components/Description';
import Colors from './components/Colors';
import Specifications from './components/Specifications';
import Comments from './components/Comments';
import Footer from './components/Footer';

const App = ({ location }) => {
  return (
    <>
      <div className="container">
        <Header location={location}/>
        <Video/>
        <Description />
        <Colors />
        <Specifications />
        <Comments />
        <Footer />
      </div>
    </>
  );
};

export default App;
