import { bindActionCreators } from 'redux';	
import * as actions from './index';	

export const mapDispatchToProps = (dispatch: any) => {	
  return {	
    actions: bindActionCreators(actions, dispatch),	
  };	
};	
