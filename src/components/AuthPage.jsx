import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { setUser } from "../state/userSlice";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">{isSignUp ? "Sign Up" : "Login"}</h2>
        <input
          type="email"
          placeholder="Email"
          className="border mb-4 p-2 w-full rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border mb-4 p-2 w-full rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp ? (
          <button
            onClick={handleSignUp}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Sign Up
          </button>
        ) : (
          <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Login
          </button>
        )}
        <p
          className="text-sm mt-4 text-center cursor-pointer text-blue-500"
          onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Already have an account? Log in" : "Don't have an account? Sign up"}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
