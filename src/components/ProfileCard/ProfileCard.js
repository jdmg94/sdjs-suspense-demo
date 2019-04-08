import Box from '../Box';
import React from 'react';
import Text from '../Text';
import Layout from '../Layout';
import Image from '../RoundImage';
import { useSpring, animated } from 'react-spring';

const ProfileCard = ({
  displayName, email, image, thumbnail,
}) => {
  const animation = useSpring({
    from:{
      opacity: 0,
      transform: 'scale(0.6)',
    },
    to:{
      opacity: 1,
      transform: 'scale(1)',
    },
  })

  return (
    <Layout>
      <animated.div style={animation}>
        <Box
          width="40vw"
          height="40vh"          
        >
          <Image 
            src={image}
            alt={displayName}
          />   
          <Text>
            <h1
              style={{ marginBottom: '.5rem' }}
            >
              {displayName}
            </h1>
            {email}
          </Text>
        </Box> 
      </animated.div>      
    </Layout>
  );
}

export default ProfileCard;