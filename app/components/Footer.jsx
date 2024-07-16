
import { FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to <span className="text-purple-500">HACK</span> to the next level?
        </h1>
        <a href="mailto:grovernt@mail.uc.edu">
          <button className="p-[3px] relative mt-5">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              REGISTER NOW
            </div>
          </button>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 MAKE UC
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <div className=" mt-5 justify-end md:mr-4 lg:mr-12 md:flex items-center">
            <ul className="flex space-x-8">
              <a href="https://x.com/NAshrapov" target="_blank">
                <li>
                  <FaSquareXTwitter
                    className="text-[#FFFFFFCC] hover:text-white transform duration-500"
                    size={18}
                  />
                </li>
              </a>
              <a href="https://www.linkedin.com/in/nekruzash/" target="_blank">
                <li>
                  <FaLinkedin
                    className="text-[#FFFFFFCC] hover:text-white transform duration-500"
                    size={18}
                  />
                </li>
              </a>
              <a href="https://github.com/NekruzAsh" target="_blank">
                <li>
                  <FaGithub
                    className="text-[#FFFFFFCC] hover:text-white transform duration-500"
                    size={18}
                  />
                </li>
              </a>

              <a
                href="https://devpost.com/NekruzAsh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                target="_blank"
              >
                <li>
                  <SiDevpost
                    className="text-[#FFFFFFCC] hover:text-white transform duration-500"
                    size={18}
                  />
                </li>
              </a>
              <a href="mailto:nekruzashrapov16@gmail.com" target="_blank">
                <li>
                  <MdOutlineEmail
                    className="text-[#FFFFFFCC] hover:text-white transform duration-500"
                    size={18}
                  />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



