import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResumePage from './pages/ResumePage';
import './styles/App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' exact element={<ResumePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
