import React, { useState } from "react";
import "./AddSettings.css";

function AddSettings({ setAdd }) {
  const [active, setActive] = useState(false);
  return (
    <div className="AddSettings">
      <div className="h1">
        <h1>Add New Admin</h1>{" "}
        <button
          className={active == true ? "active" : ""}
          onClick={() => setActive((prev) => !prev)}
        >
          Can Edit
        </button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="ci">
          <div className="container-input img">img</div>
          <div className="container-input">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="text" placeholder="Password" />
            </div>
          </div>
          <div className="container-input">
            <div>
              <label htmlFor="">role</label>
              <input type="select" placeholder="Super Admin" />
            </div>
            <div>
              <label htmlFor="">E-mail</label>
              <input type="text" placeholder="E-mail" />
            </div>
          </div>
        </div>
      </form>
      <div className="container-btn">
        <button type="submit">Save</button>
        <button type="button" onClick={() => setAdd(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddSettings;
