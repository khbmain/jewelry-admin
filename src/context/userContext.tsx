import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the user information
interface User {
  id: string;
  name: string;
  email: string;
}

// Define the type for the context value
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Create the context with a default value of null
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
