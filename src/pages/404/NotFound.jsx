import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);

  return (
    <main className="grid min-h-screen place-items-center bg-[#f9f5e3] px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-[2rem] font-semibold text-[#2c6e49]">404</p>
        <h1 className="mt-4 xl:text-5xl md:text-4xl sm:text-3xl max-sm:text-3xl font-semibold tracking-tight text-balance text-[#5c3d2e]">
          Page not found
        </h1>
        <p className="mt-6 text-lg md:text-md font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            text="Go back home"
            onClick={() => {
              navigate("/");
            }}
            className="px-8 py-4 max-sm:px-6 max-sm:py-2"
          />
        </div>
      </div>
    </main>
  );
}
