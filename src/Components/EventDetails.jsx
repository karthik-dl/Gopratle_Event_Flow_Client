"use client";

import { useState } from "react";
import {input, button} from "../app/Style.js";

export default function EventDetails({ setFormData, next }) {
  const [event, setEvent] = useState({});

  return (
    <>
      <input style={input} placeholder="Event Name"
        onChange={e => setEvent({ ...event, name: e.target.value })}/>

      <input style={input} placeholder="Event Type"
        onChange={e => setEvent({ ...event, type: e.target.value })}/>

      <input style={input} type="date"
        onChange={e => setEvent({ ...event, startDate: e.target.value })}/>

      <input style={input} placeholder="Location"
        onChange={e => setEvent({ ...event, location: e.target.value })}/>

      <input style={input} placeholder="Venue"
        onChange={e => setEvent({ ...event, location: e.target.value })}/>

      <button style={button} onClick={() => {
        setFormData(prev => ({ ...prev, eventDetails: event }));
        next()}}>Next</button>
    </>
  );
}
