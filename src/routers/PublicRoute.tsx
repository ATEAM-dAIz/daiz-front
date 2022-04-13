import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { RootState } from "../store";

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.userReducer.isLoggedIn
  );

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
