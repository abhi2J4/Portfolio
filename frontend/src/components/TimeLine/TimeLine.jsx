import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >   23/07/2025
              {item.date.toString().split("T")[0]}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">{item.title} Tittle</Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;


// import React from "react";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import { Event } from "@mui/icons-material";
// import TimeLine from "./TimeLine.css";
// import Typography from "@mui/material/Typography";

// const TimeLineWithData = () => {
//   // ✅ Hardcoded timeline JSON data
//   const timelines = [
//     {
//       date: "2025-01-10",
//       title: "Internship at JSpark AI",
//       description: "Worked on frontend using React, Redux, and Tailwind CSS.",
//     },
//     {
//       date: "2025-03-01",
//       title: "Collaborative Project",
//       description:
//         "Built a real-time to-do board using MERN stack and WebSockets.",
//     },
//     {
//       date: "2025-05-15",
//       title: "Portfolio Launched",
//       description: "Created and deployed a responsive personal portfolio.",
//     },
//   ];

//   return (
//     <div className="background">
//       <Typography className="background" variant="h4" align="center" gutterBottom>
//         {/* My Timeline */}
//       </Typography>
//       <Timeline position="alternate">
//         {timelines.map((item, index) => (
//           <TimelineItem key={index}>
//             <TimelineOppositeContent
//               sx={{ m: "auto 0" }}
//               align="right"
//               variant="body2"
//               color="text.secondary"
//             >
//               {new Date(item.date).toLocaleDateString()}
//             </TimelineOppositeContent>

//             <TimelineSeparator>
//               <TimelineConnector />
//               <TimelineDot>
//                 <Event />
//               </TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>

//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography variant="h6" component="span">
//                 {item.title}
//               </Typography>
//               <Typography>{item.description}</Typography>
//             </TimelineContent>
//           </TimelineItem>
//         ))}
//       </Timeline>
//     </div>
//   );
// };

// export default TimeLineWithData;
