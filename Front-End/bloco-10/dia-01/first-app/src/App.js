import Header from './Header';
import './App.css';
import Content from './Content';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const ListaDeTarefas = ['React', 'Redux', 'Metodologias Ágeis', 'API', 'Muitos Projetos'];

function App() {
  return (
    <>
      <Header />
      {ListaDeTarefas.map((actualItem) => Task(actualItem))}
      <Content />
    </>
  );
}

export default App;
