import styled from 'styled-components';

const Box = styled.div`   
  margin: 1rem;
  padding: 1.25rem;  
  align-items: center;
  border-radius: 1rem;
  display: inline-flex;
  text-decoration: none;
  background-color: white;
  justify-content: center;
  height: ${props => props.height}
  width: ${props => props.width}
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);

  @media (min-width: 320px) and (max-width: 480px) {
    width: 80vw;
    text-align: center;
    flex-direction: column;       
  }
`;


export default Box;