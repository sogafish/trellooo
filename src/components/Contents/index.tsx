import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import AddList from '../AddList';

interface Props {
  actions: any,
  state: {
    lists: { title: string }[],
  },
}
interface State {}

class Contents extends React.Component<Props, State> {
  render() {
    const {
      actions: {
        addList,
      },
      state: {
        lists,
      },
    } = this.props;

    return (
      <div>
        <ul>
        {lists.map((list, index) => (
          <p key={`list-item-${index}`}>{list.title}</p>
        ))}
        </ul>
        <AddList
          addList={addList}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contents);
