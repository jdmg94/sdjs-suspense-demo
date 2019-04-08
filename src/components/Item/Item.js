import React from 'react'
import Box from '../Box';
import Row from '../Row';
import Text from '../Text';
import Chevron from '../Chevron';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemBox = styled(Box)`
  height: 10vh;
  width: 20vw;  

  @media (min-width: 320px) and (max-width: 480px) {
    width: 80vw;
    margin: 1rem;
  }
`;

const Level = styled(Row)`
  justify-content: space-between;
`;

const CleanLink = styled(Link)`
  text-decoration: none;
`

const Item = ({ link, label }) => (
  <CleanLink to={link}>
    <ItemBox>
      <Level>
        <Text>{label}</Text>
        <Chevron />
      </Level>
    </ItemBox>
  </CleanLink>
);

export default Item;
