import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "./DarkModeToggle";
import HeroEffect from "./HeroEffect";

export default function Hero() {
  return (
    <div className="h-screen w-full relative flex min-h-96 flex-col items-center justify-center">
      <HeroEffect />
      <div className="text-center z-10 px-4 py-10">
        <DarkModeToggle className="absolute top-4 right-4" />
        <h1 className="font-black text-3xl sm:text-4xl leading-none">
          TONY HAUNSCHMIDT
        </h1>
        <p className="text-primary dark:text-dprimary font-medium mt-1 sm:text-lg tracking-widest sm:tracking-[0.6rem] leading-none">
          SOFTWARE ENGINEER
        </p>
        <div className="flex justify-center mt-6 space-x-8">
          <a
            href="https://github.com/tonyhaunschmidt"
            target="_blank"
            className="hover:text-primary hover:scale-105 ease-in-out duration-300 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} className="text-5xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/tony-haunschmidt/"
            target="_blank"
            className="hover:text-primary hover:scale-105 ease-in-out duration-300 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
          </a>
          <a
            href="mailto:tonyhaunschmidt@gmail.com"
            className="hover:text-primary hover:scale-105 ease-in-out duration-300 transition-all"
          >
            <FontAwesomeIcon icon={faSquareEnvelope} className="text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
