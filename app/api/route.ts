import { NextResponse } from "next/server";
const https = require("https");

function getYouTubeID(url: string): string | null {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    const videoId = getYouTubeID(url);
    if (!videoId) {
      return NextResponse.json(
        { error: "Invalid YouTube URL" },
        { status: 400 }
      );
    }

    const options = {
      method: "GET",
      hostname: "youtube-mp36.p.rapidapi.com",
      port: null,
      path: `/dl?id=${videoId}`,
      headers: {
        "x-rapidapi-key": process.env.YOUTUBE_API_KEY,
        "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
      },
    };

    return new Promise((resolve) => {
      const req = https.request(options, (res: any) => {
        if (res.statusCode !== 200) {
          resolve(
            NextResponse.json(
              { error: "Failed to fetch from API" },
              { status: res.statusCode }
            )
          );
          return;
        }

        resolve(
          new Response(res, {
            headers: {
              "Content-Type": res.headers["content-type"] || "audio/mpeg",
              "Content-Disposition": `attachment; filename="download.mp3"`,
            },
          })
        );
      });

      req.on("error", (error: any) => {
        console.error("API request error:", error);
        resolve(
          NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
        );
      });

      req.end();
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
