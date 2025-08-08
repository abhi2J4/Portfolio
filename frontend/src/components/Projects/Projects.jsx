import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,  
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            id={item._id}
            key={item._id}
            url={item.url}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            technologies={item.techStack}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;

// // new code

// import { Button, Typography } from "@mui/material";
// import React from "react";
// import "./Projects.css";
// import { AiOutlineProject } from "react-icons/ai";
// import { Delete } from "@mui/icons-material";
// import { FaRegSmileWink } from "react-icons/fa";
// import { useDispatch } from "react-redux";

// // ProjectCard component
// export const ProjectCard = ({
//   url,
//   projectImage,
//   projectTitle,
//   description,
//   technologies,
//   isAdmin = false,
//   id,
// }) => {
//   const dispatch = useDispatch();

//   const deleteHandler = async (id) => {
//     // Uncomment the next two lines if using Redux actions
//     // await dispatch(deleteProject(id));
//     // dispatch(getUser());
//     alert(`Delete clicked for project ID: ${id}`);
//   };

//   return (
//     <>
//       <a href={url} className="projectCard" target="_blank" rel="noreferrer">
//         <div>
//           <img src={projectImage} alt="Project" />
//           <Typography variant="h5">{projectTitle}</Typography>
//         </div>
//         <div>
//           <Typography variant="h4">About Project</Typography>
//           <Typography>{description}</Typography>
//           <Typography variant="h6">Tech Stack: {technologies}</Typography>
//         </div>
//       </a>

//       {isAdmin && (
//         <Button
//           style={{ color: "rgba(40,40,40,0.7)" }}
//           onClick={() => deleteHandler(id)}
//         >
//           <Delete />
//         </Button>
//       )}
//     </>
//   );
// };

// // Projects component with hardcoded data
// const Projects = () => {
//   const projects = [
//     {
//       _id: "1",
//       url: "https://github.com/yourusername/weather-app",
//       image: {
//         url: "https://webdamn.com/wp-content/uploads/2019/11/build-weather-website-with-php-min.png",
//       },
//       title: "Weather App",
//       description: "A real-time weather forecast app using OpenWeatherMap API.",
//       techStack: "React, CSS, API",
//     },
//     {
//       _id: "2",
//       url: "https://github.com/yourusername/portfolio-site",
//       image: {
//         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaxbztplNLgjnghHa56jbn4_Y6aApvbug0R7D0ZQnTmCK9AEQ0mozREfocToidmz2Vl4&usqp=CAU",
//       },
//       title: "Portfolio Website",
//       description: "Responsive portfolio to showcase personal projects.",
//       techStack: "React, Tailwind CSS, JavaScript",
//     },
//     {
//       _id: "3",
//       url: "https://github.com/yourusername/todo-app",
//       image: {
//         url: "https://freefrontend.com/img/old/bootstrap-4-todo-task-list-with-badges_hu336b23c7a33a94c60fa7a4a7cb56ae99_11379_1180x0_resize_q75_h2_lanczos_3.webp",
//       },
//       title: "To-Do List",
//       description: "A simple to-do app with CRUD features.",
//       techStack: "React, Redux, CSS",
//     },
//   ];

//   return (
//     <div className="projects">
//       <Typography variant="h3">
//         Projects <AiOutlineProject />
//       </Typography>

//       <div className="projectsWrapper">
//         {projects.map((item) => (
//           <ProjectCard
//             id={item._id}
//             key={item._id}
//             url={item.url}
//             projectImage={item.image.url}
//             projectTitle={item.title}
//             description={item.description}
//             technologies={item.techStack}
//             isAdmin={false} // change to true to show delete buttons
//           />
//         ))}
//       </div>

//       <Typography variant="h3" className="buttonP" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
//         All The Projects Shown Above Are Made By Me <FaRegSmileWink />
//       </Typography>
//     </div>  
//   );
// };

// export default Projects;
   