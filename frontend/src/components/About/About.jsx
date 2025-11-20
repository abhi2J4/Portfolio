// import { Typography } from "@mui/material";
// import React from "react";
// import "./About.css";

// const About = ({ about }) => {
//   return (
//     <div className="about">
//       <div className="aboutContainer">
//         <Typography>{about.quote}</Typography>
//       </div>
//       <div className="aboutContainer2">
//         <div>
//           <img src={about.avatar.url} alt="Abhi" className="aboutAvatar" />

//           <Typography
//             variant="h4"
//             style={{ margin: "1vmax 0", color: "black" }}
//           >
//             {about.name}
//           </Typography>

//           <Typography>{about.title}</Typography>

//           <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
//             {about.subtitle}
//           </Typography>
//         </div>

//         <div>
//           <Typography
//             style={{
//               wordSpacing: "5px",
//               lineHeight: "50px",
//               letterSpacing: "5px",
//               textAlign: "right",
//             }}
//           >
//             {about.description}
//           </Typography>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
import aboutImage from "../../Images/WhatsApp Image 2025-11-20 at 10.24.03 PM.jpeg";


const About = ({ about }) => {
  // Optional loading state if about data is not yet available
  if (!about) {
    return <p>Loading...</p>;
  }

  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about?.quote || "Welcome to my portfolio!"}</Typography>
      </div>

      <div className="aboutContainer2">
        <div>
          <img
            src={aboutImage}
            // src={about?.avatar?.url || "/defaultAvatar.png"}
           
            alt={about?.name || "User"}
            className="aboutAvatar"
          />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {/* {about?.name || "Your Name"} */}
            {about?.name || "Abhishek Yadav"}
          </Typography>

          <Typography>{about?.title || "Full-Stack Developer"}</Typography>

          <Typography
            style={{ margin: "1vmax 0", textAlign: "center" }}
          >
            {about?.subtitle || "Let's build amazing things together."}
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {/* {about?.description || "Describe yourself or your goals here."} */}
            {about?.description || "I’m Abhishek Yadav, a passionate B.Tech CSE student and former Full Stack Developer Intern at JSpark AI, Noida. My goal is to become a skilled full-stack developer and build impactful, user-friendly web applications using technologies like React, Node.js, MongoDB, and more."}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
