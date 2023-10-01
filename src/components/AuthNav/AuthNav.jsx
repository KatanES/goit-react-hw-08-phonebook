import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <div>
        <NavLink to="/login">Log In</NavLink>
      </div>
    </div>
  );
};
