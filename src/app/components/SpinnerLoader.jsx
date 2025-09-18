import React from "react";

export default function SpinnerLoader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 120 }}>
      <div className="spinner-border text-warning" role="status" style={{ width: 48, height: 48 }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
