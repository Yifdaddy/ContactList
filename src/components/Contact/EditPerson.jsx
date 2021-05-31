import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    StyledButton,
    FlexContainer,
} from 'components/shared/ContactCard.styles.js';

function EditPerson({ contacts, setContacts}) {
    const history = useHistory();
    const { phoneNumber } = useParams();
    const [currentPerson, setCurrentPerson] = useState({});
    useEffect(() => {
        const person = contacts.find((contact, idx) => (contact.phoneNumber === phoneNumber));
        setCurrentPerson(person);
    }, [phoneNumber]);
    const handleOnChange = (e) => {
        setCurrentPerson(prevPerson => ({
            ...prevPerson,
            [e.target.name]: e.target.value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const contactList = contacts.filter((contact, idx) => (contact.phoneNumber !== phoneNumber));
        setContacts([...contactList, currentPerson]);
        history.push('/');
    }
    const handleGoBack = () => {
        history.goBack();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardWrapper>
                    <CardHeader>
                        <CardHeading>
                            <label htmlFor='firstName'>First Name: {" "}</label> 
                            <input value={currentPerson.firstName} name="firstName" onChange={handleOnChange} required/>
                        </CardHeading>
                        <CardHeading>
                            <label htmlFor='lastName'>Last Name: {" "}</label> 
                            <input value={currentPerson.lastName} name="lastName" onChange={handleOnChange} required/>
                        </CardHeading>
                        <CardHeading>
                            <label htmlFor='phoneNumber'>Phone: {" "}</label> 
                            <input value={currentPerson.phoneNumber} name="phoneNumber" onChange={handleOnChange} required/>
                        </CardHeading>
                        <CardHeading>
                            <label htmlFor='emailAddress'>Email: {" "}</label> 
                            <input value={currentPerson.emailAddress} name="emailAddress" onChange={handleOnChange} required/>
                        </CardHeading>
                        <FlexContainer>
                            <StyledButton $isGoBack onClick={handleGoBack}>Back</StyledButton>
                            <StyledButton 
                                type="submit"
                                disabled={
                                    !currentPerson.firstName||
                                    !currentPerson.lastName ||
                                    !currentPerson.emailAddress ||
                                    !currentPerson.phoneNumber
                                }    
                            >
                                Submit
                            </StyledButton>
                        </FlexContainer>
                    </CardHeader>
                </CardWrapper>
            </form>
        </>
    )
}
export default EditPerson;
