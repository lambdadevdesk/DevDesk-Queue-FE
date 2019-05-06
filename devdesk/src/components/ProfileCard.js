import React from "react";

import styled from "styled-components";

const ProfileCard = props => {
  const ProfileDiv = styled.div`
    color: black;
    margin: 2rem 0;
    line-height: 1.5;
  `;

  // const user = JSON.parse(localStorage.getItem("user"));

  return (
    <ProfileDiv className="profile-panel">
      <div className="profile-header">
        <img src="" alt="" />
        <h1>
          {props.user.username[0].toUpperCase()}
          {props.user.username.slice(1, props.user.username.length)}
        </h1>
      </div>
      <div className="profile-content">
        <p>
          {props.user.lastName}, {props.user.firstName}
        </p>
        <p>{props.user.email}</p>
        <p>{props.user.cohort}</p>
        <p>ID: {props.user.user_id}</p>
      </div>
    </ProfileDiv>
  );
};

export default ProfileCard;
