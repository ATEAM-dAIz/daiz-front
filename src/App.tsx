import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

const PublicRoute = lazy(() => import("./routers/PublicRoute"));
const PrivateRoute = lazy(() => import("./routers/PrivateRoute"));

const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Main = lazy(() => import("./pages/Main/Main"));
const Writing = lazy(() => import("./pages/Writing/Writing"));
const Result = lazy(() => import("./pages/Result/Result"));
const Mypage = lazy(() => import("./pages/Mypage/Mypage"));
const ResetPwConfirm = lazy(
  () => import("./pages/ResetPwConfirm/ResetPwConfirm")
);
const ResetPw = lazy(() => import("./pages/ResetPw/ResetPw"));
const ChangePw = lazy(() => import("./pages/ChangePw/ChangePw"));
const Page404 = lazy(() => import("./pages/Page404/Page404"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<p>로딩중...</p>}>
          <Switch>
            <PublicRoute restricted={true} exact path="/" component={Login} />
            <PublicRoute restricted={true} path="/signup" component={Signup} />
            <PublicRoute path="/reset_password" component={ResetPw} />
            <PublicRoute path="/reset/:uid/:token" component={ResetPwConfirm} />

            <PrivateRoute path="/main" component={Main} />
            <PrivateRoute path="/write" component={Writing} />
            <PrivateRoute path="/result/:diary_id" component={Result} />
            <PrivateRoute path="/mypage" component={Mypage} />
            <PrivateRoute path="/change_password" component={ChangePw} />
            <Route component={Page404} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
