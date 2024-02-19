
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Audience from './Pages/Audience/Audience';
import Teams from './Pages/Team/Teams';
import Registration from './Pages/Register/Registration';
import UnAuthRoute from './Components/PrivateRoute/UnAuthRoute';
import AuthRoute from './Components/PrivateRoute/AuthRoute';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <>
<Routes>
<Route path="/" element={<AuthRoute Component={Home}/>}/>
<Route path="/register" element={<UnAuthRoute Component={Registration}/>}/>
<Route path="/projects" element={<AuthRoute Component={Projects}/>}/>

<Route path="/audience" element={< AuthRoute  Component={Audience}/>}/>
<Route path="/team" element={<AuthRoute  Component={Teams}/>}/>

</Routes>
    </>
  );
}

export default App;
