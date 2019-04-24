import React from "react";

import Menu from "./Menu";
import Footer from "./Footer";
import { MainDivApp } from "../../helpers/index";

export default props => {
  return (
    <MainDivApp>
      <Menu />
      <div className="content"> {props.children}</div>
      <Footer />
    </MainDivApp>
  );
};
