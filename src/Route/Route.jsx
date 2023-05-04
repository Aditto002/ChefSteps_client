import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Regiter from "../pages/Regiter";
import Categories from "../components/Categories";
import PriveteRoute from "../priveteRoute/PriveteRoute";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Regiter></Regiter>
        },
        {
          path:"/category/:id",
          element:<PriveteRoute><Categories></Categories></PriveteRoute>,
          // loader:({params}) => console.log(params.id)
        loader:({params})=>fetch(`https://chefsteps-server-aditto002.vercel.app/categories/${params.id}`)
        },
      ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ]);
  export default router;