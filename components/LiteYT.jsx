"use client";

import "lite-youtube-embed";

// Default: the developer's "Discover life at Nikoo Homes" film, as embedded on
// the official Nikoo Homes 8 site.
export default function LiteYT({ videoId = "IdHHCDrRhds", title = "Discover life at Nikoo Homes" }) {
  return (
    <div className="w-full h-full">
      <lite-youtube
        videoid={videoId}
        playlabel={title}
        class="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      ></lite-youtube>
    </div>
  );
}
