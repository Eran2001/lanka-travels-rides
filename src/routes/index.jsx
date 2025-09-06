import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/components/shared/ErrorPage";

const Home = lazy(() => import("@/pages/Home/Home"));
const About = lazy(() => import("@/pages/About/About"));
const Contact = lazy(() => import("@/pages/Contact/Contact"));
const NotFound = lazy(() => import("@/pages/404/NotFound"));
const Destinations = lazy(() => import("@/pages/Destinations/Destinations"));
const GetStarted = lazy(() => import("@/pages/GetStarted/GetStarted"));
const Clients = lazy(() => import("@/pages/CLients/CLients"));
const Payments = lazy(() => import("@/pages/Payments/Payments"));
const Blogs = lazy(() => import("@/pages/Blogs/Blogs"));
const Services = lazy(() => import("@/pages/Services/Services"));
const OurFleet = lazy(() => import("@/pages/OurFleet/OurFleet"));
const RentVehicles = lazy(() => import("@/pages/RentVehicles/RentVehicles"));
const FAQ = lazy(() => import("@/pages/FAQ/FAQ"));
const RentWithDriver = lazy(() =>
  import("@/pages/RentWithDriver/RentWithDriver")
);
const SelfDrive = lazy(() => import("@/pages/SelfDrive/SelfDrive"));
const SpecialOffers = lazy(() => import("@/pages/SpecialOffers/SpecialOffers"));
const Terms = lazy(() => import("@/pages/Terms/Terms"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy/PrivacyPolicy"));

const WilpattuNationalPark = lazy(() =>
  import("../pages/Destinations/pages/WilpattuNationalPark")
);
const Colombo = lazy(() => import("../pages/Destinations/pages/Colombo"));
const NuwaraEliya = lazy(() =>
  import("../pages/Destinations/pages/NuwaraEliya")
);
const Ella = lazy(() => import("../pages/Destinations/pages/Ella"));
const Kandy = lazy(() => import("../pages/Destinations/pages/Kandy"));
const Anuradhapura = lazy(() =>
  import("../pages/Destinations/pages/Anuradhapura")
);
const Polonnaruwa = lazy(() =>
  import("../pages/Destinations/pages/Polonnaruwa")
);
const Galle = lazy(() => import("../pages/Destinations/pages/Galle"));
const Jaffna = lazy(() => import("../pages/Destinations/pages/Jaffna"));
const Tours = lazy(() => import("../pages/Tours/ExploreTours"));

const EllaDay = lazy(() => import("../pages/day-tours/EllaDayTour"));
const KandyDay = lazy(() => import("../pages/day-tours/KandyDayTour"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "*", element: <NotFound /> },
      { index: true, element: <Home /> },
      { path: "clients", element: <Clients /> },
      { path: "payments", element: <Payments /> },
      { path: "blogs", element: <Blogs /> },
      { path: "contact-us", element: <Contact /> },
      { path: "about-us", element: <About /> },
      { path: "what-we-offer", element: <Services /> },
      { path: "fleet", element: <OurFleet /> },
      { path: "check-out-our-fleet", element: <RentVehicles /> },
      { path: "faqs", element: <FAQ /> },
      { path: "hire-with-driver", element: <RentWithDriver /> },
      { path: "self-drive", element: <SelfDrive /> },
      { path: "special-offers", element: <SpecialOffers /> },
      { path: "terms-and-conditions", element: <Terms /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      {
        path: "discover-sri-lanka/wilpattu-national-park",
        element: <WilpattuNationalPark />,
      },
      { path: "discover-sri-lanka/colombo", element: <Colombo /> },
      { path: "discover-sri-lanka/nuwara-eliya", element: <NuwaraEliya /> },
      { path: "discover-sri-lanka/ella", element: <Ella /> },
      { path: "discover-sri-lanka/kandy", element: <Kandy /> },
      { path: "discover-sri-lanka/anuradhapura", element: <Anuradhapura /> },
      { path: "discover-sri-lanka/polonnaruwa", element: <Polonnaruwa /> },
      { path: "discover-sri-lanka/galle-fort", element: <Galle /> },
      { path: "discover-sri-lanka/jaffna", element: <Jaffna /> },
      { path: "discover-sri-lanka", element: <Destinations /> },
      { path: "explore-tours", element: <Tours /> },
      { path: "day-tours/ella-day-tour", element: <EllaDay /> },
      { path: "day-tours/kandy-day-tour", element: <KandyDay /> },
    ],
  },
]);
