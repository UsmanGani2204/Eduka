import React, { useEffect } from "react";
import "./Gallery.css";
import Navbar from "./InsideHomePage/Navbar";

function Gallery() {
  return (
    <>
      <Navbar />
      <section className="gallerysection">
        <h1>Red Day</h1>
        <div>
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.46 PM.jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.47 PM (1).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.47 PM (2).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.47 PM.jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.48 PM (1).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.48 PM (2).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.48 PM (3).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.48 PM.jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.49 PM (1).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.49 PM (2).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.49 PM.jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.50 PM (1).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.50 PM (2).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.50 PM.jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.51 PM (1).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.51 PM (2).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.51 PM (3).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.51 PM.jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.52 PM (1).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.52 PM (2).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.52 PM.jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.53 PM (1).jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.53 PM.jpeg" />
          <img src="images/red_day/WhatsApp Image 2024-10-27 at 1.13.54 PM.jpeg" />
        </div>
        <h1>Blue Day</h1>
        <div>
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.21 PM.jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.22 PM (1).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.22 PM (2).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.22 PM.jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.23 PM (1).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.23 PM (2).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.23 PM.jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.24 PM (1).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.24 PM (2).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.24 PM.jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.39 PM (1).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.39 PM.jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.40 PM (1).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.40 PM (2).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.40 PM (3).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.40 PM.jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.41 PM (1).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.40 PM (2).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.40 PM (3).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.40 PM.jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.41 PM (1).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.41 PM (2).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.41 PM.jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.42 PM (1).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.42 PM (2).jpeg " />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.14.42 PM.jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 1.16.00 PM.jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 4.46.14 PM (1).jpeg" />
          <img src="images/blue_day/WhatsApp Image 2024-10-27 at 4.46.14 PM.jpeg" />
        </div>
        <h1>Green Day</h1>
        <div>
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.42 PM.jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.43 PM (1).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.43 PM.jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.44 PM (1).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.44 PM (2).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.44 PM.jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.45 PM (1).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.45 PM (2).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.45 PM (3).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.45 PM (4).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.45 PM (5).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.45 PM.jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.46 PM (1).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.46 PM (2).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.46 PM (3).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.46 PM (4).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.46 PM (5).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.46 PM.jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.47 PM (1).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.47 PM (2).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.47 PM (3).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.47 PM (4).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.47 PM.jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.48 PM (1).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.48 PM (2).jpeg" />
          <img src="images/green_day/WhatsApp Image 2024-10-27 at 1.14.48 PM.jpeg" />
        </div>
        <h1>Yellow Day</h1>
        <div>
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.44 PM (1).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.44 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.45 PM (1).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.45 PM (2).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.45 PM (3).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.45 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.46 PM (1).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.46 PM (2).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.46 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.47 PM (1).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.47 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.48 PM (1).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.48 PM (2).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.48 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.49 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.50 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.53 PM (1).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.53 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.54 PM (1).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.54 PM (2).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.54 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.55 PM (1).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.55 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.56 PM (1).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.56 PM (2).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.56 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.57 PM (1).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.57 PM (2).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.57 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.58 PM (1).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.58 PM (2).jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.58 PM.jpeg" />
          <img src="images/yellow_day/WhatsApp Image 2024-10-27 at 1.15.59 PM.jpeg" />
        </div>
        <h1>Independence Day Celebration</h1>
        <div>
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.15 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.15 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.15 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.16 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.16 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.16 PM (3).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.16 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.17 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.17 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.17 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.18 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.18 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.18 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.19 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.19 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.19 PM (3).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.19 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.20 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.20 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.20 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.21 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.21 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.21 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.22 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.22 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.22 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.23 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.23 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.23 PM (3).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.23 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.24 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.24 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.24 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.25 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.25 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.25 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.26 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.26 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.26 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.27 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.27 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.27 PM (3).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.27 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.28 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.28 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.28 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.29 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.29 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.29 PM.jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.30 PM (1).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.30 PM (2).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.30 PM (3).jpeg" />
          <img src="images/independence_day_celebration/WhatsApp Image 2024-10-27 at 4.46.30 PM.jpeg" />
        </div>
        <h1>Videos</h1>
        <div>
          <video
            src="videos/WhatsApp Video 2024-10-27 at 1.14.39 PM.mp4"
            controls
          />
          <video
            src="videos/WhatsApp Video 2024-10-27 at 1.15.50 PM (1).mp4"
            controls
          />
          <video
            src="videos/WhatsApp Video 2024-10-27 at 1.15.50 PM.mp4"
            controls
          />
          <video
            src="videos/WhatsApp Video 2024-10-27 at 1.15.51 PM.mp4"
            controls
          />
          <video
            src="videos/WhatsApp Video 2024-10-27 at 1.15.52 PM (1).mp4"
            controls
          />
          <video
            src="videos/WhatsApp Video 2024-10-27 at 1.15.52 PM.mp4"
            controls
          />
          <video
            src="videos/WhatsApp Video 2024-10-27 at 1.15.53 PM.mp4"
            controls
          />
          <video
            src="videos/WhatsApp Video 2024-10-27 at 1.15.59 PM (1).mp4"
            controls
          />
          <video
            src="videos/WhatsApp Video 2024-10-27 at 1.15.59 PM.mp4"
            controls
          />
          <video
            src="videos/WhatsApp Video 2024-10-27 at 4.46.31 PM.mp4"
            controls
          />
        </div>
      </section>
    </>
  );
}

export default Gallery;
