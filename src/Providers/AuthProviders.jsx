import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const githubLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;