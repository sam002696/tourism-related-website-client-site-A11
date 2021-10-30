import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/Paths/NotFound/NotFound';
import Home from './Components/Paths/Home/Home';
import MyBookings from './Components/Paths/MyBookings/MyBookings';
import ManageAllBookings from './Components/Paths/ManageAllBookings/ManageAllBookings';
import AddNewBooking from './Components/Paths/AddNewBooking/AddNewBooking';
import Login from './Components/Paths/Login/Login';
import AboutUs from './Components/Paths/AboutUs/AboutUs';
import AuthProvider from './ContextApi/AuthProvider';
import BookingDetails from './Components/Paths/Home/BookingDetails';
import PrivateRoute from './Components/Paths/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/mybookings">
            <MyBookings></MyBookings>
          </Route>
          <Route path="/manageallbookings">
            <ManageAllBookings></ManageAllBookings>
          </Route>
          <Route path="/addnewbooking">
            <AddNewBooking></AddNewBooking>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/bookingDetail/:bookingID">
            <BookingDetails></BookingDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;