import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import './global.css';

export const metadata: Metadata = {
   title: "Home | Next App",
   description: "learn Next.JS",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>
            <div className="wrapper">
               <Header />
               <main className="content">{children}</main>
               <Footer />
            </div>
         </body>
      </html>
   );
}
