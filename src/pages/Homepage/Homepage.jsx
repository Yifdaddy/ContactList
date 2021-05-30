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
                <header>Homepage of Contact List</header>
                <br />
                <StyledButton onClick={handleAddNewContact}>Add a new contact</StyledButton>
            </HeaderWrapper>
            {contacts.map((contact, idx) => {
                return (
                    <Person key={contact.phoneNumber} contactInfo={contact} setContacts={setContacts}/>
                );
            })}    
        </div>
    );
};
export default Homepage;