"use client";

import "./ForgetPassword.css";
import Link from "next/link";
import { useLocale } from "next-intl";

function ForgetPassword() {
  const locale = useLocale();
  return (
    <div className="ForgetPassword">
      <div className="container">
        <div className="box">
          <h1>Recover your password</h1>
          <p>Enter your email so we can retrieve your password</p>
          <form action="">
            <input
              type="email"
              name=""
              id=""
              placeholder={`Your Email`}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Recover your password</button>
          </form>
          <Link href={`/${locale}/Login`}>Go to Sign in </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
