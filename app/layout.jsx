import Header from "./components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Anirudh Kadian",
  description: "Black Parka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="container">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
