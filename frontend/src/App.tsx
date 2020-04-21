import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import api from './services/api';

interface IUser {
  name:string;
  email: string;
}

function App() {

  const [users,setUsers] = useState<IUser[]>([]);

  useEffect(()=>{
    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data);
    })
  },[])


  return (
    <div className="App">
      {users.map( user => <p>{user.name}</p>)}
    </div>
  );
}

export default App;
