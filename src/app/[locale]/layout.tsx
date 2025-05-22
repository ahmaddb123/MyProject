import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "bootstrap/dist/css/bootstrap.min.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const typedLocale = locale as "en" | "ar";
  const messages = await getMessages({ locale: typedLocale });

  return (
    <html lang={typedLocale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={typedLocale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
