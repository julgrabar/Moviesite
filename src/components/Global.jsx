import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
img{
    display: block;
    max-width: 100%;
    height: auto;
}

html{
    box-sizing: border-box;
}

*,
*::before,
*::after{
    box-sizing: inherit;
}

*{
  
  max-width: 100vw;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

a{
    text-decoration: none;
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
    /* body {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
} */
/* .App {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
} */
`;
