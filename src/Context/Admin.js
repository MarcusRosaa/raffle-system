/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import {
  useState, createContext, useCallback, useEffect, useContext,
} from 'react';

import {
  getRafflesList,
} from '../services/RafflesService';

const AdminContext = createContext({});

const AdminProvider = ({ children }) => {
  const [raffles, setRaffles] = useState([]);

  // ============================= GET

  const listRaffles = useCallback(async () => {
    const posts = await getRafflesList();
    setRaffles(posts);
  }, []);

  useEffect(() => {
    listRaffles();
  }, [
    listRaffles,
  ]);

  return (
    <AdminContext.Provider value={{
      raffles,
    }}
    >
      {children}
    </AdminContext.Provider>
  );
};

function useAdmin() {
  const context = useContext(AdminContext);

  if (!context) throw new Error('useAdmin must be used within a UserProvider');

  return context;
}

export { AdminProvider, useAdmin };
