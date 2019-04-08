import React from 'react';
import { isEmpty } from 'lodash';
import styled from 'styled-components';
import createResource from '../../sauce/createResource';

export const RoundImage = styled.img`  
  width: 10rem;
  height: 10rem;  
  margin: 1.5rem;
  border-radius: 50%;
  display: inline-flex;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, .6);
`;

const resource = createResource(src => new Promise((resolve, reject) => {
  const img = new Image();
  img.src = src;
  img.onload = resolve;
  img.onerror = reject;
}));

const Img = ({ src, ...props }) => {  
  if(!isEmpty(src)) resource.read(src);

  return <RoundImage src={src} {...props} />
}

export default Img;