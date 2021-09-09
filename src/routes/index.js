import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import WeatherPage from "../pages/WeatherPage";
import Header from "../layout/Header";

const Routes = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={WeatherPage} exact />
          </Switch>
        </BrowserRouter>
      </MainLayout>
    </>
  );
};

export default Routes;
