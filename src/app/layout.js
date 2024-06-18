import { Rubik } from "next/font/google";
import AuthPage from '../components/AuthPage';
import ContextProviders from "./ContextProviders";
import ErrorMessage from "@/components/ErrorMessage";
import "./globals.scss";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Welocme to Shoplive app",
  description: "Shoplive is a website where you can save the list of items you want to buy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ContextProviders>
          <AuthPage />
          <ErrorMessage />
          <main>
            {children}
          </main>
        </ContextProviders>
      </body>
    </html>
  );
}
