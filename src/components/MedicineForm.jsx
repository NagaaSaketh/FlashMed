import React, { useState } from "react";

function MedicineForm({ addMedicine }) {
  const [medicineName, setMedicineName] = useState("");
  const [shifts, setShifts] = useState([0, 0, 0]);
  const [manualEntries, setManualEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedicine = {
      medicineName,
      shifts,
      manualEntries,
    };
    addMedicine(newMedicine);
    setMedicineName("");
    setShifts([0, 0, 0]);
    setManualEntries([]);
  };

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setManualEntries((prevEntries) => {
      const existingEntryIndex = prevEntries.findIndex(
        (entry) => entry.medicineName === medicineName
      );

      if (existingEntryIndex !== -1) {
        const updatedEntries = [...prevEntries];
        updatedEntries[existingEntryIndex].time = time;
        return updatedEntries;
      } else {
        return [...prevEntries, { time, medicineName }];
      }
    });
  };

  return (
    <div id="med-form">
    <form onSubmit={handleSubmit}>
      <div id="med-name">
      <input
        type="text"
        value={medicineName}
        onChange={(e) => setMedicineName(e.target.value)}
        placeholder="Medicine Name"
        required
      />
      <div id="shifts">
        <input
          type="checkbox"
          checked={shifts[0]}
          onChange={() => setShifts([!shifts[0], shifts[1], shifts[2]])}
        />
        <label>Morning</label>

        <input
          type="checkbox"
          checked={shifts[1]}
          onChange={() => setShifts([shifts[0], !shifts[1], shifts[2]])}
        />
        <label>Afternoon</label>
        <input
          type="checkbox"
          checked={shifts[2]}
          onChange={() => setShifts([shifts[0], shifts[1], !shifts[2]])}
        />
        <label>Night</label>
        </div>
      </div>
      <div id="custom-time">
        <label>
          Custom Time:
         
        </label>
        <input
            type="time"
            onChange={handleTimeChange}
          />
      </div>
      <button type="submit">Add Medicine</button>
    </form>
    </div>
  );
}

export default MedicineForm;
