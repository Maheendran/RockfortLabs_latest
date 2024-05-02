
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Audience from './Pages/Audience/Audience';
import Teams from './Pages/Team/Teams';
import Registration from './Pages/Register/Registration';
import UnAuthRoute from './Components/PrivateRoute/UnAuthRoute';
import AuthRoute from './Components/PrivateRoute/AuthRoute';
import Projects from './Pages/Projects/Projects';
import Tanun from './Pages/Tanun/Tanun';
import Founder from './Pages/Founder/Founder';
function App() {
  return (
    <>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/register" element={<Registration/>}/>
<Route path="/projects" element={<Projects/>}/>

<Route path="/audience" element={<Audience/>}/>
<Route path="/team" element={<Teams/>}/>
<Route path="/tanun" element={<Tanun/>}/>
<Route path='/founder' element={<Founder/>} />
</Routes>
    </>
  );
}

export default App;
