import hat from 'hat';
import { kebabCase, isEmpty } from 'lodash';

const Cache = new Map();
const createResource = (method, hashFn) => {  
  const generatedKey = hat(32);

  const deriveKey = args => {  
    if(hashFn){
      return hashFn(...args);
    }else if(!isEmpty(args)){    
      return kebabCase(args[0]);
    }else {      
      return generatedKey;
    }
  }

  return ({
    read: (...args) => {    
      const key = deriveKey(args);

      if(Cache.has(key)) return Cache.get(key);

      throw method(...args).then(value => Cache.set(key, value));
    },
    clear: (...args) => {
      const key = deriveKey(args);
      
      Cache.delete(key);
    }
  })
};

export default createResource;