import { createGlobalStyle } from 'styled-components';
import bgImage from '../images/Background.jpg';

export const Global = createGlobalStyle`


html{
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Poppins;
  color: #EBEEF5;
  /* background:  */
  /*url(${bgImage}) no-repeat,   */
  background: linear-gradient(#121829, #121829); 
  /*  */
 
  
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after{
    box-sizing: inherit;
}

*{
  
  max-width: 100vw;
}

img{
    display: block;
    max-width: 100%;
    height: auto;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

a{
    text-decoration: none;
    color: inherit
}
h1,
h2,
h3,
h4,
h5,
h6,
p{
    margin: 0;
}




/* img {
  display: block;
  max-width: 100%;
  height: auto;
}  */
/* .App {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
} */
`;
