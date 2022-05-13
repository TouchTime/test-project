/*
 * @Description  : 路由
 * @Author       : huyanyan
 * @Date         : 2021-07-14 10:50:03
 */
import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/index/index";
import Cart from "./pages/cart/cart";

import Layout from "./components/layout/layout";
import "./assets/app.css";

export default () => {
  return (
    <div>
      <Layout />
      {/* <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <li>
              <Link to="/Cart/">列表</Link>
            </li>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/Cart/" component={Cart} />
      </Router> */}
    </div>
  );
};
