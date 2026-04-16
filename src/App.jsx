import Header from './components/Header';
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
