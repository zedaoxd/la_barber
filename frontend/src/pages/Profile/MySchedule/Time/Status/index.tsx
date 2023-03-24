import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

type StatusProps = {
  status: string;
};

const Status = ({ status }: StatusProps) => {
  return (
    <>
      {status === 'PENDING' && (
        <>
          <AccessAlarmIcon color="primary" />
          Agendado
        </>
      )}
      {status === 'MISSED' && (
        <>
          <CloseIcon color="error" />
          Falta
        </>
      )}
      {status === 'FINISHED' && (
        <>
          <CheckIcon color="success" />
          Finalizado
        </>
      )}
      {status === 'CANCELED' && (
        <>
          <DoNotDisturbIcon color="error" />
          Cancelado
        </>
      )}
    </>
  );
};

export default Status;
