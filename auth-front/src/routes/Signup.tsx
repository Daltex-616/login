import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";

const Signup = () => {
  const [Username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const auth = useAuth()

  if(auth.isAuthenticated){
    return <Navigate to="/dashboard"/>
  }
  return (
    <>
      <DefaultLayout>
        <form className="form">
          <h1>Signup</h1>
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={(e) =>setName(e.target.value)}/>

          <label htmlFor="">Username</label>
          <input type="text" value={Username} onChange={(e) =>setUsername(e.target.value)} />


          <label htmlFor="">Password</label>
          <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
          

          <button>Create Acount</button>
        </form>
      </DefaultLayout>
    </>
  );
};

export default Signup;
