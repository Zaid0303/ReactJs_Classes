import React, { useContext } from 'react';
import { MyContext } from './App';

function ChildA() {
  const user = useContext(MyContext);

  return <h3>Hello {user} from ChildA!</h3>;
}

export default ChildA;