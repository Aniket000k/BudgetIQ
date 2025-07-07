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
        <footer className="bg-blue-50 text-white p-12 text-center">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p className="">Hooooooooooooooooooooooooooooooooooooo</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
