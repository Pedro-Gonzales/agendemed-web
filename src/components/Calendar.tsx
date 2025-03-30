import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import {format} from 'date-fns/format';
import {parse} from 'date-fns/parse';
import {startOfWeek} from 'date-fns/startOfWeek';
import {getDay} from 'date-fns/getDay';
import {ptBR} from 'date-fns/locale/pt-BR';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'pt-BR': ptBR
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const MyCalendar = ({ events }) => (
  <div className="h-[600px]">
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      culture="pt-BR"
      messages={{
        today: 'Hoje',
        previous: 'Anterior',
        next: 'Próximo',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia'
      }}
    />
  </div>
);

export default MyCalendar;