import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

type StatusProps = {
  status: string;
};

const Status = ({ status }: StatusProps) => {
  return (
    <>
      {status === 'Agendado' && 'Agendado'}
      {status === 'Falta' && <CloseIcon color="error" />}
      {status === 'Finalizado' && <CheckIcon color="success" />}
    </>
  );
};

export default Status;
