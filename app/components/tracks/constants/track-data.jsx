import EducationImage from "../assets/education.png";
import GreenTechImage from "../assets/green-tech.png";
import SecurityImage from "../assets/security.png";
import SocialIssuesImage from "../assets/social-issues.png";

import { TrackCardProps } from "../components/track-card";

export const TRACKS = [
  {
    name: "Green Tech",
    description:
      "Green technology projects can be eco-friendly or implement an idea to help reduce damage to the environment.",
    image: <img src={GreenTechImage} alt="Green Tech" />,
  },
  {
    name: "Education",
    description:
      "Education projects aim to improve the accessibility of information or upgrade students' learning experiences.",
    image: <img src={EducationImage} alt="Education" />,
  },
  {
    name: "Social Issues",
    description:
      "Social issue projects use technology to raise awareness and find solutions to issues such as discrimination.",
    image: <img src={SocialIssuesImage} alt="Social Issues" />,
  },
  {
    name: "Security",
    description:
      "Security projects demonstrate security concerns/pitfalls, implement solutions to existing weaknesses, and more.",
    image: <img src={SecurityImage} alt="Security" />,
  },
];
