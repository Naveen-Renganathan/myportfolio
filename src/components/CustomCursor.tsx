import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }

      if (followerRef.current) {
        followerRef.current.style.left = e.clientX + "px";
        followerRef.current.style.top = e.clientY + "px";
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
      if (followerRef.current) followerRef.current.style.opacity = "0.5";
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
      if (followerRef.current) followerRef.current.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none w-2.5 h-2.5 rounded-full bg-green-400"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.2s ease",
          zIndex: 9999,
          boxShadow: "0 0 8px rgba(74, 222, 128, 0.8)",
        }}
      />
      {/* Follower circle */}
      <div
        ref={followerRef}
        className="fixed pointer-events-none w-6 h-6 rounded-full border-2 border-green-300"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.2s ease",
          zIndex: 9998,
          boxShadow: "0 0 12px rgba(134, 239, 172, 0.5) inset",
        }}
      />
    </>
  );
};

export default CustomCursor;
