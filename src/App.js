
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/About';
import Work from './components/Work';
import Contact from "./components/Contact";
import Skills from "./components/Skills";
//import SelectionPage from "./components/SelectionPage"az;
function App() {
  return (
    
<BrowserRouter>
<Routes>

  <Route path="/" element={<Home/>}/>

   <Route path="/work" element={<Work/> }/>
   <Route path="/contact" element={<Contact/> }/>
   <Route path="/skills" element={<Skills/> }/>

</Routes>
</BrowserRouter>
  );

  
}

export default App;
