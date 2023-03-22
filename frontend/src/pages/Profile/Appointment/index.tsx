import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, GridHours, HourSelected, Form, ButtonConfirm, Wanings } from './styles';
import { useState } from 'react';
import { getAllBarbers } from '../../../services/userService';
import { useQuery } from '@tanstack/react-query';
import { User } from '../../../@types/user';

type AppointmentSelectForm = {
  barber: User;
  date: number;
  time: string;
};

const hoursAvailable = [
  { hour: '08:00', select: false },
  { hour: '09:00', select: false },
  { hour: '10:00', select: false },
  { hour: '11:00', select: false },
  { hour: '12:00', select: true },
  { hour: '13:00', select: true },
  { hour: '14:00', select: false },
  { hour: '15:00', select: false },
  { hour: '16:00', select: false },
  { hour: '17:00', select: true },
  { hour: '18:00', select: false },
  { hour: '19:00', select: false },
  { hour: '20:00', select: false },
];

// const employees = [
//   { id: '1', name: 'João' },
//   { id: '2', name: 'Maria' },
//   { id: '3', name: 'José' },
// ];

// type Employee = typeof employees[0];

const Appointment = () => {
  const { handleSubmit, control, setValue, watch } = useForm<AppointmentSelectForm>();
  const [selectedHour, setSeletectHour] = useState('');

  const today = new Date();
  const sevenDaysFromNow = new Date(today.setDate(today.getDate() + 7));

  const { data: barbers } = useQuery(['barbers'], getAllBarbers);

  const handleSelectHour = (hour: string) => {
    if (hour === selectedHour) {
      setSeletectHour('');
      setValue('time', '');
    } else {
      setSeletectHour(hour);
      setValue('time', hour);
    }
  };

  const handleSubmitForm = (data: AppointmentSelectForm) => {
    console.log(data);
  };

  return (
    <Container>
      <h1>Marque um hórario agora 👏 </h1>

      <Form autoComplete="off" onSubmit={handleSubmit(handleSubmitForm)}>
        <Controller
          name="barber"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  border: 'none',
                  borderRadius: '4px',
                  height: '40px',
                  padding: '0 10px',
                  fontSize: '16px',
                  color: '#666',
                  '&:hover': {
                    borderColor: 'none',
                  },
                }),
                placeholder: (provided, state) => ({
                  ...provided,
                  color: '#999',
                }),
                singleValue: (provided, state) => ({
                  ...provided,
                  color: '#666',
                }),
                menu: (provided, state) => ({
                  ...provided,
                  zIndex: 999,
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: '#666',
                  backgroundColor: state.isSelected ? '#eee' : '#fff',
                  '&:hover': {
                    backgroundColor: '#eee',
                  },
                }),
              }}
              options={barbers || []}
              classNamePrefix="select-employee"
              getOptionLabel={emp => emp.name}
              getOptionValue={emp => emp.id.toString()}
              placeholder="Selecione um funcionário"
            />
          )}
        />

        {watch('barber') && (
          <Controller
            control={control}
            name="date"
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value ? new Date(field.value) : null}
                value={field.value ? new Date(field.value).toLocaleDateString() : ''}
                wrapperClassName="date-picker"
                minDate={new Date()}
                maxDate={sevenDaysFromNow}
                onChange={(d: Date) => setValue('date', d.getTime())}
                disabledKeyboardNavigation
                dateFormat="dd/MM/yyyy"
                placeholderText="Selecione uma data"
              />
            )}
          />
        )}

        {watch('date') && (
          <>
            <h2>Hórarios disponiveis</h2>
            <GridHours>
              {hoursAvailable.map(h => (
                <div key={h.hour} className={`btn-hour-container`}>
                  <HourSelected
                    selected={h.hour === selectedHour}
                    type="button"
                    onClick={() => handleSelectHour(h.hour)}
                    disabled={h.select}
                    value={h.hour}
                  >
                    {h.hour}
                  </HourSelected>
                </div>
              ))}
            </GridHours>
          </>
        )}

        {watch('time') && (
          <>
            <Wanings>
              <p>
                Atrasos de 5 minutos será considerado como falta e poderá ser impedido de marcar
                novos serviços no futuro
              </p>
            </Wanings>
            <ButtonConfirm type="submit">Confirmar</ButtonConfirm>
          </>
        )}
      </Form>
    </Container>
  );
};

export default Appointment;
