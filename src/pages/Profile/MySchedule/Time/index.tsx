import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Status from './Status';

import { Container, DeleteButton, LeftContainer, RightContainer } from './styles';
import swal from 'sweetalert';

type TimeProps = {
  date: string;
  time: string;
  type: string;
  status: string;
};

const Time = ({ date = '', time = '', type = '', status = '' }: TimeProps) => {
  const onClickDelete = () => {
    swal({
      title: 'Tem certeza que deseja cancelar o agendamento?',
      icon: 'warning',
      buttons: ['Não', 'Sim, pode cancelar!'],
    }).then(value => {
      if (value) {
        swal('Cancelado!', 'Seu agendamento foi cancelado com sucesso!', 'success');
      }
    });
  };

  return (
    <Container status={status}>
      <LeftContainer>
        <p>Dia: {date ? date : '28/04/2023'}</p>
        <p>
          Horário:
          <span>
            <>
              <AccessTimeIcon />
              {time ? time : '10:00'}
            </>
          </span>
        </p>
      </LeftContainer>
      <RightContainer>
        <p>Tipo: {type ? type : 'Corte e Barba'}</p>
        <p>
          Situação: <Status status={status ? status : 'Agendado'} />
        </p>
      </RightContainer>

      {status === 'Agendado' && (
        <DeleteButton onClick={onClickDelete}>
          <DeleteIcon />
          Cancelar
        </DeleteButton>
      )}
    </Container>
  );
};

export default Time;
