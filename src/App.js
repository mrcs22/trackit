import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
