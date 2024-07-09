import React from "react";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-card__img-container">
        <img
          src="https://via.placeholder.com/150"
          className="profile-card-img"
        />
      </div>
      <div className="profile-card__content-container">
        <h1>Mohammed Faais</h1>
        <h4>Front-end Developer</h4>
        <p>
          Passionate front-end developer with 3 years of experience. Hands-on
          skills in React and OutSystems UI.
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
}

export default ProfileCard;
