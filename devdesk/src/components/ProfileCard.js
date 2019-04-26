import React from "react";

import styled from "styled-components";

const ProfileCard = props => {
  const ProfileDiv = styled.div`
    color: black;
  `;

  return (
    <ProfileDiv className="profile-panel">
      <div className="profile-header">
        <img src="" alt="" />
        <h1>Full Name</h1>
      </div>
      <div className="profile-content">
        <p>Cohort</p>
        <p>Full.Name@example.com</p>
      </div>
    </ProfileDiv>
  );
};

export default ProfileCard;
