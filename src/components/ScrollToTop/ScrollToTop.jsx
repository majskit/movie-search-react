import { useState, useEffect } from "react";
import s from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Показуємо кнопку коли користувач прокрутив вниз
  useEffect(() => {
    let timeoutId = null;

    const toggleVisibility = () => {
      // Throttling для кращої продуктивності
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, 100);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Функція прокрутки нагору
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={s.scrollToTop}
          title="Scroll to top"
        >
          <svg
            className={s.icon}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
