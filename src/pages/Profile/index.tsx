import { useEffect } from 'react';
import { Container } from './styles';

const Profile = () => {
  useEffect(() => {
    document.title = 'La Barber | PROFILE';
  }, []);

  return (
    <Container>
      <h1>Profile</h1>
    </Container>
  );
};

export default Profile;
