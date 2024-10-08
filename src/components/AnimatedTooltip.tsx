"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Youtube",
    designation: "YouTube all Fav",
    image: "/images/youtube1.png",
    Link: "https://youtube.com/",
  },
  {
    id: 2,
    name: "Gmail",
    designation: "Google All Mails",
    image: "/images/gmail.png",
    Link: "https://mail.google.com/",
  },
  {
    id: 3,
    name: "Github",
    designation: "Github Easy Access",
    image: "/images/github2.jpg",
    Link: "https://github.com/",
  },
  {
    id: 4,
    name: "GoogleDrive",
    designation: "Google Your Drive Files ",
    image: "/images/googledrive.png",
    Link: "https://drive.google.com/",
  },
  {
    id: 5,
    name: "GoogleDocs",
    designation: "Write your Document",
    image: "/images/googlesheet.png",
    Link: "https://docs.google.com/",
  },
  {
    id: 6,
    name: "Google Meet",
    designation: "Google Meet For Meeting ",
    image: "/images/googlemeet.jpg",
    Link: "https://meet.google.com/",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
