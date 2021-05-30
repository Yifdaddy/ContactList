import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    StyledButton,
    FlexContainer,
} from 'components/shared/ContactCard.styles.js';
import Popup from 'components/shared/Popup/Popup.jsx';

function Person({ contactInfo, setContacts }) {
    const history = useHistory();
    const [personalInfo, setPersonalInfo] = useState({
        ...contactInfo
    });
    const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = useState(false);
    const handleEditClick = () => {
        history.push(`/edit/${contactInfo.phoneNumber}`);
    }
    const handleToggleShowInfo = () => {
        setIsActive(prev => !prev);
    }
    const handleToggleOpen = () => {
        setOpen((prev) => !prev);
    }
    const handleDelete = () => {
        setContacts(prev => (
            prev.filter((contact, idx) => contact.phoneNumber !== personalInfo.phoneNumber)
        ));
    }
    return (
        <>
            <CardWrapper>
                <CardHeader>
                    <CardHeading onClick={handleToggleShowInfo}>Name: {personalInfo.firstName + " " + personalInfo.lastName}</CardHeading>
                    {isActive && 
                        <>
                            <CardHeading>Phone: {personalInfo.phoneNumber}</CardHeading>
                            <CardHeading>Email: {personalInfo.emailAddress}</CardHeading>
                            <FlexContainer>
                                <StyledButton onClick={() => {handleEditClick()}}>Edit</StyledButton>
                                <StyledButton $isDelete onClick={handleToggleOpen}>Delete</StyledButton>
                            </FlexContainer>
                        </>
                    }
                </CardHeader>
                
            </CardWrapper>
            {
                open ? 
                    <Popup 
                        open={open} 
                        setOpen={setOpen} 
                        name={personalInfo.firstName + " " + personalInfo.lastName} 
                        handleDelete={handleDelete}
                    /> 
                    : 
                    null
            }
        </>
    )
}
export default Person;