"use client";
import React, { useState } from "react";
import "./login.css";
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
      const response = await fetch("https://46.202.135.90:81/en/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // تخزين التوكنات
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("email", data.email);

        router.push(`/${locale}/Home`);
      } else {
        console.error("فشل تسجيل الدخول");
        alert("بيانات الدخول غير صحيحة");
      }
    } catch (error) {
      console.error("خطأ بالشبكة:", error);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="sign-up">
          <div className="title">
            <h1>
              Welcome to <span>LOGO</span>
            </h1>
            <h2>Sign in</h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className="email">
              <p>Enter your username or email address</p>
              <input
                type="email"
                placeholder="Username or email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="password">
              <p>Enter your Password</p>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Link href={`/${locale}/ForgetPassword`}>Forgot Password</Link>
            <div className="btn">
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
