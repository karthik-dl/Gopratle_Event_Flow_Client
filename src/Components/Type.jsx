"use client";

import { input, button, secondaryButton } from "../app/Style.js";

export default function Type({ formData, setFormData, back, resetForm }) {

  const submitRequirement = async () => {

    /* ---------- Basic Validation ---------- */
    if (
      !formData.eventDetails.name ||
      !formData.eventDetails.type ||
      !formData.eventDetails.startDate ||
      !formData.eventDetails.location
    ) {
      alert("Please fill all event details");
      return;
    }

    if (formData.hireType === "planner" && !formData.plannerDetails.budget) {
      alert("Please enter budget");
      return;
    }

    if (
      formData.hireType === "performer" &&
      !formData.performerDetails.performerType
    ) {
      alert("Please enter performer type");
      return;
    }

    if (formData.hireType === "crew" && !formData.crewDetails.crewType) {
      alert("Please enter crew type");
      return;
    }

    /* ---------- Build Payload ---------- */
    let details = {};

    if (formData.hireType === "planner") details = formData.plannerDetails;
    if (formData.hireType === "performer") details = formData.performerDetails;
    if (formData.hireType === "crew") details = formData.crewDetails;

    const payload = {
      eventName: formData.eventDetails.name,
      eventType: formData.eventDetails.type,
      startDate: formData.eventDetails.startDate,
      location: formData.eventDetails.location,
      venue: formData.eventDetails.venue || "",
      hireType: formData.hireType,
      details
    };

    /* ---------- Submit ---------- */

    const API_URL= process.env.NEXT_PUBLIC_API_URL
    try {
      const res = await fetch(`${API_URL}/api/requirements`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Submission failed");

      alert("Requirement submitted successfully!");
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  /* ---------- Planner UI ---------- */
  if (formData.hireType === "planner") {
    return (
      <div>
        <h3>Planner Requirements</h3>

        <input
          style={input}
          placeholder="Budget"
          value={formData.plannerDetails.budget || ""}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              plannerDetails: {
                ...prev.plannerDetails,
                budget: e.target.value
              }
            }))
          }
        />

        <br /><br />

        <button style={secondaryButton} onClick={back}>Back</button>
        <button style={button} onClick={submitRequirement}>Submit</button>
      </div>
    );
  }

  /* ---------- Performer UI ---------- */
  if (formData.hireType === "performer") {
    return (
      <div>
        <h3>Performer Requirements</h3>

        <input
          style={input}
          placeholder="Performer Type (DJ, Band, Singer)"
          value={formData.performerDetails.performerType || ""}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              performerDetails: {
                ...prev.performerDetails,
                performerType: e.target.value
              }
            }))
          }
        />

        <br /><br />

        <button style={secondaryButton} onClick={back}>Back</button>
        <button style={button} onClick={submitRequirement}>Submit</button>
      </div>
    );
  }

  /* ---------- Crew UI ---------- */
  if (formData.hireType === "crew") {
    return (
      <div>
        <h3>Crew Requirements</h3>

        <input
          style={input}
          placeholder="Crew Type (Lighting, Sound, Catering)"
          value={formData.crewDetails.crewType || ""}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              crewDetails: {
                ...prev.crewDetails,
                crewType: e.target.value
              }
            }))
          }
        />

        <br /><br />

        <button style={secondaryButton} onClick={back}>Back</button>
        <button style={button} onClick={submitRequirement}>Submit</button>
      </div>
    );
  }

  return null;
}
