import React from 'react';
import { useHistory } from 'react-router-dom';
import Person from 'components/Contact/Person.jsx';
import { StyledButton } from 'components/shared/ContactCard.styles.js';
import { HeaderWrapper } from './Homepage.styles';
function Homepage({ contacts, setContacts }) {
    const history = useHistory();
    const handleAddNewContact = () => {
        history.push('/new-contact');
    }
    return (
        <div>
            <HeaderWrapper>
                <header>
                    <h1>Homepage of Contact List</h1>
                    <br />
                    <StyledButton onClick={handleAddNewContact}>Add a new contact</StyledButton>
                </header>
            </HeaderWrapper>
            {contacts.map((contact, idx) => {
                return (
                    <Person key={contact.phoneNumber} contactInfo={contact} setContacts={setContacts}/>
                );
            })}
            <div style={{marginBottom: '48px'}}/>    
        </div>
    );
};
export default Homepage;