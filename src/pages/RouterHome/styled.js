import styled from "styled-components";

export const SectionHome = styled.section `
 display:flex;
 height:100vh;
 justify-content:center;
 align-items:center;
 .containerModal{
  max-width:500px;
  width:100%;
  height:205px;
  background-color:#fff;
  border-radius:16px;
  border:1px solid #cccccc;
  padding:24px;
  
  .contentModal{

   h1{
    font-family: 'Roboto', sans-serif;
    font-size:22px;
    font-weight:700;
    color:#000000;
   }

   p{
    font-family: 'Roboto', sans-serif;
    font-size:16px;
    font-weight:400;
    color:#000000;
    margin-top:24px;
    margin-bottom:8px;
   }

   input {
    max-width:452px;
    width:100%;
    height:32px;
    border-radius:8px;
    border: 1px solid #777777;
    background-color:#fff;
    padding-left:11.2px;
    ::placeholder {
     font-family: 'Roboto', sans-serif;
     font-weight:400;
     font-size:14px;
     line-height:16.41px;
     color:#CCCCCC;
    }
   }
   a{
    display:block;
    width:111px;
    margin-left:auto;
     button{
       margin-top:16px;
       width:111px;
       height:32px;
       border-radius:8px;
       background-color:#7695EC;
       font-family: 'Roboto', sans-serif;
       font-weight:700;
       font-size:16px;
       color:#fff;
       border:none;
       cursor: pointer;
      }
    }
  }
}
`