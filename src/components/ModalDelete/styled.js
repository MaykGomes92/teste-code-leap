import styled from "styled-components";


export const ModalDelete = styled.div`
position:fixed;
width:100%;
height:1080px;
left:0px;
top:0px;
background: rgba(119, 119, 119, 0.8);

h1{
 font-family: 'Roboto';
 font-weight: 700;
 font-size: 22px;
}

.modalContent {
 position: relative;
 top:456px;
 max-width:660px;
 width:100%;
 height:146px;
 background: #FFFFFF;
 border: 1px solid #999999;
 border-radius: 16px;
 padding:24px;
 margin:auto;
 .buttonsOptions{
  display:flex;
  justify-content:flex-end;
  margin-top:40px;
  .btnCancel{
   width:120px;
   height:32px;
   background: #FFFFFF;
   border: 1px solid #999999;
   border-radius: 8px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  }

  .btnDelete {
   width:120px;
   height:32px;
   background: #FF5151;
   border-radius: 8px;
   border:none;
   margin-left:16px;
   font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  color:white;
  cursor: pointer;
  }
 }
}


@media (max-width: 600px){
 .modalContent {

 .buttonsOptions{
  margin-top:30px;
  .btnCancel{

  }

  .btnDelete {

  }
 }
}
}
`