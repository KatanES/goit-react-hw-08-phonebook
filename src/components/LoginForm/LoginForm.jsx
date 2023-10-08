import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledForm, StyledLabel, StyledInput } from './LoginForm.styled';
import { ContactBtn } from 'components/Phonebook/PhoneForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" placeholder="Enter your email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput
          type="password"
          name="password"
          placeholder="Enter your name"
        />
      </StyledLabel>
      <ContactBtn type="submit">Log In</ContactBtn>
    </StyledForm>
  );
};
