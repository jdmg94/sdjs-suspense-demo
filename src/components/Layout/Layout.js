import Row from '../Row';
import React from 'react';
import Column from '../Column';
import Content from '../Content';

const Layout = ({ children }) => (
  <Content>
    <Row>
      <Column>
        {children}
      </Column>
    </Row>
  </Content>
);

export default Layout;