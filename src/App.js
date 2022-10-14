
//css
import './App.css';

//react router dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// components
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

// pages
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<TaskPage/>} /> 
      </Routes>
      <FooterComponent/>    
    </BrowserRouter>
  );
}

export default App;
