import React, { useState } from 'react'; 
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Homepage from 'pages/Homepage/Homepage';
import EditPerson from 'components/Contact/EditPerson';
import AddNewContact from 'components/Contact/AddNewContact';
import CenteredWrapper from 'components/shared/CenteredWrapper.styles.js';
const contactList = [
  {   
      firstName: "Ark", 
      lastName: "Pan",
      phoneNumber: "6824096384",    
      emailAddress: "arkpan@gmail.com",  
  }, 
  {      
      firstName: 'Eric',      
      lastName: 'Cai',      
      phoneNumber: "6825902321",      
      emailAddress: 'EricCai@gmail.com'  
  },  
  {    
      firstName: 'Ying',
      lastName: 'Yuan',    
      phoneNumber: "6823212321",    
      emailAddress: 'yingYuan@gmail.com'  
  },  
  {    
      firstName: 'Yi',    
      lastName: 'Wen',    
      phoneNumber: "2823212321",    
      emailAddress: 'yiwen@gmail.com'  
  }
];
function App() {
  const [contacts, setContacts] = useState(contactList);
  return (
      <CenteredWrapper>
          <Route exact path="/" render={() => <Homepage contacts={contacts} setContacts={setContacts}/>}/>
          <Route path="/edit/:phoneNumber" render={() => <EditPerson contacts={contacts} setContacts={setContacts}/>} />
          <Route path="/new-contact" render={() => <AddNewContact setContacts={setContacts} />} />
      </CenteredWrapper>
  );
}

export default App;
