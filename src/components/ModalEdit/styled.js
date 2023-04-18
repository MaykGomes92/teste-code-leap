import styled from "styled-components";


export const ModalEdit = styled.div`
position:fixed;
width:100%;
height:1080px;
left:0px;
top:0px;
background: rgba(119, 119, 119, 0.8);

.modalEditContent{
 position: relative;
 top:364px;
 max-width: 660px;
 width:100%; 
 height: 334px;
 background: #FFFFFF;
 border: 1px solid #999999;
 border-radius: 16px;
 padding:24px;
 margin:auto;

h1{
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 700;
 font-size: 22px;
 line-height: 26px;
 margin-bottom:24px;
}


label{
 font-family: 'Roboto';
 font-weight: 400;
 font-size: 16px;
}

input{
 display:block;
 width:100%;
 margin-bottom:24px;
 background: #FFFFFF;
 border: 1px solid #777777;
 border-radius: 8px;
 height:32px;
 padding-left:5px;
 margin-top:8px;
::placeholder{
    position: absolute;
        top: 7px; 
        left: 10.68px;
   }
}

#contentEdit{
 height:74px;
 overflow-y:scroll;
 ::placeholder{
 }
}



.buttonsEdit{
 display:flex;
 justify-content:flex-end;
 button{
  width:120px;
  height:32px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
 }
 
 .save{
  background: #47B960;
  border:none;
  color:#fff;
 }
 button + button {
  margin-left:16px;
 }
}
}
`