import { useState } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDKNEKmHMCYYXVUO_PDN7krJsZPGoiGUcQ",
    authDomain: "first-login-bcl.firebaseapp.com",
    projectId: "first-login-bcl",
    storageBucket: "first-login-bcl.appspot.com",
    messagingSenderId: "376199174378",
    appId: "1:376199174378:web:7400bcd886057f5f1fdf93"
  };

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // connect to our firebase project first 
    const app = initializeApp(firebaseConfig);
    // connect to auth 
    const auth = getAuth(app);
    //line 2, 4 and 18 is just connecting to fire base. 
    //go to the docs and go to web
    // send email and password to firebase auth
    const user = await createUserWithEmailAndPassword(auth, email, password)
        .catch(err => alert(err.message))
    //if all ok, then set is logged in to to true and if error then lets pop up that error
    if(user) {
        console.log(user)
        setIsLoggedIn(true)
  }
}
  return (
    <form onSubmit= {(e) => e.preventDefault()} >
      <label htmlFor="email">
        Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="you@there.com"
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
      </label>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </form>
  );
}

export default Login;
