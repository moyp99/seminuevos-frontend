import React, { useState } from "react";
import SelectBox from "./SelectBox";
import { useForm } from "react-hook-form";

const Form = () => {
  const [isUsed, setIsUsed] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleMinPrice=(e)=>{
    console.log(e);
    const numberValue = Number(e.target.value);

    if (numberValue > maxPrice ){
      setMinPrice(maxPrice);
      setMaxPrice(numberValue);
    }else{
      setMinPrice(numberValue);
    }

  }

  const handleMaxPrice=(e)=>{
    console.log(e.target.value);
    const numberValue = Number(e.target.value);

    if (numberValue < minPrice ){
      setMaxPrice(minPrice);
      setMinPrice(numberValue);
      
    }else{
      setMaxPrice(numberValue);
    }

  }

  return (
    <div className="pt-8">
      <div className="flex w-full justify-between">
        <SelectBox value="usado" selected={isUsed} setSelected={setIsUsed} />
        <SelectBox value="nuevo" selected={isUsed} setSelected={setIsUsed} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="pt-2">
        <div className="pt-2">
          <label htmlFor="marca">Marca</label>
          <input className="input"></input>
        </div>
        <div className="pt-2">
          <label htmlFor="modelo">Modelo</label>
          <input className="input"></input>
        </div>
        <div className="pt-2">
          <label htmlFor="modelo">Ciudad</label>
          <input className="input"></input>
        </div>
        <div className="pt-2">
          <label htmlFor="modelo">Año</label>
          <div className="flex w-full items-center justify-between">
            <input
              type="number"
              min="1960"
              max="2022"
              step="1"
              defaultValue="1960"
              className="input w-[32%]"
            ></input>
            <p className="text-xl">Hasta ➡</p>
            <input
              type="number"
              min="1960"
              max="2022"
              step="1"
              defaultValue="2022"
              className="input w-[32%]"
            ></input>
          </div>
        </div>
        <div className="pt-2">
          <label htmlFor="modelo">Precio</label>
          <div className="flex w-full items-center justify-between">
            <span className="input-dollar w-[42%] relative">
              <input
                value={minPrice}
                onChange={(e)=>setMinPrice(e.target.value)}
                onBlur={handleMinPrice}
                className="input pl-[22px]"
              ></input>
            </span>
            <p className="text-2xl">➡</p>
            <span className="input-dollar w-[42%] relative">
              <input
              value={maxPrice}
                onChange={(e)=>setMaxPrice(e.target.value)}
                onBlur={handleMaxPrice}
                className="input  pl-[22px]"
              ></input>
            </span>
          </div>

          {/* <input
            type="range"
            min="0"
            max="2000000"
            value={minPrice}
            
          />

          <input
            type="range"
            min="0"
            max="2000000"
            value={maxPrice}
           
          /> */}
        
        </div>

        <div className="pt-4">
          <button className="bg-primary text-white w-full p-3 rounded">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
