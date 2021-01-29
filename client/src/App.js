import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import { Button } from 'reactstrap';
import ContactsList from './components/ContactsList';
import AddForm from './components/AddFrom';
function App() {
  return (

    <BrowserRouter>
    <NavBar />
    <div className="App">
      <Link to ="/list"><Button>contacts list</Button></Link>
      <Link to ="/form"><Button>add </Button></Link>
    </div>
    <Route exact path="/" render = {()=> <h2>seee your contact</h2> }/>
    <Route  path="/list" render = {()=> <ContactsList /> }/>
    <Route  path="/form" render = {()=> <AddForm /> }/>


    </BrowserRouter>
  );
}

export default App;
