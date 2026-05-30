    // import express from "express";
    // import cors from 'cors';

    // import cookieParser from "cookie-parser";
    // import path from "path";
    // export const app = express();
    

    // app.use(express.json({ limit: "50mb" }));
    // app.use(express.urlencoded({ extended: true, limit: "50mb" }));
    // app.use(cookieParser());

    // import { userRouter } from "./routes/User.js";
    // app.use("/api/v1", userRouter);
    // app.use("/api/v1",userRouter);


    // app.use(cors({
      
    //   origin: [
    //     "http://localhost:3000",
    //     "https://portfolio-1frontend.onrender.com"
    //   ],
    //   credentials: true
    // }));

    // // app.use(express.static(path.resolve("./frontend/build")));

    // // app.get("*", (req, res) => {
    // //   res.sendFile(path.resolve("./frontend/build/index.html"));
    // // });

// new 
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

// ✅ CORS must be FIRST, before routes
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://portfolio-1frontend.onrender.com"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);  // ✅ removed duplicate line