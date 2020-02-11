import React from 'react';
import { connect } from "react-redux";
import mapDispatchToProps from '../../actions/creator';
import styles from './styles';
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
      <div style={styles.contents}>
        <ul>
        {lists.map((list, index) => (
          <li key={`list-item-${index}`}>{list.title}</li>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contents);
