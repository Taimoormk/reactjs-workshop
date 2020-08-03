import React, { Fragment } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          App Component
        </div>
        <Header text="Header" />
        <Footer text="Footer" number={2} bool />
      </Fragment>
    );
  }
};

export default App;
