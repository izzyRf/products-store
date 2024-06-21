import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";


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
        <PageHeader text="Online store"/>
        {children}
        <PageFooter/>
      </body>
    </html>
  );
}
