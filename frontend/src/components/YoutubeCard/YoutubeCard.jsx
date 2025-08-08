import { Button, Typography } from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteYoutube, getUser } from "../../actions/user";
import "./YoutubeCard.css";


const YoutubeCard = ({
  url = "https://youtube.com/6packprogrammer",
  title = "Title Here",
  image,
  isAdmin = false,
  id,
}) => {
  // const dispatch = useDispatch();

  // const deleteHandler = async (id) => {
  //   await dispatch(deleteYoutube(id));
  //   dispatch(getUser());
  // };

  return (
    <div className="youtubeCard">
      <a href={url} target="blank">
        <img src={image} alt="Video" />
        <Typography>{title}</Typography>
      </a>
      {/* {isAdmin && (
        // <Button
        //   style={{
        //     margin: "auto",
        //     display: "block",
        //     color: "rgba(40,40,40,0.7)",
        //   }}
        //   onClick={() => deleteHandler(id)}
        // >
        //   <FaTrash />
        // </Button>
      )} */}
    </div>
  );
};

export default YoutubeCard;

// import { Button, Typography } from "@mui/material";
// import React from "react";
// import { FaTrash } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { deleteYoutube, getUser } from "../../actions/user";
// import "./YoutubeCard.css";

// const YoutubeCard = () => {
//   const dispatch = useDispatch();

//   // Hardcoded values
//   const url = "https://youtube.com/6packprogrammer";
//   const title = "6 Pack Programmer";
//   const image = "https://img.youtube.com/vi/5HgP9U0TZT8/hqdefault.jpg"; // You can replace this with any thumbnail
//   const isAdmin = true;
//   const id = "123456"; // Replace with real ID if needed

//   const deleteHandler = async () => {
//     await dispatch(deleteYoutube(id));
//     dispatch(getUser());
//   };

//   return (
//     <div className="youtubeCard">
//       <a href={url} target="_blank" rel="noopener noreferrer">
//         <img src={image} alt="Video Thumbnail" />
//         <Typography>{title}</Typography>
//       </a>
//       {isAdmin && (
//         <Button
//           style={{
//             margin: "auto",
//             display: "block",
//             color: "rgba(40,40,40,0.7)",
//           }}
//           onClick={deleteHandler}
//         >
//           <FaTrash />
//         </Button>
//       )}
//     </div>
//   );
// };

// export default YoutubeCard;
