import styled from "styled-components";


export const MainCrud = styled.section`

header {
  display:flex;
  background-color:#7695EC;
  height:80px;
  padding:0 37px;  
  width:800px;
  margin:auto;
  width:100%;
  align-items:center;
  justify-content:space-between;
  .userLogout{
    display:flex;
    align-items:center;
    h1{
      margin-left:15px;
      color:#fff;
      font-family:'Roboto',sans-serif,cursive;
      font-size:22px;
      font-weight:700;
    }
    a{
      margin-left:15px;
      color:#fff;
      font-family:'Roboto',sans-serif,cursive;
      font-size:22px;
      font-weight:700;
      border:solid 2px grey;
      border-radius:9px;
      padding:5px 20px;
      transition:all ease .5s;
      :hover{
        background-color:#777777;
      }
    }
  }
  .titleCrud{
    color:#fff;
    font-family:'Roboto',sans-serif,cursive;
    font-size:22px;
    font-weight:700;
    line-height:80px;
  }
}
 .contentCrud{
  max-width:800px;
  width:100%;
 margin:auto;
 background-color:white;
 padding:24px;
 
 .createCrud{
  border:1px solid #999999;
  border-radius:16px;
  max-width:752px;
  padding:24px;
  
  h1{
   font-family: 'Roboto';
   font-weight: 700;
   font-size: 22px;
   color:#000000;
   margin-bottom:24px;
  }

  label {
   font-family: 'Roboto';
   font-weight: 400;
   font-size: 16px;
   color: #000000;
  }


  input{
   width:100%;
   background: #FFFFFF;
   border: 1px solid #777777;
   border-radius: 8px;
   padding:8px 10.68px;
   margin-bottom:24px;
   margin-top:8px;
  }

  button{
   display:block;
   width: 120px;
   height: 32px;
   background: #7695EC;
   border-radius: 8px;
   margin-left:auto;
   color:#fff;
   font-family:'Roboto';
   font-weight:700;
   font-size:16px;
   line-height:19px;
   border:none;
   cursor: pointer;
  }

  #content {
   max-width: 704px;
   width:100%;
   height: 74px;
   ::placeholder{
    position: absolute;
        top: 7px; 
        left: 10.68px;
   }
  }
 } 
 
 .listCruds{
  margin-top:24px;
  .cruds{
   border: 1px solid #999999;
   border-radius: 16px;
   margin-top:24px;
   .header {
    display:flex;
    padding:24px;
    align-items:center;
    background-color:#7695EC;
    justify-content:space-between;border-radius: 16px 16px 0px 0px;

    h1{
     font-family: 'Roboto';
     font-weight: 700;
     font-size: 22px;
     color: #FFFFFF;
    }

    .icons {
        padding-top:5px;
     img{
      cursor: pointer;
     }

     img + img {
      margin-left:34.2px;
     }
    }
   }
   .contentCrudList{
    padding:24px;

    .userName{
     display:flex;
     justify-content:space-between;
     font-family: 'Roboto';
     font-weight: 700;
     font-size: 18px;
     color: #777777;
    }
    .contentResult{
        height:316px;
     font-family: 'Roboto';
     font-weight: 400;
     font-size: 18px;
     margin-top:16px;
     color: #000000;
     overflow-y:scroll;
    }
   }
  }
 }
 }

@media (max-width:600px){

  header {
  justify-content:space-around;
  .userLogout{
    display:flex;
    align-items:center;
    h1{
      font-size:18px;
    }
  }
  .titleCrud{
    font-size:18px;
    line-height:initial;
  }
}

.contentCrud {
  .listCruds {
    .cruds {
      .header {
        flex-direction:column;
       }
    }
  }
}
}
`