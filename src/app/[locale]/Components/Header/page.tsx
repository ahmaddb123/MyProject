import React from "react";
import { IoLanguage, IoSettingsOutline } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { VscFilter } from "react-icons/vsc";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation"; // ✅ مهم
import { usePathname } from "next/navigation"; // ✅ مهم


function Header({ active, setActive, setSection }) {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

const toggleLanguage = () => {
  const newLocale = locale === "en" ? "ar" : "en";
  const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
  router.push(newPathname);
};
  return (
    <div className="Header">
      <FaBars className="bars" onClick={() => setActive((prev) => !prev)} />
      <div className="name">
        <h1>Hi Name</h1>
        <p>Here’s your dashboard overview.</p>
      </div>
      <div className="search flex">
        <input
          className="input-search"
          type="search"
          placeholder={t("searchForSomething")}
        />
        <VscFilter />
      </div>
      <div className="Notifications">
        <IoSettingsOutline
          style={{ color: "#718EBF" }}
          onClick={() => setSection("Settings")}
        />
        <LuBellDot style={{ color: "#FE5C73" }} />
        <IoLanguage  style={{ cursor: "pointer" }} onClick={toggleLanguage} />
      </div>
      <div className="full-name">
        <h1>Full Name</h1>
      </div>
    </div>
  );
}

export default Header;
