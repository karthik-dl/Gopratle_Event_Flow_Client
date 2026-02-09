"use-client";
import { button, secondaryButton } from "../app/Style.js";

export default function HireType({ setFormData, next, back }) {
  const selectType = (type) => {
    setFormData(prev => ({ ...prev, hireType: type }));
    next();
  };

  return (
    <>
      <button style={button} onClick={() => selectType("planner")}>Event Planner</button>

      <button style={button} onClick={() => selectType("performer")}>Performer</button>

      <button style={button} onClick={() => selectType("crew")}>Crew</button>
      <br />
      <br/>
      <button style={secondaryButton} onClick={back}>Back</button>
    </>
  );
}
