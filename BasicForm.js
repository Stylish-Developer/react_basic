import React, { useState } from "react";

const BasicForm = () => {
    const [personInfo,setPersonInfo] = useState({
        username :'',
        password:'',
        email:'',
        mobileno:'',
        comments:''
    });

const { username,password,email,mobileno,comments } = personInfo;

const handleChange = ( e ) => {
    setPersonInfo({...personInfo,[e.target.name] : e.target.value})
}
const handleSubmit = (e) => {
e.preventDefault();
alert(`${username} & ${password} & ${email} & ${mobileno} & ${comments}`);
console.log(personInfo);
}
  const formstyle = {
    border: "1px solid green",
    height: "auto",
    width: "300px",
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    margin: "20px",
    padding: "10px",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={formstyle}>
        <label> Username </label>
        <input type="text" name="username" value={username} onChange={ handleChange } />
        <label> Password </label>

        <input type="password" name="password" value={password} onChange={ handleChange } />
        <label> Email </label>

        <input type="email" name="email" value={email} onChange={ handleChange } />
        <label> MobileNo </label>

        <input type="tel"  name="mobileno" value={mobileno} onChange={ handleChange }/>
        <label> Comments </label>

        <textarea
        name="comments"
        value={comments}
        onChange={handleChange}
        >  </textarea>
        <button type="submit">signup</button>
      </div>
    </form>
  );
};

export default BasicForm;
