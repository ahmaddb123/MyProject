import React from "react";
import styles from "./Filter.module.css";
import { VscDebugRestart, VscFilter } from "react-icons/vsc";
import { useTranslations } from "next-intl";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Filter() {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.Filter}>
      <div className={styles["box-filter"]}>
        <div className={styles.icon}>
          <VscFilter />
        </div>
        <button className={styles.select}>{t("filter")}</button>
        <DropdownButton
          id="dropdown-basic-button"
          title={`${t("sort")}`}
          className={styles.select}
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="dropdown-basic-button"
          title={`${t("date")}`}
          className={styles.select}
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <input
          className={styles.select}
          type="text"
          placeholder={`${t("search")}`}
        />
        <button style={{ color: "red" }} className={styles.select}>
          <VscDebugRestart /> {t("ResetFilter")}
        </button>
      </div>
    </div>
  );
}

export default Filter;
