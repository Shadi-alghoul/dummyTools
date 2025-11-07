import React from "react";
import EmployeeList from "./EmployeeList";
import "./theme.css";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-text">
          <h1>Employee Info Display Tool</h1>
        </div>
      </header>

      <main className="app-content">
        <EmployeeList />
      </main>
    </div>
  );
}

export default App;