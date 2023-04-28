import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // github provider
  const githubProvider = new GithubAuthProvider();
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  // set user when auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
        setLoading(false);
        setError(null);
      },
      (error) => {
        setUser(null);
        setLoading(false);
        setError(error);
      }
    );
    return () => unsubscribe();
  }, []);

  console.log(user);
  const authInfo = {
    user,
    loading,
    error,
    loginWithGithub,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
