import GraphPage from "./pages/GraphPage";
import NotFoundPage from "./pages/404Page";
import { Switch, Route, useLocation } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStlyes";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyles />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <GraphPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
