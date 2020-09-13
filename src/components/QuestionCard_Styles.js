import styled from 'styled-components';

// Create a Wrapper component that'll render an <div> tag with styles
export const Wrapper = styled.div`    
    background: #dbd3d7;
    border-radius: 10px;
    border: 2px solid #522e40;
    padding: 20px;
    max-width: 1100px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    
    p {
        font-size: 1rem;
    }
`;

// Create a ButtonWrapper component that'll render an <div> tag with styles
export const ButtonWrapper = styled.div`
    transition: all 0.3s ease;
    
    :hover {
        opacity: 0.8;
    }
  
    //  Style for option's button
    button {        
        font-size: 1rem;
        margin: 5px 0;
        width: 100%;
        height: 40px;
        color: #fff;
        border: 3px solid #ffffff;
        border-radius: 10px;
        cursor: pointer;
        user-select: none;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        background: linear-gradient(90deg, #a3768c, #522e40);        
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`;