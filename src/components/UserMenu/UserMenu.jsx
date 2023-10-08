import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'components/hooks';
import { wrapper, username } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <wrapper>
      <username>Welcome, {user.name}</username>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </wrapper>
  );
};
