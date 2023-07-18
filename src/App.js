
import './App.css';
import Counter from "./Counter";
import Input from './Input';
import { useEffect, useRef, useState } from 'react';
import UserList from './UserList';

// 리액트에서 리랜더링 되는 조건
//




function App() {
    const nextId = useRef(5);
    const nameInputRef = useRef();
    const [inputs, setInputs] = useState({
        email: '',
        age: ''
    })

    const [users, setUsers] = useState([{ id: 1, email: 'hero@naver.com', age: '30'}, { id: 2, email: 'james@naver.com', age: '31'}, { id: 3, email: 'curry@naver.com', age: '32'}, { id: 4, email: 'tom@naver.com', age: '33'}]);
    const { email, age } = inputs;

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onAddUser = () => {
        const newUser = { id: nextId.current, email, age };
        setUsers([...users, newUser ]);
        setInputs({
            email: '',
            age: ''
        })
        nameInputRef.current.focus();
        nextId.current += 1;
    }

    const onRemoveUser = (id) => {
        // const newList = users.filter((user) => user.id !== id );
        setUsers((users) => users.filter((user) => user.id !== id ));
    }

  return (
    <div className="App">
       <Input email={email} age={age} onChangeInput={onChangeInput} onAddUser={onAddUser} nameInputRef={nameInputRef}  />
       <UserList users={users} onRemoveUser={onRemoveUser} />
    </div>
  );
}

export default App;
