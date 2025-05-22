import React from "react";
import "./Filter.css";
import { VscDebugRestart, VscFilter } from "react-icons/vsc";
import { useTranslations } from "next-intl";
import { Dropdown, DropdownButton } from "react-bootstrap";

function FilterDelivery() {
  const t = useTranslations("HomePage");
  return (
    <div className="Filter">
      <div className="box-filter">
        <div className="icon">
          <VscFilter />
        </div>
        <button className="select">{t("filter")}</button>
        <DropdownButton
          id="dropdown-basic-button"
          title={`02 Nov 2024`}
          className="select"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="dropdown-basic-button"
          title={`New to complete`}
          className="select"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="dropdown-basic-button"
          title={`All cities`}
          className="select"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <input className="select" type="text" placeholder={`${t("search")}`} />
        <button style={{ color: "red" }} className="select">
          <VscDebugRestart /> {t("ResetFilter")}{" "}
        </button>
      </div>
    </div>
  );
}

export default FilterDelivery;
