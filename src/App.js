
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashborad from './components/pages/Dashborad';
import Liveclasses from './components/pages/Liveclasses';
import Testseies from './components/pages/Testseies';
import Upcommingclas from "./components/pages/Upcommingclass"
import Recordedlectures from "./components/pages/Recordedlectures"
import Assignment from "./components/pages/Assignment"
import Yourdoubt from "./components/pages/Yourdoubt";
import Notification from "./components/pages/Notification";
import Accounts from './components/pages/Accounts';
import Logout from './components/pages/Logout';
import { Sidebar } from './components/Sidebar';
import Recentvedios from './components/pages/Recentvedios';
import Askdoubt from './components/pages/Askdoubt';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Sidebar>
      <Routes>
        <Route path='/' element={<Dashborad/>}/>
        <Route path='/liveclasses' element={<Liveclasses/>}/>
        <Route path='/testseries' element={<Testseies/>}/>
       
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/Upcomingclass' element={<Upcommingclas/>}/>
        <Route path='/recordedlectures' element={<Recordedlectures/>}/>
        <Route path='/assignment' element={<Assignment/>}/>
       
        <Route path='/yourdoubt' element={<Yourdoubt/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/account' element={<Accounts/>}/>
        <Route path='/recentVedios' element={<Recentvedios/>}/>
        <Route path='/askDoubt' element={<Askdoubt/>}/>
       

      </Routes>
      </Sidebar>

      
        </BrowserRouter>
    </div>
  );
}

export default App;
