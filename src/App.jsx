import Header from './components/header';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Sobre />
        <Projetos />
      </main>
    </>
  );
}

export default App;
