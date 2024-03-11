import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"], 
  variable:'--font-nunito',
});

export const metadata = {
  title: "Prototype Business Site",
  description: "Created by AngelaTaylorLLC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'${nunito.variable} font-sans'}>
        {children}
      </body>
    </html>
  );
}
