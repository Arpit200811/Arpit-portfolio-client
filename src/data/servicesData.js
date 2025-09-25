import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { SiAndroid, SiReact, SiFirebase, SiNodeDotJs, SiMongodb, SiTensorflow, SiIos, SiTypescript, SiNextDotJs } from "react-icons/si";
import { FaServer, FaRobot, FaCodeBranch } from "react-icons/fa";

export const servicesData = [
  { id: 1, title: "Full Stack Web Development", icon: <BsCodeSlash /> },
  { id: 2, title: "Android App Development", icon: <SiAndroid /> },
  { id: 3, title: "Frontend Development (React / React Native)", icon: <SiReact /> },
  { id: 4, title: "Backend Development (Node.js / Express)", icon: <SiNodeDotJs /> },
  { id: 5, title: "Database Integration (MongoDB / Firebase / PostgreSQL)", icon: <SiMongodb /> },
  { id: 6, title: "API Development & Integration (REST / GraphQL)", icon: <FaCodeBranch /> },
  { id: 7, title: "Real-Time Features (Socket.IO)", icon: <BsClipboardData /> },
  { id: 8, title: "Server & Cloud Management (AWS / Azure / GCP)", icon: <FaServer /> },
  { id: 9, title: "AI & Machine Learning Integration", icon: <SiTensorflow /> },
  { id: 10, title: "Computer Vision & OCR", icon: <FaRobot /> },
  { id: 11, title: "Automation & Intelligent Systems", icon: <FaRobot /> },
  { id: 12, title: "iOS App Development", icon: <SiIos /> },
  { id: 13, title: "TypeORM & Database Management", icon: <SiTypescript /> },
  { id: 14, title: "Next.js Development", icon: <SiNextDotJs /> }
];
