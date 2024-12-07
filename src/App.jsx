import { useRoutes } from "react-router-dom";
import { pathDefalut } from "./common/path";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

const arrRoutes = [
  {
    path: pathDefalut.homePage,
    element: <HomeTemplate />,
  },
  {
    path: pathDefalut.signIn,
    element: <SignIn />,
  },
  {
    path: pathDefalut.signUp,
    element: <SignUp />,
  },
];

function App() {
  const routes = useRoutes(arrRoutes);
  return <>{routes}</>;
}

export default App;
