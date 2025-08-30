import { Outlet } from "react-router-dom";
import ScrollToTop from "../routes/ScrollToTop";

import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import SecondaryNavBar from "@/components/shared/SecondaryNavBar";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      {/* <NavBar /> */}
      <SecondaryNavBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94777900734"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-9997 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 lg:w-10 lg:h-10"
        >
          <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.14 1.59 5.93L0 24l6.22-1.63A11.97 11.97 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22c-1.94 0-3.83-.53-5.48-1.53l-.39-.23-3.69.97.99-3.6-.25-.42A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.38c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.89 1.1-.16.18-.33.2-.61.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.18.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48h-.55c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.53-.08 1.66-.68 1.9-1.34.23-.65.23-1.21.16-1.34-.07-.12-.25-.2-.53-.34z" />
        </svg>
      </a>
    </>
  );
}
