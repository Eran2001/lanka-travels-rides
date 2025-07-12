import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import Loading from "./components/ui/Loading";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={true}
        theme="colored"
      />
    </>
  );
}

export default App;
