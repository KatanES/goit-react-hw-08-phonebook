// import { NavLink } from 'react-router-dom';
import { StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <div>
        <StyledLink to="/login">Log In</StyledLink>
      </div>
    </div>
  );
};
