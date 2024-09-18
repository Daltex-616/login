import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth()

  if(auth.isAuthenticated){
    return <Navigate to="/dashboard"/>
  }
  return (
    <>
      <DefaultLayout>
        <form className="form">
          <h1>Login</h1>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Login</button>
        </form>
      </DefaultLayout>
    </>
  );
};

export default Login;
