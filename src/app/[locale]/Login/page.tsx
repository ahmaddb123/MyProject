"use client";
import React, { useState } from "react";
import styles from "./login.module.css"; // ← ملاحظة التعديل هنا
import Link from "next/link";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const locale = useLocale();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://46.202.135.90:81/en/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("email", data.email);
        router.push(`/${locale}/Home`);
      } else {
        alert("بيانات الدخول غير صحيحة");
      }
    } catch (error) {
      console.error("خطأ بالشبكة:", error);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles["sign-up"]}>
          <div className={styles.title}>
            <h1>
              Welcome to <span>LOGO</span>
            </h1>
            <h2>Sign in</h2>
          </div>
          <form onSubmit={handleLogin} className={styles.form}>
            <div className={styles.email}>
              <p>Enter your username or email address</p>
              <input
                type="email"
                placeholder="Username or email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.password}>
              <p>Enter your Password</p>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Link href={`/${locale}/ForgetPassword`}>Forgot Password</Link>
            <div className={styles.btn}>
              <button type="submit" className={styles.button}>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
