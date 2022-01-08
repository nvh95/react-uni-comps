import React from 'react';
import { styled, ThemeProvider } from 'react-uni-comps';
import { Provider, configureStore } from 'simple-redux-store';

const StyledWrap = styled.div`
  padding: 16px;
  font-size: 14px;
`;

const getColor = () => document.documentElement.style.getPropertyValue('--uc-color') || '#005cff';

const initialState = { theme: getColor() };
const store = configureStore(initialState);

export default function PageWrap({ children, ...rest }) {
  return (
    <Provider store={store}>
      <ThemeProvider color={getColor()}>
        <StyledWrap {...rest}>{children}</StyledWrap>
      </ThemeProvider>
    </Provider>
  );
}
