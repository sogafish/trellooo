import React from 'react';
import { connect } from "react-redux";

interface Props {}
interface State {}

class Contents extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <p>contents</p>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {state};
}

export default connect(mapStateToProps)(Contents);
