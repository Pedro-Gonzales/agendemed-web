import { useState } from "react";
import Header from "../../components/layout/Header";
import MyCalendar from "../../components/Calendar";

const Appointments = () => {
    const [events] = useState([
      {
        title: 'Consulta João Silva',
        start: new Date(2024, 2, 15, 14, 0),
        end: new Date(2024, 2, 15, 15, 0)
      }
    ]);
  
    return (
      <div>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Agendamentos</h1>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Nova Consulta
            </button>
          </div>
          
          <MyCalendar events={events} />
        </div>
      </div>
    );
  };
  
  export default Appointments;