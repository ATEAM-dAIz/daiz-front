import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "../store";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default PrivateRoute;
