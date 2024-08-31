import React, { useState } from "react";

function MedicineCard({ time, medicines }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="medicine-card-container" onClick={handleFlip}>
      <div className={`medicine-card ${flipped ? "flipped" : ""}`}>
        <div className="card-side card-front">
          <h3>{time}</h3>
        </div>
        <div className="card-side card-back">
          {medicines.map((medicine, index) => (
            <p key={index}>{medicine}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MedicineCard;
