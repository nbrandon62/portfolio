import Exp from './components/Exp';
import ExpHeader from './components/ExpHeader';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import ProjectsHeader from './components/ProjectsHeader';
import './styles/App.css';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <ExpHeader />
      <Exp />
      <ProjectsHeader />
      <ProjectList />
    </>
  )
}

export default App
