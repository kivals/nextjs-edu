import React, { FC, PropsWithChildren } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col antialiased font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
