import Navbar from "@/components/global/navbar";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};
function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default DashboardLayout;
