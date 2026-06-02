import React, {createContext, useState} from 'react';

export const AppContext = createContext<any>(null);

export const AppProvider = ({children}: any) => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'jp'>('en');

  return (
    <AppContext.Provider
      value={{darkMode, setDarkMode, language, setLanguage}}>
      {children}
    </AppContext.Provider>
  );
};
