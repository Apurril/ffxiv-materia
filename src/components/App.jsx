/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from "react";
import "./App.css";

const materias = {
  Perception: {
    name: "Gatherer's Guile Materia",
    values: [3, 4, 5, 6, 10, 15, 12, 20],
  },
  Gathering: {
    name: "Gatherer's Guerdon Materia",
    values: [3, 4, 5, 6, 10, 15, 12, 20],
  },
  GP: {
    name: "Gatherer's Grasp Materia",
    values: [1, 2, 3, 4, 6, 8, 7, 9],
  },
};

const overmeldTiers = [true, true, true, true, true, false, true, false];

const OptionGroup = ({ name, options }) => (
  <optgroup label={`${name}`}>{options}</optgroup>
);

const App = () => {
  const handleOnClick = (e) => {
    // stuff
    console.log(`Clicked! ${e.target.value}`);
  };

  const MateriaSelector = () => {
    const optionGroups = [];

    Object.keys(materias).forEach((type) => {
      const options = [];

      materias[type].values.forEach((stat) => {
        options.push(<option onClick={(e) => handleOnClick(e)} key={`${type}-${stat}`} value={`${type} ${stat}`}>{`${type} +${stat}`}</option>);
      });
      optionGroups.push(<OptionGroup key={`group-${type}`} name={type} options={options} />);
    });

    return (<select name="materia" id="materia-select">{optionGroups}</select>);
  };

  return (
    <div>
      <MateriaSelector />
      <button type="button" className="meld-slot" onClick={handleOnClick} />
      <button type="button" className="meld-slot" onClick={handleOnClick} />
      <button type="button" className="meld-slot" onClick={handleOnClick} />
    </div>
  );
};

export default App;
