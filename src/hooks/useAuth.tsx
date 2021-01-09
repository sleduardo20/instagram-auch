import React, { createContext, useCallback, useContext, useState } from 'react';

export interface User {
  name: string;
  password: string;
}

interface AuthConextData {
  signIn(data: User): void;
  signOut(): void;
  user: User | null;
}

const AuthContext = createContext<AuthConextData>({} as AuthConextData);

const AuthConextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = useCallback((data: User) => {
    localStorage.setItem('name', data.name);
    setUser(data);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('name');
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthConextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthConextProvider, useAuth };
