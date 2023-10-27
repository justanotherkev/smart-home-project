import { Outlet } from "react-router-dom";
import "./App.css";
import NavIcon from "./components/nav-icon/nav-icon.jsx";
import WeatherData from "./components/weather-data/weather-data";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import PowerData from "./components/power-data/power-data";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing publishable key");
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <div className="App">

          <div className="sidebar">
            <NavIcon route="home" />
            <NavIcon route="settings" />
            <NavIcon route="analytics" />
            <NavIcon route="account" />
          </div>

          <div className="widgets">
            <WeatherData />
            <PowerData />
          </div>

          <Outlet />
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;
