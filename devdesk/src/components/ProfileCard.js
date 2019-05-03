import React from "react";

import styled from "styled-components";

const ProfileCard = props => {
  const ProfileDiv = styled.div`
    color: black;
    margin: 2rem 0;
    line-height: 1.5;
  `;

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <ProfileDiv className="profile-panel">
      <div className="profile-header">
        <img src="" alt="" />
        <h1>
          {user.username[0].toUpperCase()}
          {user.username.slice(1, user.username.length)}
        </h1>
      </div>
      <div className="profile-content">
        <p>
          {user.lastName}, {user.firstName}
        </p>
        <p>{user.email}</p>
        <p>{user.cohort}</p>
        <p>ID: {user.user_id}</p>
      </div>
    </ProfileDiv>
  );
};

export default ProfileCard;
