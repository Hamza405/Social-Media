<<<<<<< HEAD
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
=======
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

<<<<<<< HEAD
const router = createBrowserRouter( [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile/:userid",
    element: <Profile />,
  },
] );

function App() {
  return <RouterProvider router={ router } />;
=======
function App() {
  return <Profile/>;
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
}

export default App;
