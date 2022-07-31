import React from "react";
import CarRentalOutlinedIcon from "@mui/icons-material/CarRentalOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";

const SelectBox = ({ value, selected, setSelected }) => {
  return (
    <div
      onClick={() => {
        if (value === "usado") {
          setSelected(true);
        } else {
          setSelected(false);
        }
      }}
      className={`rounded border-light-blue border-[1px] cursor-pointer ${
        (selected && value === "usado") || (!selected && value === "nuevo")
          ? "shadow-blue"
          : "shadow"
      }  w-[47%] h-[124px] p-2 bg-white flex items-center flex-col `}
    >
      {value === "usado" ? (
        <DirectionsCarFilledOutlinedIcon
          className={`w-12 h-12 ${selected ? "text-primary" : "text-text"}`}
        />
      ) : (
        <CarRentalOutlinedIcon
          className={`w-12 h-12 ${!selected ? "text-primary" : "text-text"}`}
        />
      )}
      <p>Estoy buscando</p>
      <p className="text-2xl">Auto {value}</p>
    </div>
  );
};

export default SelectBox;
