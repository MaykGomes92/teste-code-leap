import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { MainCrud } from "./styled";
import iconDelete from "../../assets/ic_baseline-delete-forever.png";
import iconEdit from "../../assets/bx_bx-edit.png";
import axios from "axios";
import ModalDelete from "../../components/ModalDelete/Index.jsx";
import ModalEdit from "../../components/ModalEdit/Index.jsx";

function Index() {
 const [crudList, setCrudList] = React.useState();
 const [valuesInput, setValuesInput] = React.useState();
 const [modalDelete, setModalDelete] = React.useState(false);
 const [modalEdit, setModalEdit] = React.useState(false);
 const [idCrudTarget, setIdCrudTarget] = React.useState();
 const [horario, setHorario] = React.useState([]);

 React.useEffect(() => {
  let fetchApi = async () => {
   let json = await fetch("https://dev.codeleap.co.uk/careers/").then(
    (response) => response.json()
   );
   if (json) {
    setCrudList(json);
   }
  };
  fetchApi();
 }, []);

 //Calculo de quantos minutos o Post foi criado.
 React.useEffect(() => {
  if (crudList) {
   crudList.results.map((item) => {
    let tempoAtual = moment().toISOString();

    let valorTempoAtual = moment(tempoAtual);
    let valorTempoPost = moment(item.created_datetime);
    let tempoCalculado = valorTempoAtual.diff(valorTempoPost, "minutes");
    setHorario((prevState) => [...prevState, tempoCalculado]);
   });
  }
 }, [crudList]);

 //Pegando valores dos input Title e Content.
 function handleValuesInput(value) {
  setValuesInput((prevValues) => ({
   ...prevValues,
   [value.target.name]: value.target.value,
  }));
 }

 //Fazendo o post no banco de dados.
 async function postCruditem() {
  await axios.post("https://dev.codeleap.co.uk/careers/", {
   username: window.localStorage.userName,
   title: valuesInput.title,
   content: valuesInput.content,
  });
  await window.location.reload();
 }

 function idCrud(item) {
  if (item.target.className === "iconDelete") {
   setModalDelete(true);
  }
  if (item.target.className === "iconEdit") {
   setModalEdit(true);
  }
  setIdCrudTarget(item.target.id);
 }

 return (
  <MainCrud>
   <header>
    <h1 className="titleCrud">CodeLeap Network</h1>
    <Link to="/">Logout</Link>
   </header>
   <div className="contentCrud">
    <section className="createCrud">
     <h1>What`s on your mind?</h1>

     <label htmlFor="title">Title</label>
     <input
      type="text"
      placeholder="Hello world"
      id="title"
      name="title"
      onChange={handleValuesInput}
      maxLength={40}
     />

     <label htmlFor="content">Content</label>
     <input
      type="text"
      placeholder="Content here"
      id="content"
      name="content"
      onChange={handleValuesInput}
     />
     {valuesInput && valuesInput.title && valuesInput.content ? (
      <button onClick={postCruditem}>Create</button>
     ) : (
      <button style={{ background: "grey" }}>Create</button>
     )}
    </section>

    {crudList && (
     <div className="listCruds">
      {crudList.results.map((item, index) => (
       <div className="cruds" key={item.id}>
        <div className="header">
         <h1>{item.title}</h1>
         <div className="icons">
          <img
           src={iconDelete}
           alt=""
           id={item.id}
           className="iconDelete"
           onClick={idCrud}
          />
          <img
           src={iconEdit}
           alt=""
           id={item.id}
           className="iconEdit"
           onClick={idCrud}
          />
         </div>
        </div>
        <div className="contentCrudList">
         <p className="userName">
          @{item.username}
          <span>{horario[index]} minutes ago</span>
         </p>
         <p className="contentResult">{item.content}</p>
        </div>
       </div>
      ))}
     </div>
    )}
   </div>

   {modalDelete && (
    <ModalDelete
     idCrudTarget={idCrudTarget}
     setModalDelete={setModalDelete}
     modalDelete={modalDelete}
    />
   )}

   {modalEdit && (
    <ModalEdit
     modalEdit={modalEdit}
     setModalEdit={setModalEdit}
     idCrudTarget={idCrudTarget}
    />
   )}
  </MainCrud>
 );
}

export default Index;
