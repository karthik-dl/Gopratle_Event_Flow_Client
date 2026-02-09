"use client";
import { useState } from "react";
import EventDetails from "./EventDetails.jsx";
import HireType from "./HireType.jsx";
import Type from "./Type.jsx";
import { container, heading} from "../app/Style.js";

export default function Page() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    eventDetails: {},
    hireType: "",
    plannerDetails: {},
    performerDetails: {},
    crewDetails: {}
  });

  return (
    <div style={container}>
      <h2 style={heading}>Post a Requirement</h2>

      {step === 1 && (
        <EventDetails
          setFormData={setFormData}
          next={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <HireType
          setFormData={setFormData}
          next={() => setStep(3)}
          back={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <Type
          formData={formData}
          setFormData={setFormData}
          back={() => setStep(2)}
          resetForm={() => {
            setFormData({
              eventDetails: {},
              hireType: "",
              plannerDetails: {},
              performerDetails: {},
              crewDetails: {}
            });
            setStep(1);
          }}
        />
      )}
    </div>
  );
}
