import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import type { ReactNode } from "react";

export default function WebsiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}