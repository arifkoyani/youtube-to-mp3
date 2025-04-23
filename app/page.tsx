"use client";
import { FaMusic, FaRocket, FaLock, FaQuestion } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white p-2 rounded-full">
              <FaMusic className="text-xl" />
            </div>
            <h1 className="text-xl font-bold">YT2MP3</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              YouTube to MP3 Converter
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Convert and download YouTube videos to high-quality MP3 files for
              free. No registration required.
            </p>
          </div>

          <div className="max-w-xl mx-auto flex justify-center">
            <button
              onClick={() => router.push("/youtube-to-mp3/")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Download MP3
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Converter
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdHighQuality className="text-red-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Quality Audio</h3>
              <p className="text-gray-600">
                Download MP3 files with the highest possible audio quality from
                YouTube videos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-red-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Conversion</h3>
              <p className="text-gray-600">
                Our servers process your request instantly for the fastest
                possible download experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLock className="text-red-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Safe & Secure</h3>
              <p className="text-gray-600">
                No registration required. We don't store your videos or personal
                information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-10">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4 md:mb-0 md:mr-6">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Copy the YouTube URL
                </h3>
                <p className="text-gray-600">
                  Find the video you want to convert on YouTube and copy the URL
                  from the address bar.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-10">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4 md:mb-0 md:mr-6">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Paste the URL in the converter
                </h3>
                <p className="text-gray-600">
                  Paste the copied YouTube URL into our converter input field
                  above.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4 md:mb-0 md:mr-6">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Download your MP3
                </h3>
                <p className="text-gray-600">
                  Click the "Download MP3" button and wait for the conversion to
                  complete. Your file will download automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="flex items-center text-xl font-semibold mb-2">
                <FaQuestion className="text-red-600 mr-2" />
                Is this service completely free?
              </h3>
              <p className="text-gray-600">
                Yes, our YouTube to MP3 converter is completely free to use with
                no hidden fees or limitations.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="flex items-center text-xl font-semibold mb-2">
                <FaQuestion className="text-red-600 mr-2" />
                What is the maximum length of video I can convert?
              </h3>
              <p className="text-gray-600">
                You can convert videos up to 2 hours in length. For longer
                videos, we recommend splitting them into parts.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="flex items-center text-xl font-semibold mb-2">
                <FaQuestion className="text-red-600 mr-2" />
                Is it legal to convert YouTube videos to MP3?
              </h3>
              <p className="text-gray-600">
                Converting videos for personal use is generally acceptable in
                most countries. However, distributing copyrighted content is
                illegal. Please respect copyright laws and only download content
                you have permission to use.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="flex items-center text-xl font-semibold mb-2">
                <FaQuestion className="text-red-600 mr-2" />
                What audio quality will my MP3 file have?
              </h3>
              <p className="text-gray-600">
                We convert videos to 320kbps MP3 files, which is the highest
                quality available for the MP3 format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="bg-red-600 text-white p-2 rounded-full">
                  <FaMusic className="text-xl" />
                </div>
                <h2 className="text-xl font-bold">YT2MP3</h2>
              </div>
              <p className="mt-2 text-gray-400">
                Convert YouTube videos to MP3 easily.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div>
                <h3 className="font-semibold mb-2">Links</h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#features"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Legal</h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Copyright
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} YT2MP3. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
