"use client";

import React from 'react'
import Image from "next/image";
import { IoArrowBackCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { RiHome5Fill } from "react-icons/ri";
import { TfiViewList } from "react-icons/tfi";
import { IoIosArrowDropdown } from "react-icons/io";
import "./Bar.css"
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

function Bar({ active, setActive, setSection, section }) {
    const locale = useLocale();
  const router = useRouter();

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem("refresh");
  
    if (!refreshToken) {
      console.error("No refresh token found!");
      return;
    }
  
    try {
      const response = await fetch("http://46.202.135.90:81/en/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });
  
      if (response.ok) {
        console.log("تم تسجيل الخروج بنجاح");
      } else {
        const errorData = await response.json();
        console.error("فشل تسجيل الخروج:", errorData.detail || errorData);
      }
    } catch (error) {
      console.error("خطأ أثناء تسجيل الخروج:", error);
    } finally {
      localStorage.clear();
      router.push(`/${locale}/Login`); // رجع المستخدم على صفحة الدخول
    }
  };
  

  return (
    <div className={`bar ${active ? "active" : ""}`}>
      <div className="flex justify-between">
        <h1>Logo</h1>
        {active && <IoArrowBackCircleOutline onClick={() => setActive(false)} />}
      </div>
      <ul>
        <li className="reefi">
          <div>
            <Image src={"/Reefi.jpg"} width={"30"} height={"30"} alt="" /> Reefi
          </div>
          <IoIosArrowDropdown />
        </li>
        <li onClick={() => setSection("Dashboard")}>
          <RiHome5Fill style={{ color: "#3981F7" }} /> Dashboard
        </li>
        <li onClick={() => setSection("Order Analysis")}>
          <Image src={"/message.png"} width={"30"} height={"30"} alt="" /> Order Analysis
        </li>
        <li onClick={() => setSection("Product")}>
          <TfiViewList style={{ color: "#904DFF" }} /> Product
        </li>
        <li onClick={() => setSection("Customers")}>
          <PiUsersBold style={{ color: "#05FF00" }} /> Customers
        </li>
        <li onClick={() => setSection("Coupons")}>
          <Image src={"/coupons.png"} width={"30"} height={"30"} alt="" /> Coupons
        </li>
        <li onClick={() => setSection("Countries")}>
          <Image src={"/Countries.png"} width={"30"} height={"30"} alt="" /> Countries
        </li>
        <li onClick={() => setSection("Payments")}>
          <Image src={"/Payments.png"} width={"30"} height={"30"} alt="" /> Payments
        </li>
        <li onClick={() => setSection("Shipping")}>
          <Image src={"/Shipping.png"} width={"30"} height={"30"} alt="" /> Shipping
        </li>
        <li onClick={() => setSection("Delivery tool indicator")}>
          <Image src={"/Delivery.png"} width={"30"} height={"30"} alt="" /> Delivery tool indicator
        </li>
        <li onClick={() => setSection("Retarget")}>
          <Image src={"/Retarget.png"} width={"30"} height={"30"} alt="" /> Retarget
        </li>
        <li onClick={() => setSection("Data bank")}>
          <Image src={"/Data.png"} width={"30"} height={"30"} alt="" /> Data bank
        </li>
        <li onClick={() => setSection("Settings")}>
          <IoSettingsOutline style={{ color: "#904DFF" }} /> Settings
        </li>
      </ul>
      <button onClick={handleLogout}>
        <MdLogout /> Log out
      </button>
    </div>
  );
}

export default Bar;


