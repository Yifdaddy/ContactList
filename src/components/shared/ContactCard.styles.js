import styled from "styled-components";

export const CardWrapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: ${({ $isPopup }) => $isPopup ? '500px' : '300px'};
    background: ${({ $isPopup }) => $isPopup ? '#fff' : ''};
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    ${({ $isPopup }) => $isPopup &&
      `
        position: absolute; 
        top: 35%;
        left: 35%;
      `
    }
`;
export const CardHeader = styled.header`
    padding-top: 32px;
    padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;
export const CardBody = styled.div`
    padding-right: 32px;
    padding-left: 32px;
`;
export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const StyledButton = styled.button`
    height: 36px;
    width: auto;
    padding: 0px 8px;
    margin-left: 8px;
    background: ${({ $isDelete }) => $isDelete ? '#F7B600' : '#1A1F71'};
    border-color: ${({ $isDelete }) => $isDelete ? '#F7B600' : '#1A1F71'};
    border-radius: 28px;
    color: #fff;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
`;