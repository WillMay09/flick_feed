import video1 from "/videos/video1.mp4.json";
import video2 from "/videos/video2.mp4.json";
import video3 from "/videos/video3.mp4.json";
import video4 from "/videos/video4.mp4.json";
import video5 from "/videos/video5.mp4.json";
import video6 from "/videos/video6.mp4.json";
import video7 from "/videos/video7.mp4.json";
import video8 from "/videos/video8.mp4.json";
import getStarted from "/videos/get-started.mp4.json";
import React from "react";
import Video from "next-video";

// Array of video JSON files representing your videos
const videos = [
  getStarted,
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
];

export default function VerticalVideoReel() {
  return (
    <div className="h-screen overflow-y-auto space-y-4 p-4">
      {videos.slice(0, 7).map((videoPath, index) => (
        <div key={index} className="flex justify-center">
          <Video src={videoPath} style={{ width: "33.33%", height: "auto" }} />
        </div>
      ))}
    </div>
  );
}
