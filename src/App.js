import React, { Fragment } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Input } from './components/input';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class App extends React.Component {
  render() {
    const { input, updateInput } = this.props;
    return (
      <Fragment>
        <div>
          App Component
        </div>
        <Header text="Header" />
        <Footer text="Footer" number={2} bool />
        <Input input={input} updateInput={updateInput} />
      </Fragment>
    );
  }
};

const mapStateToProps = ({
  inputReducer: {
    anotherObj: {
      input,
    },
  },
}) => ({
  input,
});

const mapDispatchToProps = {
  updateInput: actions.updateInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
