import React, { useState } from "react";

function MedicineCard({ time, medicines }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`medicine-card ${flipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="card-inner">
        <div className="card-front">
          <h3>{time}</h3>
        </div>
        <div className="card-back">
          <div>
            {medicines.map((medicine, index) => (
              <p className="medicine" key={index}>{medicine}</p>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineCard;
