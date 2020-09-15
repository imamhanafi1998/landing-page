import React from "react";
import { Flex } from "@chakra-ui/core";
import { Router, Route } from "react-router-dom";

import History from "./components/History";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

import "./styles.css";

import { CSSTransition } from "react-transition-group";

export default function App() {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/works", name: "Works", Component: Work },
    { path: "/about", name: "About", Component: About },
    { path: "/contacts", name: "Contact", Component: Contact }
  ];

  const scrollPostion = (e) => {
    let scrollPostionNow = {
      x: this.scrollX,
      y: this.scrollY
    };
    return scrollPostionNow
  };

  return (
    <Router history={History}>
      <Navbar />
      <Flex px={{ xs: "6", md: "24", lg: "32" }} my="8" mt="96px">
        {/* <Switch> */}
        <div className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <Component />
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
        {/* </Switch> */}
      </Flex>
    </Router>
  );
}
