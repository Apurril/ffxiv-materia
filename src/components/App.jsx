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

const App = () => {
  const handleOnClick = () => {
    // stuff
    console.log("Clicked!");
  };
  console.log(materias);
  console.log(Object.keys(materias));

  const AnotherDropdown = () => {
    const options = [];

    Object.keys(materias).forEach((type) => {
      materias[type].values.map((stat) => {
        options.push(<option key={`${type}${stat}`} value={`${type} ${stat}`}>{`${type} +${stat}`}</option>);
        return options;
      });
    });

    return (
      <select name="materia" id="materia-select">
        {options}
      </select>
    );
  };
  return (
    <div>
      <AnotherDropdown />
      <button type="button" className="meld-slot" onClick={handleOnClick} />
      <button type="button" className="meld-slot" onClick={handleOnClick} />
      <button type="button" className="meld-slot" onClick={handleOnClick} />
    </div>
  );
};

export default App;
