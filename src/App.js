import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import NavigationBar from "./Components/NavigationBar/NavigationBar";
// import SignIn from "./Components/Signin/Signin";
// import Payment from "./Components/Subscription/Payment";
import Subscription from "./Components/Subscription/Subscription.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <NavigationBar/> */}
        <Routes>
          {/* <Route path="/" element={<SignIn />} /> */}
          <Route path="/" element={<Subscription />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
