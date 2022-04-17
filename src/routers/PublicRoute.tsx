import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "../store";

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && restricted ? (
          <Redirect to="/main" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
