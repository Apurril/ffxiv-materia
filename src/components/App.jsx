/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import React, { useState } from "react";
import "./App.css";

const materias = {
  Perception: {
    name: "Gatherer's Guile",
    values: [3, 4, 5, 6, 10, 15, 12, 20],
  },
  Gathering: {
    name: "Gatherer's Guerdon",
    values: [3, 4, 5, 6, 10, 15, 12, 20],
  },
  GP: {
    name: "Gatherer's Grasp",
    values: [1, 2, 3, 4, 6, 8, 7, 9],
  },
};

const meldChances = [
  [90, 48, 28, 16],
  [82, 44, 26, 16],
  [70, 38, 22, 14],
  [58, 32, 20, 12],
  [17, 10, 7, 5],
  [17, 0, 0, 0],
  [17, 10, 7, 5],
  [17, 0, 0, 0],
];
const overmeldTiers = [true, true, true, true, true, false, true, false];

const preMeldSlots = 2;

const OptionGroup = ({ name, options }) => (
  <optgroup label={`${name}`}>{options}</optgroup>
);

const meldChanceCalc = (index, slot, preSlots) => {
  if (slot < preSlots) {
    return "100%";
  }
  if (index === "-1") {
    return "";
  }
  if (slot >= preSlots) {
    return `${meldChances[index][slot - preSlots]}%`;
  }

  return "Impossible!!";
};

const MateriaSelector = ({ slot }) => {
  const [materiaLabel, setMateriaLabel] = useState(slot < preMeldSlots ? "100%" : "");
  const [selectedMateria, setSelectedMateria] = useState("test");

  const handleChange = (e) => {
    const [index, type] = e.target.value.split(":");
    // console.log(`Type: ${type}, index: ${index}`);
    console.log(e.target.value);

    setMateriaLabel(meldChanceCalc(index, slot, preMeldSlots));
    setSelectedMateria(e.target.value);
  };
  const optionGroups = [];

  optionGroups.push(<option key="no-materia" value="-1">No Materia</option>);

  Object.keys(materias).forEach((type) => {
    const options = [];

    materias[type].values.forEach((stat, index) => {
      if ((slot > preMeldSlots && overmeldTiers[index]) || slot <= preMeldSlots) {
        options.push(<option key={`${type}-${stat}`} value={`${index}:${type}`}>{`${type} +${stat}`}</option>);
      }
    });

    optionGroups.push(<OptionGroup key={`group-${type}`} name={materias[type].name} options={options} />);
  });

  return (
    <div>
      <label htmlFor="materia-select">
        <select className="materiaSelector" name="materia" id={`materia-select-${slot}`} onChange={handleChange} value={selectedMateria}>{optionGroups}</select>
        {materiaLabel}
      </label>
    </div>
  );
};

const MateriaSelectorGroup = ({ meldSlots }) => {
  const elements = [];
  for (let index = 0; index < meldSlots; index += 1) {
    elements.push(<MateriaSelector key={`ms-${index}`} slot={index} />);
  }
  return (
    <div className="materiaSelector-group">
      {elements}
    </div>
  );
};

const App = () => {
  const handleOnClick = (e) => {
    console.log(`Clicked! ${e.target.value}`);
  };

  return (
    <div>
      <MateriaSelectorGroup meldSlots={5} />
      <MateriaSelectorGroup meldSlots={1} />
      <MateriaSelectorGroup meldSlots={2} />
      <MateriaSelectorGroup meldSlots={3} />


      <button type="button" className="meld-slot" onClick={handleOnClick} />
      <button type="button" className="meld-slot" onClick={handleOnClick} />
      <button type="button" className="meld-slot" onClick={handleOnClick} />
    </div>
  );
};

export default App;
