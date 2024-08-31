import React, { useEffect, useState } from "react";

function MedicineForm({ addMedicine }) {
  const [medicineName, setMedicineName] = useState("");
  const [shifts, setShifts] = useState([false, false, false]);
  const [manualEntries, setManualEntries] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const anyShiftSelected = shifts.some((val) => val === true);
    setIsDisabled(anyShiftSelected);
  }, [shifts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isChecked = shifts.some((val) => val === true);
    const customTimeAdded = manualEntries.length > 0;
    if (!isChecked && !customTimeAdded) {
      setError("Please choose your medication slot or add custom time.");
      return;
    }
    if (medicineName.trim() === "") {
      setError("Please enter the medicine name.");
      return;
    }
    const newMedicine = {
      medicineName,
      shifts,
      manualEntries,
    };
    addMedicine(newMedicine);
    setMedicineName("");
    setShifts([false, false, false]);
    setManualEntries([]);
    setError("");
  };

  const handleTimeSelect = (e) => {
    const time = e.target.value;
    setManualEntries([{ time, medicineName }]); // Only one custom time entry per medicine
  };

  return (
    <div id="med-form" className="bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        <div id="med-name" className="mb-4">
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            placeholder="Medicine Name"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <div id="shifts" className="mt-4 flex justify-around">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={shifts[0]}
                onChange={() => setShifts([!shifts[0], shifts[1], shifts[2]])}
                className="mr-2"
              />
              <label>Morning</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={shifts[1]}
                onChange={() => setShifts([shifts[0], !shifts[1], shifts[2]])}
                className="mr-2"
              />
              <label>Afternoon</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={shifts[2]}
                onChange={() => setShifts([shifts[0], shifts[1], !shifts[2]])}
                className="mr-2"
              />
              <label>Night</label>
            </div>
          </div>
        </div>
        <div id="custom-time" className="mb-4">
          <label className="block text-gray-700 mb-2">Custom Time:</label>
          <input
            type="time"
            onChange={handleTimeSelect}
            disabled={isDisabled}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          Add Medicine
        </button>
        {error && <h3 className="text-red-500 mt-4">{error}</h3>}
      </form>
    </div>
  );
}

export default MedicineForm;
