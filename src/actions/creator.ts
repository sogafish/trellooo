import { bindActionCreators } from 'redux';
import * as actions from './index';

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default mapDispatchToProps;
