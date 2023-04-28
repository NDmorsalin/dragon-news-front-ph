import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import setUserRole from "../../utility/setUserRole";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // google provider
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

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
        if (user) {
          const setRole = async () => {
            const role = await setUserRole(user.uid);
            user.role = role;
            setUser(user);
            setLoading(false);
            setError(null);
          };
          // console.log(userRole)
          setRole();
        } else {
          setUser(null);
          setLoading(false);
          setError(null);
        }
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
    loginWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
