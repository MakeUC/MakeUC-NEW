import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const EducationImage = "/images/education.png";
const GreenTechImage = "/images/green-tech.png";
const SecurityImage = "/images/security.png";
const SocialIssuesImage = "/images/social-issues.png";

export default function App() {
  return (
    <div
      id="track"
      className="mt-24 flex flex-col justify-center items-center w-full h-screen text-center"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">TRACK</h1>

      <div className="grid  md:grid-cols-2 place-items-center gap-y-5 gap-x-5 overflow-hidden">
        <div className="card bg-base-100 image-full w-96  h-96 shadow-xl">
          <figure>
            <img src={GreenTechImage} alt="Green Tech Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Green Tech</h2>
            <p>
              Green technology projects can be eco-friendly or implement an idea
              to help reduce damage to the environment.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Lean More</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 image-full w-96 h-96 shadow-xl">
          <figure>
            <img src={EducationImage} alt="Education Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Education</h2>
            <p>
              Education projects aim to improve the accessibility of information
              or upgrade students' learning experiences.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 image-full w-96 h-96 shadow-xl">
          <figure>
            <img src={SocialIssuesImage} alt="Social Issue Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Social Issues</h2>
            <p>
              Social issue projects use technology to raise awareness and find
              solutions to issues such as discrimination.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 image-full w-96 h-96 shadow-xl">
          <figure>
            <img src={SecurityImage} alt="Security Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Security</h2>
            <p>
              Social issue projects use technology to raise awareness and find
              solutions to issues such as discrimination.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
