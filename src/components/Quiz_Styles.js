import styled, { createGlobalStyle } from 'styled-components';
import BGImage from '../images/pencil_bg.jpg';

// Create a Global Style component with styles
export const GlobalStyle = createGlobalStyle`
    
    //Style for react quiz app
    html {
        height: 100%;
    }
    
    body {
        margin: 0;
        justify-content: center;
        background-image: url(${BGImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 0 20px;
        display: flex;        
      }
      
    * {
        box-sizing: border-box;
        font-family: 'Chivo', sans-serif;
    }
`;

// Create a Wrapper component that will render an <div> tag with styles
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > p {
        color: #fff;
    }
    
    // Style for score text
    .score, .final_score {
        color: #522e40;
        font-size: 2rem;
        margin: 0;
    }
    
    //Style for the heading
    h1 {
        background-size: 100%;
        background-clip: text;
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-style: italic;
        background-image: linear-gradient(180deg, #fff, #a15a7d);
        font-weight: 400;  
        filter: drop-shadow(2px 2px #522e40);
        font-size: 70px;
        text-align: center;
        margin: 20px;      
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;        
    }
    
    //Style for all buttons
    .start, .next, .submit, .start_again, .show, .restart {
        height: 40px;
        margin: 20px 25%;
        padding: 0 40px;  
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #a3768c);
        border: 2px solid #522e40;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px; 
        font-size: 1rem;         
    }
    
    .next, .submit {
        margin: 20px 30%
    }
    
    .start {
        max-width: 200px;
    }
    
    .start_again, .show {
        margin: 30px 5px;
        width: 200px;
        height:50px;
    }
    
    .restart{
       margin: 20px 42%; 
    }
    
    //Style for answers at the end
    .answers {        
        font-size: 1rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: linear-gradient(90deg, #a3768c, #522e40);
        border: 3px solid #ffffff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        user-select: none;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
        max-width: 500px;
        margin: 10px 30px 0 60px;
        text-align: center;
    }
    
    //Style for msg print on last page
    .msg {
        color: #522e40;
        font-size: 1.5rem;
        margin: 0 55px;
    }
    
    .final_score {
        margin: 0 55px;
    }
    
    // Style for fixed footer
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #000;
        color: #fff;
        text-align: center;
    }
`;