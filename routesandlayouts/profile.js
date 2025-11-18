import React from "react";

function Profile() {
  const profile = {
    name: "John Doe",
    bio: "Frontend developer passionate about React, UI design, and clean code.",
    avatar: "https://via.placeholder.com/150",
    location: "San Francisco, CA",
  };

  return React.createElement(
    "div",
    { style: styles.container },
    React.createElement("img", {
      src: profile.avatar,
      alt: "Profile",
      style: styles.avatar,
    }),
    React.createElement("h2", { style: styles.name }, profile.name),
    React.createElement("p", { style: styles.bio }, profile.bio),
    React.createElement("p", { style: styles.location }, "📍 " + profile.location)
  );
}

const styles = {
  container: {
    width: "260px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  name: {
    margin: 0,
  },
  bio: {
    fontSize: "14px",
    color: "#555",
  },
  location: {
    fontSize: "14px",
    color: "#777",
  },
};

export default Profile;
