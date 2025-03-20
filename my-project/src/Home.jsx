import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData,setFormData] = useState({
    
    price: "",
    productName: "",
  });
   

  const handleImageChange = (event) => {
   setImage(event.target.files[0])
    
  };
  const formDatas=new FormData();
  formDatas.append("product",new Blob([JSON.stringify(formData)],{type:"application/json"}));
  formDatas.append("file",image);


  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const response=await axios.post("http://localhost:8080/api/product/add",
        formDatas,
        {
          headers: {
            'Content-Type':'multipart/form-data'
          }
        }
      )
    
    console.log(response.data);
    setMessage("✅ Product added successfully!");
    setFormData({
      price: "",
      country: "",
      category: "",

    })
    setImage(null);
  }catch(error){
    console.error(error);
    setMessage("❌ Failed to add product.");
  }
    
  };

  const handleChange=(e)=>{
      
      const {name,value}=e.target;
      setFormData({...formData,[name]:value});
  }
  
  return (
    <></>
  );
};


export default Home