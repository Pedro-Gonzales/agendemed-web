// src/pages/Patients.tsx
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { fetchPatients } from '../../store/slices/patientSlice';
import Header from '../../components/layout/Header';

const Patients = () => {
  const dispatch = useAppDispatch();
  const { list, pagination, loading, error } = useAppSelector((state) => state.patients);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPatients({ page: pagination.page, search: searchTerm }));
  }, [dispatch, pagination.page, searchTerm]);

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Pacientes</h1>
          <input
            type="text"
            placeholder="Buscar pacientes..."
            className="border rounded-md px-4 py-2 w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Botão de novo paciente */}
        </div>

        {/* Tabela de pacientes */}
        
        {/* Paginação */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => dispatch(fetchPatients({ page: pagination.page - 1 }))}
            disabled={pagination.page === 1}
            className="px-4 py-2 mx-1 border rounded disabled:opacity-50"
          >
            Anterior
          </button>
          <span className="px-4 py-2">Página {pagination.page}</span>
          <button
            onClick={() => dispatch(fetchPatients({ page: pagination.page + 1 }))}
            disabled={pagination.page * 10 >= pagination.total}
            className="px-4 py-2 mx-1 border rounded disabled:opacity-50"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Patients