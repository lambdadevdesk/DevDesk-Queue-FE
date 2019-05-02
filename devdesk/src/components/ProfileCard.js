import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const ProfileCard = props => {
  const ProfileDiv = styled.div`
    color: black;
    margin: 2rem 0;
  `;

  console.log(props.user);
  return (
    <ProfileDiv className="profile-panel">
      {/* <div className="profile-header">
        <img src="" alt="" />
        <h1>{props.user.firstName}</h1>
      </div>
      <div className="profile-content">
        <p>{props.user.lastName}</p>
        <p>{props.user.email}</p>
      </div> */}
    </ProfileDiv>
  );
};

export default ProfileCard;
