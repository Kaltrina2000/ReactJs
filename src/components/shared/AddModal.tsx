import  { useState } from "react";
import closeIcon from "../../assets/icons/close.svg";

interface AddProps{
    isOpen:boolean;
    onClose:() =>void;
    onAdd: (title:string, price:number,description:string)=>void;
}
const defaultData={
  title:"",
  price:"",
  description:"",
};
const AddModal=({onAdd,onClose,isOpen}:AddProps)=>{
  const[inputFields,setInputFields]=useState(defaultData);
   // {
     //  title:"",
       //price:"",
      //description:"",
   //},
    const handleChange=(
      event:React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
    )=>{
      setInputFields((previousState)=>{
        const target=event.target as HTMLInputElement;

        return{
          ...previousState,
          [target.name]:target.value,
        };
      });
    };

    const handleSubmit=(event:React.MouseEvent)=>{
      event.preventDefault();
      onAdd(inputFields.title,+inputFields.price,inputFields.description);
      //inAddModal({...inputFields,} {title:"",price:"",description:""});
      setInputFields(defaultData);
    };


  return (
    <aside 
    className={`add_modal ${isOpen ? "add_modal--shown" : ""}`}
      id="add-modal"
      >
    <div className="add_modal__wrapper">
      <span 
      id="close-modal" 
      className="add_modal__close" 
      onClick={onClose}
      >
        <img src={closeIcon} />
      </span>
      <form className="add_modal__form" id="add-form">
        <h5>Add New</h5>
        
        <input
         type="text" 
         name="title" 
         placeholder="Title" 
         value={inputFields.title}
         onChange={handleChange}
         />
        <input 
        type="text" 
        name="price" 
        placeholder="Price"
        value={inputFields.price}
        onChange={handleChange}
         />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={inputFields.description}
          onChange={handleChange}
        ></textarea>
        
        
        <button type="submit"onClick={handleSubmit}>Add</button>
      </form>
    </div>
  </aside>
  );
};
export default AddModal;