import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Home from "/src/components/Home";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import RestaurentMenu from "./src/components/RestaurentMenu";
import Shimmer from "./src/components/Shimmer";

const Grocery = lazy(()=>
  import( "./src/components/Grocery")
)
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement : <Error/>,
    children:[{
      path:"/",
      element:<Body/>
    },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },{
        path: "/cart",
        element: <Cart />,
      },{
        path:'/restaurentMenu/:resId',
        element:<RestaurentMenu/>
      },{
        path:"/grocery",
        element:(<Suspense fallback={<Shimmer/>}>
          <Grocery/>
          </Suspense>)
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
