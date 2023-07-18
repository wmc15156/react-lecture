const Input = ({ email, onChangeInput, age, onAddUser, nameInputRef }) => {
    return (
        <>
            <input ref={nameInputRef} type='text' placeholder='email' name='email' value={email} onChange={onChangeInput}  />
            <input type='text' placeholder='age' name='age' value={age} onChange={onChangeInput}  />
            <button onClick={onAddUser}>add</button>
        </>

    )
}

export default Input;