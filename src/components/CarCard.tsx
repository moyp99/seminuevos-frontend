import React from "react";
import { urlImage } from "../lib/sanityUtils";
import StarsIcon from "@mui/icons-material/Stars";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FlagIcon from '@mui/icons-material/Flag';

interface IProps {
  featured: boolean;
  car;
}

const CarCard = ({ featured, car }: IProps) => {
  return (
    <div
      className={`relative min-w-[calc(100%-2rem)]  h-[342px] flex flex-col items-center rounded-sm shadow-md mx-4 `}
    >
      <div
        className={` ${
          featured
            ? " absolute w-[120px] left-2 top-2 rounded h-6 flex justify-evenly bg-blue-gradient"
            : ""
        }`}
      >
        <StarsIcon className={`w-6 h-6 mix-blend-color-burn text-gray-800`} />
        <p className="mix-blend-color-burn font-bold text-gray-800">
          Destacado
        </p>
      </div>
      <div className="rounded absolute right-0 top-0 bg-black ">
        <p className=" px-8 font-medium text-2xl text-white">$ 420,000</p>
      </div>
      <div className="w-full rounded-t-md h-3/5">
        <img
          className="min-w-full min-h-full rounded-t-md max-h-full"
          src={
            car.gallery?.length > 0
              ? urlImage(car.gallery[0]).url()
              : "/static/no-car-picture.jpg"
          }
        />
      </div>
      <div
        className={`w-full py-2 px-4 rounded-b-md h-2/5 ${
          featured ? "bg-blue-gradient" : "bg-white"
        }  `}
      >
        <h3 className="font-bold text-2xl text-gray-800 mix-blend-color-burn ">Chevrolet Camaro v8</h3>
        <div className="flex">
          <div className="flex flex-[3]">
            <LocationOnIcon/>
            <p>Morelia, Michoacan</p>
          </div>
          <div className="flex flex-[2]">
            <DateRangeIcon/>
            <p>2021</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-[3] ">
            <DirectionsCarIcon/>
            <p>Manualn</p>
          </div>
          <div className="flex flex-[2]">
            <FlagIcon/>
            
            <p>450,000km</p>
          </div>
        </div>
        <div>
          <a href="#">Me interesa este auto</a>
          <a href='#'>-{">"}</a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
