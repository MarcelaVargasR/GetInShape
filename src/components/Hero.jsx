import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function HandleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", HandleMouseMove);

    return () => window.addEventListener("mousemove", HandleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className=" text-6xl text-center sm:text-4Sxl md:text-4xl lg:text-7xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
          <div className="flex flex-col">
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2 ">
              Shape
              <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-1 sm:mb-2 ml-4">
                Your Body
              </span>
            </span>
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">
              Trasform
              <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-1 sm:mb-2 ml-4">
                Your Life!
              </span>
            </span>
          </div>
          <p className="mx-10 text-lg sm:text-base lg:text-lg text-gray-400 max-w-2xl lg:mx-0 mb-6m sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 ">
            No extremes. No guilt. Just a community and tools designed to help
            you feel good in your body — one workout, one meal, one victory at a
            time.
          </p>
          <div className="mt-4 flex gap-4 justify-center">
            <button className="text-2xl bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
              Start Your Journey
            </button>
            <button className="text-2xl border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-00 font-semibold">
              Watch Intro Video
            </button>
          </div>
        </div>
        <img
          className="w-90 max-w-md md:max-w-xl lg:max-w-2xl rounded-2xl object-cover shadow-2xl"
          src="/public/getinshape-img.jpg"
          alt="woman"
        />
      </div>
    </section>
  );
}
