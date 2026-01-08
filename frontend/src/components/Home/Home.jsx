// import React, { useEffect } from "react";
// import "./Home.css";
// import * as THREE from "three";
// import moonImage from "../../Images/moon.jpg";
// import venusImage from "../../Images/venus.jpg";
// import spaceImage from "../../Images/space.jpg";
// import { Typography } from "@mui/material";
// import TimeLine from "../TimeLine/TimeLine";
// import {
//   SiCplusplus,
//   SiReact,
//   SiJavascript,
//   SiMongodb,
//   SiNodedotjs,
//   SiExpress,
//   SiCss3,
//   SiHtml5,
//   SiThreedotjs,
// } from "react-icons/si";
// import YoutubeCard from "../YoutubeCard/YoutubeCard";
// import { Link } from "react-router-dom";
// import { MouseOutlined } from "@mui/icons-material";

// const Home = ({ timelines, youtubes, skills }) => {
//   useEffect(() => {
//     const textureLoader = new THREE.TextureLoader();

//     const moonTexture = textureLoader.load(moonImage);
//     const venusTexture = textureLoader.load(venusImage);
//     const spaceTexture = textureLoader.load(spaceImage);

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(4, 4, 8);

//     const canvas = document.querySelector(".homeCanvas");
//     const renderer = new THREE.WebGLRenderer({ canvas });

//     const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
//     const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
//     const moon = new THREE.Mesh(moonGeometry, moonMaterial);

//     const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
//     const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
//     const venus = new THREE.Mesh(venusGeometry, venusMaterial);
//     venus.position.set(8, 5, 5);

//     const pointLight = new THREE.PointLight(0xffffff, 1);
//     const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

//     pointLight.position.set(8, 5, 5);
//     pointLight2.position.set(-8, -5, -5);

//     scene.add(moon);
//     scene.add(venus);
//     scene.add(pointLight);
//     scene.add(pointLight2);
//     scene.background = spaceTexture;

//     const constSpeed = 0.01;
//     window.addEventListener("mousemove", (e) => {
//       if (e.clientX <= window.innerWidth / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y += constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y += constSpeed;
//       }

//       if (e.clientX > window.innerWidth / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y -= constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y -= constSpeed;
//       }

//       if (e.clientY > window.innerHeight / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y += constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y += constSpeed;
//       }

//       if (e.clientY <= window.innerHeight / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y -= constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y -= constSpeed;
//       }
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       moon.rotation.y += 0.001;
//       venus.rotation.y += 0.001;
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       renderer.render(scene, camera);
//     };

//     animate();

//     return window.addEventListener("scroll", () => {
//       camera.rotation.z = window.scrollY * 0.001;
//       camera.rotation.y = window.scrollY * 0.003;

//       const skillsBox = document.getElementById("homeskillsBox");

//       if (window.scrollY > 1500) {
//         skillsBox.style.animationName = "homeskillsBoxAnimationOn";
//       } else {
//         skillsBox.style.animationName = "homeskillsBoxAnimationOff";
//       }
//     });
//   }, []);

//   return (
//     <div className="home">
//       <canvas className="homeCanvas"></canvas>

//       <div className="homeCanvasContainer">
//         <Typography variant="h1">
//           <p>A</p>
//           <p>B</p>
//           <p>H</p>
//           <p>I</p>
//           <p>S</p>
//           <p>H</p>
//           <p>E</p>
//           <p>K</p>
//         </Typography>

//         <div className="homeCanvasBox">
//           <Typography variant="h2">DESIGNER</Typography>
//           <Typography variant="h2">DEVELOPER</Typography>
//           <Typography variant="h2">TEACHER</Typography>
//           <Typography variant="h2">CONTENT CREATOR</Typography>
//         </div>

//         <Link to="/projects">VIEW WORK</Link>
//       </div>

//       <div className="homeScrollBtn">
//         <MouseOutlined />
//       </div>

//       <div className="homeContainer">
//         <Typography variant="h3">TIMELINE</Typography>
//         <TimeLine timelines={timelines} />
//       </div>

//       <div className="homeSkills">
//         <Typography variant="h3">SKILLS</Typography>

//         <div className="homeCubeSkills">
//           <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
//             <img src={skills.image1.url} alt="Face1" />
//           </div>

//           <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
//             <img src={skills.image2.url} alt="Face2" />
//           </div>

//           <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
//             <img src={skills.image3.url} alt="Face3" />
//           </div>

//           <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
//             <img src={skills.image4.url} alt="Face4" />
//           </div>

//           <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
//             <img src={skills.image5.url} alt="Face5" />
//           </div>

//           <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
//             <img src={skills.image6.url} alt="Face6" />
//           </div>
//         </div>

//         <div className="cubeShadow"></div>

//         <div className="homeskillsBox" id="homeskillsBox">
//           <SiCplusplus />
//           <SiHtml5 />
//           <SiCss3 />
//           <SiJavascript />
//           <SiMongodb />
//           <SiExpress />
//           <SiReact />
//           <SiNodedotjs />
//           <SiThreedotjs />
//         </div>
//       </div>

//       <div className="homeYoutube">
//         <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

//         <div className="homeYoutubeWrapper">
//           {youtubes.map((item) => (
//             <YoutubeCard
//               image={item.image.url}
//               title={item.title}
//               url={item.url}
//               id={item._id}
//               key={item._id}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import porfolio from "../../Images/portfolio.png";
import ScreenShortFood from "../../Images/Screenshot.png";
import Diabete_Prediction_AI from "../../Images/Diabetes_Prediction_AI.png";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
  SiPython,

} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines = [], youtubes = [], skills = {} }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1"  style={{
    backgroundColor: "rgb(233, 223, 255)",
    padding: "10px 20px",
    color: "black",
    textDecoration: "none",
    borderRadius: "5px",
  }} >
          <p>A</p>
          <p>B</p>
          <p>H</p>
          <p>I</p>
          <p>S</p>
          <p>H</p>
          <p>E</p>
          <p>K</p>
        </Typography>


        <div className="homeCanvasBox">
            <Typography variant="h2">FULL-STACK DEVELOPER</Typography>
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">QUICK LEARNER</Typography>
          
          <Typography variant="h2"></Typography>
        </div>

        <Link to="/projects"  style={{
    backgroundColor: "rgb(233, 223, 255)",
    padding: "10px 20px",
    color: "black",
    textDecoration: "none",
    borderRadius: "5px",
  }}>VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            {/* <img src={skills?.image1?.url || ""} alt="Face1" /> */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Face1" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src="https://education.oracle.com/file/general/p-80-java.png" alt="Face2" />
            {/* <img src={skills?.image2?.url || ""} alt="Face2" /> */}
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src="data:image/jpeg;base64,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" alt="Face3" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s" alt="Face4" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src="data:image/jpeg;base64,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" alt="Face5" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpoRPfHKGtG08sa6VPPGdtPntuivP51s92Q&s" alt="" />
            {/* <img src="data:image/png;base64,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" alt="Face6" /> */}
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiPython />
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
         
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3"> Project VIDEOS</Typography>

        <div className="homeYoutubeWrapper">
          {/* {youtubes.map((item) => (
            <YoutubeCard
              key={item._id}
              id={item._id}
              title={item.title}
              url={item.url}
              image={item?.image?.url || ""}
            />
          ))} */}

          {/* <YoutubeCard image="https://drive.google.com/file/d/1cpP-di2_H6MK5Vr3nDsQHUdakZ3Hh3o8/view" title="sample video"/> */}

          <YoutubeCard
  id="1"
  url="https://drive.google.com/file/d/1cpP-di2_H6MK5Vr3nDsQHUdakZ3Hh3o8/view"
  image="data:image/jpeg;base64,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"
  title="E-Commerce Website"
  isAdmin={true}
/>

<YoutubeCard
  id="2"
  url="https://drive.google.com/file/d/1i3bzzK5hgr7LB6edt-oUXF_h7PZeg3at/view"
  image={porfolio}
  title="Portfolio Website"
  isAdmin={true}
/>

<YoutubeCard
  id="3"
  url="https://drive.google.com/file/d/1LkIvkW2T2OUYDXYr0vF1HA41sEys6LA_/view"
  image={ScreenShortFood}
  title="Food Delivery Website"
  isAdmin={true}
/>

<YoutubeCard
  id="4"
  url="https://drive.google.com/file/d/1djdWtXaR2kUtFU6kbJvg08yvAoygxmbS/view"
  image={Diabete_Prediction_AI}
  title="Diabete Prediction AI"
  isAdmin={true}
/>


          
         
        </div>
      </div>
    </div>
  );
};

export default Home;
