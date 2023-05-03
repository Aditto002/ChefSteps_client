import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Regiter from "../pages/Regiter";
import Categories from "../components/Categories";

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
          element:<Categories></Categories>,
          // loader:({params}) => console.log(params.id)
        loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
  ]);
  export default router;