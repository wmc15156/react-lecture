const User = ({ user, onRemoveUser }) => {
    return (
        <ul>
            <li>{user.email}({user.age}) <button onClick={() => {
                onRemoveUser(user.id);
            }}>삭제</button></li>
        </ul>
    )
}


const UserList = ({ users, onRemoveUser }) => {
    return (
        <div>
            {users.map((user) => <User key={user.id} user={user} onRemoveUser={onRemoveUser} /> )}
        </div>
    )
}

export default UserList;