import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/cadastro" exact component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
