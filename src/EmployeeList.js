import React, { useState, useEffect } from "react";
import "./EmployeeList.css";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched users:", data);
        setEmployees(data);

        console.log("All employees from backend:", data);
      })
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  const filtered = employees
    .filter((e) => typeof e === "object" && e && e.name) 
    .filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="employee-tool">
      <h2>Employee Directory</h2>

      {}
      <input
        type="text"
        placeholder="Search employee by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {}
      <ul className="employee-list">
        {filtered.map((e) => (
          <li key={e.id} onClick={() => setSelected(e)}>
            {e.name}
          </li>
        ))}
      </ul>

      {}
      {selected && (
        <div className="employee-details">
          <h3>{selected.name}</h3>
          <p><strong>Email:</strong> {selected.email}</p>
          <p><strong>Role:</strong> {selected.role}</p>
        </div>
      )}
    </div>
  );
}

export default EmployeeList;
