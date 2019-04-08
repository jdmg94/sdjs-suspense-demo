import React from 'react';
import Content from '../Content';
import styled from 'styled-components';

const Progress = styled.div`  
  margin: auto;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 16px solid #F3F3F3;
  border-top: 16px solid #3498DB;  
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loader = () => (
  <Content>
    <Progress />
  </Content>
);

export default Loader;