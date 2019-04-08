import React from 'react';
import Item from '../../components/Item';
import Layout from '../../components/Layout';
import { useTrail, animated } from 'react-spring';

const items = [
  {
    label: 'Classes',
    link: '/with-classes',
  },
  {
    label:'Hooks',
    link:'/with-hooks',
  },
  {
    label:'Suspense',
    link:'/with-suspense',
  },
  {
    label:'Editing',
    link:'/with-editing',
  }
];

const Home = () => {
  const trail = useTrail(items.length, {
    from:{
      opacity: 0,
      transform: 'translateY(5rem)',
    },
    to:{
      opacity: 1,
      transform: 'translateY(0)',
    },
  });

  return (
    <Layout>
      {
        trail.map((props, index) => (
          <animated.div style={props}>
            <Item 
              {...items[index]}
            />               
          </animated.div>
        ))
      }      
    </Layout>
  );
}

export default Home;