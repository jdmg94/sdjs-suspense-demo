import Row from '../../components/Row';
import Box from '../../components/Box';
import React, { useState } from 'react';
import Input from '../../components/Input';
import useTitle from '../../sauce/useTitle';
import Layout from '../../components/Layout';
import Column from '../../components/Column';
import { getUser } from '../../service/users';
import { useSpring, animated } from 'react-spring';
import RoundImage from '../../components/RoundImage';
import createResource from '../../sauce/createResource';

const resource = createResource(getUser);

const EditableProfile = () => {
  useTitle('SDJS - with Editing');
  
  const initialData = resource.read();  
  const [email, changeEmail] = useState(initialData.email);
  const [lastName, changeLastName] = useState(initialData.name.last);
  const [firstName, changeFirstName] = useState(initialData.name.first);  
  
  const fromEvent = action => ({ target }) => action(target.value);
  const animation = useSpring({
    from:{
      opacity: 0,
      transform: 'scale(0.6)',
    },
    to:{
      opacity: 1,
      transform: 'scale(1)',
    },
  });

  return (
    <Layout>
      <animated.div style={animation}>
        <Box>
          <RoundImage 
            src={initialData.picture.large}
          />
          <Column>
            <Row
              style={{ justifyContent: 'flex-start' }}
            > 
              <Input 
                value={firstName}
                style={{ fontSize: '2rem' }}
                onChange={fromEvent(changeFirstName)}              
              />
              <Input 
                value={lastName}
                style={{ fontSize: '2rem' }}
                onChange={fromEvent(changeLastName)}              
              />
            </Row>          
            <Input
              type="email"
              value={email}    
              onChange={fromEvent(changeEmail)}
            />
          </Column>
        </Box>
      </animated.div>
    </Layout>
  )

};

export default EditableProfile;