import React, { FC, useState, useEffect } from 'react';
import { User } from 'firebase/app';
import { useAuth } from '../lib/firebase';
import AuthenticationContext from '../contexts/AuthenticationContext';

import { Nullable } from '../types';

/**
 * This component checks the user's authentication state
 * and passes the user's info and decoded token (if available)
 * to the context.
 */
export const AuthenticationProvider: FC = (props) => {
  const auth = useAuth();

  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState<Nullable<User>>(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((userInfo) => {
      console.debug('Component: UserProvider', 'auth state changed', userInfo && userInfo!.toJSON());
      setUser(userInfo);
      setUserLoaded(true);
    });
  }, [auth]);

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoaded: userLoaded,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};
