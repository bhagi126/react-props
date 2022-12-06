//import ClassComponent from'./ClassComponent'
//import PropsExample from'./PropsExample'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
function App(){
  return(
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
            
            </Routes>
            </BrowserRouter>
            
    {/*<PropsExample name="bhagi" age="16"/>
     <PropsExample name="aasritha" age="20"/>
       <p>this is computer</p>
               <h1>heading tag</h1>
               <img src="https://m.media-amazon.com/images/I/51hWZ+AJ2EL._SL1100_.jpg" width="20%" alt="Butterfly"/>
               <ClassComponent/>*/}
    </div>
    )
}
export default App;
