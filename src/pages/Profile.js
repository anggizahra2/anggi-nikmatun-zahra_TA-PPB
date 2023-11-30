import React from "react";

const ProfilePage = () => {
  const instagramUsername = "anggizahra__"; // Ganti dengan username Instagram yang sesuai

  const redirectToInstagram = () => {
    window.location.href = `https://www.instagram.com/anggizahra__`;
  };

  const redirectToGmail = () => {
    window.location.href = "mailto:anggizahra354@gmail.com";
  };

  return (
    <div style={styles.profilePage}>
      <div style={styles.centeredContent}>
      <h1 style={styles.pageTitle}>Anggi Nikmatun Zahra
      <p style={styles.additionalText}>21120120120008</p>
      TA Prak PPB</h1>
        <div style={styles.profileBox}>
          <div style={styles.profileLogo} onClick={redirectToInstagram}>
            <img
              style={styles.instagramImage}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
              alt="Instagram Logo"
            />
            <span>{instagramUsername}</span>
          </div>

          <div style={styles.profileLogo} onClick={redirectToGmail}>
          <img
              style={{ ...styles.gmailImage, marginLeft: "auto", marginRight: "auto" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
              alt="Gmail Logo"
            />
            <span>anggizahra354@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  profilePage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  centeredContent: {
    textAlign: "center",
  },
  pageTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  
  profileBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileLogo: {
    cursor: "pointer",
    margin: "20px",
    textAlign: "center",
  },

  instagramImage : {
    width: "2cm",
    height: "3cm",
    borderRadius: "40%",
  },
  gmailImage : {
    width: "2cm",
    height: "3cm",
    borderRadius: "40%",
  },
    
  span: {
    display: "block",
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default ProfilePage;