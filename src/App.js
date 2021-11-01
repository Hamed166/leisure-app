
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
import Destinations from './Pages/Home/Home/Destinations/Destinations';
import Blog from './Pages/Home/Blog/Blog';
import Login from './Pages/Login/Login';
import Tours from './Pages/Home/Tours/Tours';
import TourDetails from './Pages/Tour Details/TourDetails';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddTour from './Pages/AddTour/AddTour';
import ManageBooking from './Pages/ManageBooking/ManageBooking';
import MyBooking from './Pages/MyBooking/MyBooking';
import Update from './Pages/MyBooking/MyBookingShow/Update/Update';



function App() {
  return (
    <div className="App">
        <AuthProvider>
            <BrowserRouter>
            <Header></Header>
                <Switch>
                      <Route exact path="/">
                        <Home></Home>
                      </Route>
                      <Route path="/home">
                        <Home></Home>
                      </Route>
                      <Route exact path="/tours">
                        <Tours></Tours>
                      </Route>
                      <Route exact path="/destinations">
                        <Destinations></Destinations>
                      </Route>
                      <Route  path="/manageBooking">
                        <ManageBooking></ManageBooking>
                      </Route>
                      <Route  path="/addTour">
                        <AddTour></AddTour>
                      </Route>
                      <Route path="/mybooking">
                        <MyBooking></MyBooking>
                      </Route>
                      <Route path="/updated/:id">
                        <Update></Update>
                      </Route>
                      <Route  path="/bookNew/:bookingId">
                        <AddTour></AddTour>
                      </Route>
                      <PrivateRoute path="/tourinfo/:tourId">
                        <TourDetails></TourDetails>
                      </PrivateRoute>
                    
                      <Route exact path="/blog">
                        <Blog></Blog>
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
        </AuthProvider>
    </div>
  );
}

export default App;
