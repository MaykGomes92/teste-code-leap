import React from "react";
import { motion } from "framer-motion";
import { ModalEdit } from "./styled";
import axios from "axios";

function Index({ setModalEdit, modalEdit, idCrudTarget }) {
 const [crudEditSelect, setCrudEditSelect] = React.useState();
 const [valueInputEdit, setValueInputEdit] = React.useState();

 React.useEffect(() => {
  let fetchApi = async () => {
   let json = await fetch("https://dev.codeleap.co.uk/careers/").then(
    (response) => response.json()
   );
   if (json && idCrudTarget) {
    setCrudEditSelect(json.results.filter((item) => item.id == idCrudTarget));
   }
  };
  fetchApi();
 }, [idCrudTarget]);

 function handleValueInput(value) {
  setValueInputEdit((prevValue) => ({
   ...prevValue,
   [value.target.name]: value.target.value,
  }));
 }

 async function newSaveCrud() {
  if (crudEditSelect) {
   await axios.patch(
    `https://dev.codeleap.co.uk/careers/${crudEditSelect[0].id}/`,
    {
     title: valueInputEdit.title,
     content: valueInputEdit.content,
    }
   );
   await window.location.reload();
  }
 }

 if (crudEditSelect)
  return (
   <ModalEdit>
    <motion.div
     className="modalEditContent"
     initial={{ opacity: 0, scale:0.1}}
     animate={{ opacity: 1, scale:1}}
     transition={{ duration: 0.5 }}
    >
     <h1>Edit item</h1>

     <label htmlFor="titleEdit">Title</label>
     <input
      type="text"
      id="titleEdit"
      name="title"
      placeholder={crudEditSelect[0].title}
      onChange={handleValueInput}
     />

     <label htmlFor="contentEdit">Content</label>
     <input
      type="text"
      id="contentEdit"
      name="content"
      placeholder={crudEditSelect[0].content}
      onChange={handleValueInput}
     />

     <div className="buttonsEdit">
      <button className="cancel" onClick={() => setModalEdit(!modalEdit)}>
       Cancel
      </button>
      <button className="save" onClick={() => newSaveCrud()}>
       Save
      </button>
     </div>
    </motion.div>
   </ModalEdit>
  );
}

export default Index;
