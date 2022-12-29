import { useState } from "react";
import { products } from "../products";
import  AddModal  from "../components/shared/AddModal";
import { AddModalButton } from "../components/shared/AddModalButton";
import { Product } from "../components/shared/Product";


export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[productsList,setProductsList]=useState(products);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  
  
const handleRemove=(id:number)=>{
  setProductsList((previousList)=>{
    return previousList.filter((product)=>product.id !=id);
  });
};

 const addProducts=(title:string,price:number,description:string)=>{
   setProductsList((previousList) => {
        return [
          {
            id:Math.random(),
            title:title,
            price:price,
            description:description,
            thumbnail:"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          },
          ...previousList,
        ];
   });
    setIsModalOpen(false);
  };
  
  

  return (
    <>
  

      <AddModalButton onClick={handleOpen} />
      <div className="wrapper">

        <section className="products-section" id="products-section">
          {productsList.map((product) => (
            <Product key={product.id} product={product} onRemove={handleRemove} />
          ))}
        </section>
     </div>

      <AddModalButton onClick={handleOpen} />
     
      <AddModal 
         isOpen={isModalOpen}
          onClose={handleClose}
          onAdd={addProducts} 
          />
    </>
  );
};
