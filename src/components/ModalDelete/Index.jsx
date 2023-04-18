import React from "react";
import { motion } from "framer-motion";
import { ModalDelete } from "./styled";
import axios from "axios";

function Index({ setModalDelete, modalDelete, idCrudTarget }) {
 async function deleteCrudItem() {
  await axios.delete(`https://dev.codeleap.co.uk/careers/${idCrudTarget}/`);
  await window.location.reload();
 }
 return (
  <ModalDelete>
   <motion.div
    className="modalContent"
    initial={{ opacity: 0, scale:0.1}}
    animate={{ opacity: 1, scale:1}}
    transition={{ duration: 0.5 }}
   >
    <h1>Are you sure you want to delete this item?</h1>
    <div className="buttonsOptions">
     <button className="btnCancel" onClick={() => setModalDelete(!modalDelete)}>
      Cancel
     </button>
     <button className="btnDelete" onClick={() => deleteCrudItem()}>
      Delete
     </button>
    </div>
   </motion.div>
  </ModalDelete>
 );
}

export default Index;
