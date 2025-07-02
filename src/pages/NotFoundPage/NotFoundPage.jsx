import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.errorCode}>404</div>
        <h1 className={s.title}>Houston, We Have a Problem!</h1>
        <p className={s.subtitle}>
          The page you&apos;re looking for has drifted into space...
        </p>

        <div className={s.illustration}>
          <div className={s.planet}></div>
          <div className={s.astronaut}>🚀</div>
        </div>

        <div className={s.actions}>
          <Link to="/" className={s.primaryButton}>
            🏠 Return to Earth (Home)
          </Link>
          <Link to="/" className={s.secondaryButton}>
            🔍 Search Movies
          </Link>
        </div>

        <div className={s.countdown}>
          <p className={s.countdownText}>
            Auto-redirecting to home in{" "}
            <span className={s.timer}>{countdown}</span> seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
