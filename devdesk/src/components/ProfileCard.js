import React from "react";

import styled from "styled-components";

const ProfileCard = props => {
  const ProfileDiv = styled.div`
    color: black;
    margin: 2rem 0;
  `;

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <ProfileDiv className="profile-panel">
      <div className="profile-header">
        <img src="" alt="" />
        <h1>{user.firstName}</h1>
      </div>
      <div className="profile-content">
        <p>{user.lastName}</p>
        <p>{user.email}</p>
      </div>
    </ProfileDiv>
  );
};

export default ProfileCard;
