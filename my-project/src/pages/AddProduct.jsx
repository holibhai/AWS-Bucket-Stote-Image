import React, { useState } from "react";
import p from "../assets/rear-view-programmer-working-all-night-long_1098-18697.avif";
import axios from "axios";


const AddProduct = () => {
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
    <div className="px-32 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10">
          {message && <p className={`mb-4 ${message.includes("✅")?"text-green-500":"text-red-500"}`}>{message}</p>}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Upload an Image
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image Upload */}
            <div>
              <label className="block font-medium text-gray-700">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2 block w-full border border-gray-300 p-2 rounded-lg"
                required
              />
              {/* {image && (
                <img
                  src={image}
                  alt="Preview"
                  className="mt-2 w-full h-40 object-cover rounded-lg"
                />
              )} */}
            </div>

            {/* Image Category */}
            

            {/* Image Price */}
            <div>
              <label className="block font-medium text-gray-700">
                Image Price ($)
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={handleChange}
                name="price"
                className="mt-2 block w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter price"
                required
              />
            </div>

            {/* Image Country */}
            <div>
              <label className="block font-medium text-gray-700">
                product name
              </label>
              <input
                type="text"
                value={formData.country}
                name="productName"
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Upload Image
            </button>
          </form>
        </div>
        <div className="p-5">
                <img src={p} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;