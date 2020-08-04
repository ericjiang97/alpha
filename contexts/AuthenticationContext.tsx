import React from 'react';
import { User } from 'firebase/app';
import { Nullable } from '../types';

export interface AuthenticationContextState {
  /**
   * This value should be `true` once the initial loading of
   * the current authentication state has completed.
   */
  isLoaded: boolean;

  /**
   * The currently authenticated user if available.
   */
  user: Nullable<User>;
}

const AuthenticationContext = React.createContext<AuthenticationContextState>({
  isLoaded: false,
  user: null,
});

export default AuthenticationContext;
