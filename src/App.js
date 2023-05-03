import logo from './logo.svg';
import './App.css';
import { useState,useRef,useEffect } from 'react';
import useFetch from './useFetch';
import UserList from './components/UserList';

function App() {
  const [count, setCount]=useState(0)
const [users, setUsers]=useFetch('http://localhost:43000/users')

  const countRef=useRef(0)
  // useExample return values


  const handleClick=(e)=>{
  
  const operation=e.target.textContent
  if(operation.trim()==='Increment'){
    setCount(count+1)
    countRef.current+=1
  }else{
    setCount(count-1)
countRef.current+=1
  }
}
console.log(`Count modified ${countRef.current} times`)
  return (<div className='page-content'>
    <div className="sidebar">
      <ul>
        <li>Add Form </li>
        <li>Update </li>
        <li>Delete</li>
        <li>PATCH </li>
      </ul>
    </div>
 <UserList users={users}/>
  </div>

  );
}

export default App;
