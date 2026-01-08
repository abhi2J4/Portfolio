// import { Button, Typography } from "@mui/material";
// import React from "react";
// import { FaTrash } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { deleteYoutube, getUser } from "../../actions/user";
// import "./YoutubeCard.css";


// const YoutubeCard = ({
//   url = "https://youtube.com/6packprogrammer",
//   title = "Title Here",
//   image,
//   isAdmin = false,
//   id,
// }) => {
//   const dispatch = useDispatch();

//   const deleteHandler = async (id) => {
//     await dispatch(deleteYoutube(id));
//     dispatch(getUser());
//   };

//   return (
//     <div className="youtubeCard">
//       <a href={url} target="blank">
//         <img src={image} alt="Video" />
//         <Typography>{title}</Typography>
//       </a>
//       {isAdmin && (
//         <Button
//           style={{
//             margin: "auto",
//             display: "block",
//             color: "rgba(40,40,40,0.7)",
//           }}
//           onClick={() => deleteHandler(id)}
//         >
//           <FaTrash />
//         </Button>
//       )}
//     </div>
//   );
// };

// export default YoutubeCard;

// import { Button, Typography } from "@mui/material";
// import React from "react";
// import { FaTrash } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { deleteYoutube, getUser } from "../../actions/user";
// import "./YoutubeCard.css";

// const YoutubeCard = () => {
//   const dispatch = useDispatch();

//   // Hardcoded values
//   const url = "https://drive.google.com/file/d/1cpP-di2_H6MK5Vr3nDsQHUdakZ3Hh3o8/view";
//   const title = "E-Commerce Website ";
//   const image = "data:image/jpeg;base64,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"; // You can replace this with any thumbnail
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

import { Button, Typography } from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteYoutube, getUser } from "../../actions/user";
import "./YoutubeCard.css";

const YoutubeCard = ({ url, title, image, id, isAdmin }) => {
  const dispatch = useDispatch();

  const deleteHandler = async () => {
    await dispatch(deleteYoutube(id));
    dispatch(getUser());
  };

  return (
    <div className="youtubeCard">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img  src={image} alt="Video Thumbnail" />
        <Typography>{title}</Typography>
      </a>

      {isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
          onClick={deleteHandler}
        >
          <FaTrash />
        </Button>
      )}
    </div>
  );
};

export default YoutubeCard;

