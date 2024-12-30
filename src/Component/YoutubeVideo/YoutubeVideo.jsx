import React from "react";

const YoutubeVideo = () => {
  return (
    <div className=" bg-gray-50 mt-8 flex flex-row-reverse items-center justify-between p-4">
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          See Our Video & Subscribe
        </h1>
      </div>

      {/* Video Section */}
      <div className="w-1/2 max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="YouTube Video"
          src="https://www.youtube.com/embed/pqZuSz8_2DM"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeVideo;
