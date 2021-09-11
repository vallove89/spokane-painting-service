import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import EstimatePage from "./pages/EstimatePasge";
import ExteriorPage from "./pages/ExteriorPage";
import InteriorPage from "./pages/InteriorPage";
import CommercialPage from "./pages/CommercialPage";
import CabinetPage from "./pages/CabinetPage";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/exterior" component={ExteriorPage} />
          <Route path="/interior" component={InteriorPage} />
          <Route path="/commercial" component={CommercialPage} />
          <Route path="/cabinet" component={CabinetPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/estimate" component={EstimatePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
