import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "./components/PageHeader";
import Header from "./components/Header";

import PageFooter from "./components/PageFooter";
import NextTopLoader from "nextjs-toploader";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online market",
  description: "Prueba realizada por Isidoro Rodríguez para vacante coordinador front end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
      <body className={inter.className}>
        
        
        <NextTopLoader color="#102C57"/>
        <main>
          {/* <Header/> */}
          <PageHeader text="Online store"/>
          {children}
        </main>
        <PageFooter/>
      </body>
    </html>
  );
}
