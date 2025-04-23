"use client";

import type React from "react";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";

export default function YoutubeDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset states
    setError("");

    // Basic URL validation
    if (!url.includes("youtube.com/") && !url.includes("youtu.be/")) {
      setError("Please enter a valid YouTube URL");
      return;
    }

    setIsLoading(true);

    try {
      // Here you would implement the actual download functionality
      // This is a placeholder for demonstration
      console.log("Download requested for:", url);

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real implementation, you would:
      // 1. Send the URL to your backend
      // 2. Process the video and convert to MP3
      // 3. Return a download link or trigger download

      alert("In a real implementation, the MP3 would download now.");
    } catch (err) {
      setError("An error occurred during conversion. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Convert YouTube to MP3
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube URL here..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            disabled={isLoading}
            required
          />
        </div>

        {error && <div className="text-red-500 text-sm py-1">{error}</div>}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <>
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
              <span>Converting...</span>
            </>
          ) : (
            <>
              <FaDownload className="text-lg" />
              <span>Download MP3</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>
          By using our service you accept our{" "}
          <a href="#" className="text-red-600 hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
}
