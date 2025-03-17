import './App.css';
import {Routes,Route} from 'react-router-dom';
import Lesson from './Component/Lesson';
import Mainpage from './Component/Mainpage';
import Navbar from './Component/Navbar';
import Signup from './Component/Signup';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
           <Navbar/>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>


        
        <Route path="/lesson/:courseId" element={<Lesson />} />
      </Routes>
    </div>
  );
}

export default App;
