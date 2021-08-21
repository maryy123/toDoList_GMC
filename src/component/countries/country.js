import React from "react";
import "./country.css";

const Country = () => {
  const countries = [
    {
      name: "Tunisia",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Albania",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Bahrain",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Gabon",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Texas",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Ghana",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Turkey",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Tongo",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
  ];
  return (
    <div>
      <div style={{ border: "1px solid blue", padding: "10px" }}>
        List of countries
      </div>
      <div className="list">
        {countries.map((country) => (
          <div className="item">
            <h3>{country.name}</h3>
            <p>{country.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ border: "1px solid blue", padding: "10px" }}>
        Countries that start with the letter "T"
      </div>
      <div className="list">
        {countries
          .filter((country) => country.name.startsWith("T"))
          .map((country) => (
            <div className="item">
              <h3>{country.name}</h3>
              <p>{country.desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Country;
