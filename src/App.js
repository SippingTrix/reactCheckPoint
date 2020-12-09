import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
//import Inbox from './components/Inbox'
import InboxList from './components/InboxList'
import SendEmail from './components/SendEmail'
import NewEmail from './components/NewEmail'

class App extends Component {

constructor() {
  super()
  this.state = {
    emails: []
  };
}

//this is handling post
handleRegisterSubmission = (event) => {
  event.preventDefault();
  const tempfirstName = event.target.firstName.value;
  const templastName = event.target.lastName.value;
  const tempemailAddress = event.target.emailAddress.value;
  const tempexpLevel = event.target.expLevel.value;
}


//this is doing out fetch
componentDidMount(){
  fetch('http://localhost:3001/emails')
  .then(response => response.json())
  .then(data => this.setState({ emails: data }));
  
}





  render(){
  return (
   <Router>
     <ul>
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/inbox'>Inbox</Link></li>
       <li><Link to='/newemail'>NewEmail</Link></li>
     </ul>

     <Switch>
       <Route exact path='/'>
         <Home />
       </Route>
       <Route path='/inbox'>
         <InboxList emails={this.state.emails} />
       </Route>
       <Route path='/newemail'>
         <NewEmail />
       </Route>
     </Switch>
   </Router> 
      
    
  );
  }
 
}
export default App;


// This project will evaluate your ability to create a web application with React 
//(using create-react-app).

// Using Create-React-App and a server that we have provided to you with fake email 
// data, please implement the following functionality to mock the "GMail" service.

// Mandatory Content
//
// **View all of my email messages (subject line + sender)
// **View one of my email messages with all of its details
// **Send an email
// **Search for a specific email by subject


// Advanced Content
//
// Sort my emails by date
// Delete an email that I no longer need
// Search for a specific email by sender
