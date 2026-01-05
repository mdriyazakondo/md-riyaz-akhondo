import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProject = data.find((item) => item.id === id);
        setProject(selectedProject);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[87vh] flex items-center justify-center text-xl">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-[87vh] max-w-6xl mx-auto p-6 space-y-8 text-gray-700 dark:text-white">
      {/* Main Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-xl shadow-lg h-[300px] md:h-[550px] object-cover"
      />
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text dark:from-cyan-300 dark:to-blue-400">
        {project.title}
      </h1>
      {/* Year + Tags */}
      <div className="flex flex-wrap gap-3 items-center">
        <span className="bg-cyan-500 text-white px-3 py-1 rounded-md text-sm">
          {project.year}
        </span>

        {project.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="text-sm px-3 py-1 border border-cyan-400 dark:border-cyan-300 rounded-md text-cyan-600 dark:text-cyan-300 font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>
      {/* Basic Info Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-300">
            Project Info
          </h3>

          <p className="text-sky-400/90">
            <span className="font-bold ">Category:</span> {project.category}
          </p>
          <p className="text-sky-400/90">
            <span className="font-bold ">Role:</span> {project.role}
          </p>
          <p className="text-sky-400/90">
            <span className="font-bold ">Duration:</span> {project.duration}
          </p>

          <div>
            <p className="font-bold mb-1 text-sky-400/90">Tools Used:</p>
            <div className="flex flex-wrap gap-2">
              {project.tools?.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm border border-cyan-400 dark:border-cyan-300 rounded-md text-cyan-600 dark:text-cyan-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-300 mb-2">
            Description
          </h3>
          <p className="text-sky-400/90 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
      {/* Tech Stack */}
      <div>
        <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-300 mb-2">
          Tech Stack:
        </h3>
        <div className="flex flex-wrap gap-3">
          {project.techStack?.map((tech, idx) => (
            <span
              key={idx}
              className="text-sm px-3 py-1 border border-cyan-400 dark:border-cyan-300 rounded-md text-cyan-600 dark:text-cyan-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Features */}
      {project.features && (
        <div>
          <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-300 mb-2">
            Features:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sky-400/90">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Highlights */}
      <div>
        <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-300 mb-2">
          Highlights:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-sky-400/90">
          {project.highlights?.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
      {/* Challenges */}
      {project.challenges && (
        <div>
          <h3 className="text-xl font-bold text-red-400 dark:text-red-300 mb-2">
            Challenges:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sky-400/90">
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Solutions */}
      {project.solutions && (
        <div>
          <h3 className="text-xl font-bold text-green-500 dark:text-green-300 mb-2">
            Solutions:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sky-400/90">
            {project.solutions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Screenshot Gallery
      {project.screenshots && (
        <div>
          <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-300 mb-3">
            Screenshots:
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {project.screenshots.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Project screenshot"
                className="rounded-lg shadow-md object-cover"
              />
            ))}
          </div>
        </div>
      )} */}
      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-5">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-md shadow-md transition"
        >
          Live Demo
        </a>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md shadow-md transition"
        >
          Source Code
        </a>

        <Link
          to="/project"
          className="px-5 py-2 border border-cyan-500 dark:border-cyan-300 text-cyan-600 dark:text-cyan-300 rounded-md hover:bg-cyan-500 hover:text-white transition"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
