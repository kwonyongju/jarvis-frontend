import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { GlobalStyle } from "./constants/global";
import { NAV_ITEMS } from "./constants/navItems";
import Content from "./components/layout/Content";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import InventoryManagement from "./pages/manager/InventoryManagement";
import Main from "./pages/Main";
import Menu from "./pages/customer/Menu";
import MenuManagement from "./pages/manager/MenuManagement";
import Navbar from "./components/nav/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import OrderHistory from "./pages/manager/Orders";
import PurchaseHistory from "./pages/customer/Purchases";
import Sales from "./pages/manager/Sales";

const App = () => {
  return (
    <>
      <Router basename="/jarvis">
        <GlobalStyle />
        <Header>
          <Navbar navLeft={"Home"} navItems={NAV_ITEMS} />
        </Header>
        <Content>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/purchases">
              <PurchaseHistory />
            </Route>
            <Route path="/menuManagement">
              <MenuManagement />
            </Route>
            <Route path="/sales">
              <Sales />
            </Route>
            <Route path="/inventoryManagement">
              <InventoryManagement />
            </Route>
            <Route path="/orders">
              <OrderHistory />
            </Route>
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Content>
        <Footer />
      </Router>
    </>
  );
};

export default App;
