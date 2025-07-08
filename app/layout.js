import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "BudgetIQ",
  description: "Manage your wealth with ease",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/*Header can be added here*/}
        <Header />
        <main className="min-h-screen "> {children}</main>

        {/*Footer can be added here*/}
        <footer className="bg-blue-50  py-8">
  <div className="container mx-auto px-4 text-left">
    <h2 className="text-2xl font-semibold mb-2">BudgetIQ</h2>
    <p className=" mb-4">Smart way to manage your money and track your spending easily.</p>
    <p className="mt-4 text-xs text-center ">© 2025 BudgetIQ. All rights reserved.</p>
  </div>
</footer>

      </body>
    </html>
    </ClerkProvider>
  );
}
