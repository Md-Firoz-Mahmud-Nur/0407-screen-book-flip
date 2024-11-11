import { useLocation } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useMemo } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

const Layout = () => {
  const bookRef = useRef(null);
  const location = useLocation();

  // Memoize the route-to-page map to avoid recreating it on each render
  const routeToPageMap = useMemo(
    () => ({
      "/": 0,
      "/about": 1,
      "/services": 2,
      "/contact": 3,
    }),
    []
  );

  useEffect(() => {
    const targetPage = routeToPageMap[location.pathname];

    if (
      bookRef.current &&
      bookRef.current.pageFlip &&
      targetPage !== undefined
    ) {
      const flipBookInstance = bookRef.current.pageFlip();

      if (flipBookInstance && typeof flipBookInstance.flip === "function") {
        flipBookInstance.flip(targetPage); // Flip directly to the target page
      } else {
        console.warn("flip method is not available on flipBookInstance");
      }
    }
  }, [location, routeToPageMap]);

  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        <HTMLFlipBook
          ref={bookRef}
          width={1920}
          minWidth={320}
          maxWidth={1920}
          height={1080}
          minHeight={1080}
          maxHeight={1080}
          maxShadowOpacity={0.5}
          className="book shadow-xl w-full"
          flippingTime={1000}
          useMouseEvents
          startPage={0}
          swipeDistance={50}
          renderOnlyPageLengthChange>
          {/* Static Pages for Routes */}
          <motion.div className="page text-3xl font-bold  flex justify-center items-center ">
            <Home></Home>
          </motion.div>
          <motion.div className="page text-3xl font-bold  flex justify-center items-center ">
            <About></About>
          </motion.div>
          <motion.div className="page text-3xl font-bold  flex justify-center items-center ">
            <Services></Services>
          </motion.div>
          <motion.div className="page text-3xl font-bold  flex justify-center items-center ">
            <h2 className="bg-lime-400 h-screen flex justify-center items-center">
              Welcome to Contact Page
            </h2>
          </motion.div>
        </HTMLFlipBook>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
