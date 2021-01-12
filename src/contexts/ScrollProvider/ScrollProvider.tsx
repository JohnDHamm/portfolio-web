import React from 'react';

export const scrollContext = React.createContext({ y: 0 });

export const ScrollProvider: React.FC = ({ children }) => {
  const [y, setY] = React.useState<number>(window.innerWidth);

  const handleWindowScroll = () => {
    setY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <scrollContext.Provider value={{ y }}>{children}</scrollContext.Provider>
  );
};
