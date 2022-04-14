import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { RootState } from "../store";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.userReducer.isLoggedIn
  );
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
