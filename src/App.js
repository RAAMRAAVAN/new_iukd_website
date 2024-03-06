import './App.css';
import {Provider} from "react-redux"
import store from './redux/store';
import UserContainer from './components/UserContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Login } from './components/login/Login';
import { Signup } from './components/Signup/Signup';
import { Home } from './components/Home/Home';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Careers } from './components/Careers/Careers';
import { Contact } from './components/Contact/Contact';
import { OutreachOPDs } from './components/OutreachOPDs/OutreachOPDs';
import { Surgery } from './components/Depatrments/Surgery';
import { Urology } from './components/Depatrments/Urology';
import { EndoUrologicalSurgeries } from './components/Services/EndoUrologicalSurgeries';
import { LaparoscopicUroSurgeries } from './components/Services/LaparoscopicUroSurgeries';
import { ReconstructiveSurgeries } from './components/Services/ReconstructiveSurgeries';
import { UrologicalCancerClinic } from './components/Services/UrologicalCancerClinic';
import { MaleFemaleUrinaryProblem } from './components/Services/MaleFemaleUrinaryProblem';
import { MaleFertilitySexualProblem } from './components/Services/MaleFertilitySexualProblem';
import { Birthday } from './components/BirthdayMessage/Birthday';
function App() {
  return (
    <Provider store={store}>  
      <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Signup/>}/> */}
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/careers" element={<Careers/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/outreachopds" element={<OutreachOPDs/>}/>
            <Route path="/surgery" element={<Surgery/>}/>
            <Route path="/urology" element={<Urology/>}/>
            <Route path="/endourologicalsurgeries" element={<EndoUrologicalSurgeries/>}/>
            <Route path="/laparoscopicurosurgeries" element={<LaparoscopicUroSurgeries/>}/>
            <Route path="/reconstructivesurgeries" element={<ReconstructiveSurgeries/>}/>
            <Route path="/urologicalcancerclinic" element={<UrologicalCancerClinic/>}/>
            <Route path="/malefemaleurinaryproblem" element={<MaleFemaleUrinaryProblem/>}/>
            <Route path="/malefertilitysexualproblem" element={<MaleFertilitySexualProblem/>}/>
            <Route path="/admin" element={<Login/>}/>
            {/* <Route path="/birthday" element={<Birthday/>}/> */}
          </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
