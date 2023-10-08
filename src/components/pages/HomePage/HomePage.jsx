import { Container, Title } from './HomePage.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        PhoneBook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
}
