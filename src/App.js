import { BrowserRouter } from "react-router-dom";

import "./App.scss";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main/Main";
import Writing from "./pages/Writing/Writing";
import Analysis from "./pages/Analysis/Analysis";
import Result from "./pages/Result/Result";
import Mypage from "./pages/Mypage/Mypage";
import ResetPwConfirm from "./pages/ResetPwConfirm/ResetPwConfirm";
import ResetPw from "./pages/ResetPw/ResetPw";

import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRoute restricted={true} exact path="/" component={Login} />
        <PublicRoute restricted={true} path="/signup" component={Signup} />
        <PublicRoute path="/reset_password" component={ResetPw} />
        <PublicRoute
          path="/password/reset/:uid/:token"
          component={ResetPwConfirm}
        />

        <PrivateRoute path="/main" component={Main} />
        <PrivateRoute path="/write" component={Writing} />
        <PrivateRoute path="/analysis" component={Analysis} />
        <PrivateRoute path="/result" component={Result} />
        <PrivateRoute path="/mypage" component={Mypage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
