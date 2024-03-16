import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page2 from "./pages/Page2";
import Page1 from "./pages/Page1";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page1 />,
    },
    {
      path: "/page2/:count",
      element: <Page2 />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
