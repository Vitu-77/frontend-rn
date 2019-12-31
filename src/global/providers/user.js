import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {

    const [_user, _setUser] = useState({});

    const initUser = async () => {
        const token = Cookies.get('AUTH_TOKEN');

        if (token) {
            const decodedToken = jwt.decode(token);
            const user = {
                id: decodedToken[0],
                name: decodedToken[1],
                username: decodedToken[2],
                acessLevel: decodedToken[3],
            }
            _setUser(user);
        }
    }

    const _showUser = () => console.log(_user);

    useEffect(() => {
        initUser();
    }, []);

    return (
        <UserContext.Provider value={{ _user, _showUser, _setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext };