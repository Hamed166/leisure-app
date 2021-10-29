
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Booking from './Pages/Booking/Booking';
import Destinations from './Pages/Home/Home/Destinations/Destinations';
import Blog from './Pages/Home/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Tours from './Pages/Home/Tours/Tours';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/booking">
                <Booking></Booking>
              </Route>
              <Route exact path="/tours">
                <Tours></Tours>
              </Route>
              <Route exact path="/destinations">
                <Destinations></Destinations>
              </Route>
              {/* <Route path="/serviceinfo/:serviceId">
                <ServiceDetails></ServiceDetails>
              </Route> */}
              <Route exact path="/blog">
                <Blog></Blog>
              </Route>
              <Route exact path="/contact">
                <Contact></Contact>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <PageNotFound></PageNotFound>
              </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
