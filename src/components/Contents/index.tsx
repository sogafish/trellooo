import React from 'react';
import { connect } from "react-redux";
import AddList from '../AddList';

interface Props {}
interface State {}

class Contents extends React.Component<Props, State> {
  render() {
    console.log(this.props, '::::::::::::::::::::::::::::::');
    return (
      <div>
        <AddList />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {　state　};
}

export default connect(mapStateToProps)(Contents);
