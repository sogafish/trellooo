import { css } from '@emotion/core';
import CSS from "csstype";
import commonStyles from '../../utils/commonStyles';

export const header: CSS.Properties = {
  position: 'fixed',
  width: '100%',
  height: commonStyles.headerHeight,
  backgroundColor:commonStyles.mainDark,
};

const headerStyles: CSS.Properties = {
  color: 'red',
};

export const headerTitle = css({
  ...headerStyles,
});
