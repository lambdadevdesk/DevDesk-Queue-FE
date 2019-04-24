import React from "react";
import styled from "styled-components";

import Menu from "./Menu";
import Footer from "./Footer";

const SDivMain = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1 0 auto;
  }

  footer {
    flex-shrink: 0;
  }
`;

export default props => {
  return (
    <SDivMain>
      <Menu />
      <div className="content"> {props.children}</div>
      <Footer />
    </SDivMain>
  );
};
