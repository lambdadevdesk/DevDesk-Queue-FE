import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const ProfileCard = props => {
  const ProfileDiv = styled.div`
    color: black;
    margin: 2rem 0;
  `;

  return (
    <ProfileDiv className="profile-panel">
      <div className="profile-header">
        <img src="" alt="" />
        <h1>{props.user.username}</h1>
      </div>
      <div className="profile-content">
        <p>Cohort: {props.user.cohort}</p>
        <p>{props.user.email}</p>
      </div>
    </ProfileDiv>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ProfileCard);
