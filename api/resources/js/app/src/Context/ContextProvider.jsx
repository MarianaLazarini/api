import {createContext, useState, useContext} from "react";


export const LoginContexto = createContext(null);

const ContextProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('TOKEN'))

    const _setToken = (token) => {
        setToken(token)
        token
        if(token){
            localStorage.setItem('TOKEN', token);
        } else{
            localStorage.removeItem('TOKEN');
        }
    }

    const _setUser = (user) => {
        setUser(user)
    }
    
return (
    <LoginContexto.Provider
      value={{
        user,
        token,
        _setToken,
        _setUser,
      }}
    >
              {children}
    </LoginContexto.Provider>
      );
};

export default ContextProvider;

 export const useLogin = () => {
    const contexto = useContext(LoginContexto)
    return contexto;
}