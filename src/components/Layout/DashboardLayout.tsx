"use client";

import { ErrorBoundary } from "react-error-boundary";
import SideBar from "./SideBar";
import { Header } from "./Header";

interface DashboadLayoutProps {
  children: React.ReactNode;
}

const DashboadLayout = ({ children }: DashboadLayoutProps) => {
  return (
    <ErrorBoundary
      fallback={
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      }
    >
      <>
        <div className="h-full relative">
          <div className="hidden rounded-r-lg h-full w-[200px] lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 z-[80] bg-secondary">
            {/* Sidebar */}
            <SideBar />
          </div>
          <main className="lg:pl-72">
            {/* Main content */}
            <div className="sticky top-0 z-10 bg-white">
              <Header />
            </div>
            {children}
          </main>
        </div>
      </>
    </ErrorBoundary>
  );
};

export default DashboadLayout;
