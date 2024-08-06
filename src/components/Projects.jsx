import { Link } from "react-router-dom";
import { projects } from "../utilities/data";

export default function Projects() {
    return <div className="padding-inline my-10 rounded-lg" id="projects">
        <h2 className="text-center animate-translateXFromRight">I like to Build Amazing stuff</h2>
        <p className="font-semibold lg:text-[18px] text-[#808080] text-center italic">&quot;Building projects is my favourite time</p>
        <div className="mt-20 flex flex-col lg:flex-row items-center justify-evenly gap-4">
            {projects.map(project => <div
                key={project.id}
                className={`max-w-[600px] bg-[#EEEEEE] ${project.id % 2 !== 0 ? "animate-translateXFromLeft": "animate-translateXFromRight"}`}
            >
                <img src={project.image} className="w-full rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-[24px] font-semibold">{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.map(stack => <span key={stack} className="text-white px-2 py-1 rounded-full bg-[var(--color-5)]">{stack}</span>)}
                    </div>
                    <div className="mt-4 pb-2">
                        <a
                            target="_blank"
                            href={project.deployedLink}
                            className="text-[18px] px-4 py-2 bg-green-400 rounded-md"
                        >Live</a>
                        {project.githubLink && <a
                            target="_blank"
                            href={project.githubLink}
                            className="text-[18px] px-4 py-2 bg-blue-400 rounded-md ml-4"
                        >Github</a>}
                    </div>
                </div>
            </div>)}
        </div>
    </div>
}