import React, { useState } from "react";
import { 
    CardWrapper,
    CardHeader,
    CardHeading,
    StyledButton,
    FlexContainer,
    Modal
} from 'components/shared/ContactCard.styles.js';
function Popup({ open, setOpen, name, handleDelete}) {
    const handleCancel = () => {
        setOpen(false);
    }
    return (
        <>
            <CardWrapper $isPopup>
                <CardHeader>
                    <CardHeading>Are you sure you want to delete</CardHeading>
                    <CardHeading>{name}</CardHeading>
                    <FlexContainer>
                        <StyledButton onClick={handleCancel}>Cancel</StyledButton>
                        <StyledButton $isDelete onClick={handleDelete}>Confirm</StyledButton>
                    </FlexContainer>
                </CardHeader>
            </CardWrapper>
        </>
    );
}
export default Popup;