import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Today from "./components/today/Today";
import Habits from "./components/habits/Habits";
import UserContext from "./contexts/UserContext";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={userData}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login setUserData={setUserData} />
          </Route>
          <Route path="/cadastro" exact component={Register} />
          <Route path="/hoje" exact component={Today} />
          <Route path="/habitos" exact component={Habits} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
