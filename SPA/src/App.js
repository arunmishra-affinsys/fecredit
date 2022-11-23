import React from "react";
// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ScrollToTop from "./components/scroll-to-top";
import DynamicContent from "bb-dynamic-content";
import { useLocation } from "react-router-dom";

// React.useEffect(() => {
//   dc.ready.then(() => {
//     dc.initContent();
//     dc.initClickStream();
//   });
// }, [location]);
// ----------------------------------------------------------------------
// const location = useLocation();

let dc = new DynamicContent({ loggedIn: false });

export default function App() {
  const nodes = document.querySelectorAll("a");

  React.useEffect(() => {
    dc.ready.then(() => {
      dc.initContent();
      console.log("Initialize");
    });
  }, []);
  React.useEffect(() => {
    dc.ready.then(() => {
      dc.initClickStream();
      console.log("ClickStream");
    });
  }, [nodes]);

  return (
    <div className="track">
      <ThemeProvider>
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </div>
  );
}
