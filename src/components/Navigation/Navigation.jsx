import { NavLink } from 'react-router-dom';

import { useAuth } from 'components/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/tasks">Contacts</NavLink>}
    </nav>
  );
};
