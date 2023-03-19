import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideBarProfile from '../../components/SideBarProfile';
import { Background, Container, ContainerProfile } from './styles';

const Profile = () => {
  useEffect(() => {
    document.title = 'La Barber | PROFILE';
  }, []);

  return (
    <Background>
      <Container>
        <SideBarProfile />
        <ContainerProfile>
          <Outlet />
        </ContainerProfile>
      </Container>
    </Background>
  );
};

export default Profile;
