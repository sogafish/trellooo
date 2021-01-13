import React from 'react';
import Header from './components/Header';
import { connect } from 'react-redux'
import { mapDispatchToProps } from './actions/creator'
import { AddList } from './components/AddList';

const App: React.FC = (props: $FixMe) => {
  const {
    actions: { addItem }
  } = props;

  return (
    <div className="App">
      <Header />
      <AddList add={addItem} />
    </div>
  );
};

function mapStateToProps(state: $FixMe) {
  return state;
};

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default connectToStore(App);
