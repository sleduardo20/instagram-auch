import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    border:0;
    text-decoration: none;
    width: 100vw;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.3rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
  }

  button{
    outline: none;
    
  }
  html{
    font-size: 62.5%;
  }
`;

export default globalStyles;
