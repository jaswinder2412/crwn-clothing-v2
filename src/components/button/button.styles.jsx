import styled from 'styled-components'

export const BaseButton = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px; 
font-size: 15px; 
color: white; 
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
margin: 10px auto;

&:hover {
  background-color: white; 
}
`;

export const GoogleSignInButton = styled(BaseButton)`
background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`;


export const invertedButton = styled(BaseButton)`
background-color: white;
color: black;
border: 1px solid black;

&:hover {
  background-color: black;
  color: white;
  border: none;
}
`;
