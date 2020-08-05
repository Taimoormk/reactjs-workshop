import React, { Fragment } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Input } from './components/input';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { InputWithLocalState } from './components/input-local-state';
import { InputWithReduxState } from './components/input-redux-state';

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
        <div>
          <p>Input with local state (hooks)</p>
          <InputWithLocalState />
        </div>
        <div>
          <p>Input with redux state (hooks)</p>
          <InputWithReduxState />
        </div>
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
