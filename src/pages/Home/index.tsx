import Header from "../../components/layout/Header";

const Home = () => {
    return (
      <div>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Bem-vindo, Dr.</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Pacientes</h2>
              {/* Adicionar estatísticas/resumo */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Próximas Consultas</h2>
              {/* Adicionar lista de consultas */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;