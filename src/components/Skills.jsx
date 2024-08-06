import { useState } from "react";
import { skills } from "../utilities/data";

export default function Skills() {
    const [activeTab, setActiveTab] = useState("");
    const [selectedSkills, setSelectedSkills] = useState(skills)

    const filterSkills = (val) => {
        setActiveTab(val)
        setSelectedSkills(prev => val !== "" ? skills.filter(skill => skill.type === val) : skills)
    };

    return <div className="my-20">
        <h2 className="text-center">I am good with</h2>
        <p className="font-semibold lg:text-[18px] text-[#808080] text-center italic">I keep my self levelling up!</p>
        <div className="font-bold text-[20px] mt-10 flex items-center justify-center gap-4">
            <button
                onClick={() => filterSkills("")}
                className={`p-2 rounded-md ${activeTab === "" && "text-white bg-black"}`}>All</button>
            <button
                onClick={() => filterSkills("frontend")}
                className={`p-2 rounded-md ${activeTab === "frontend" && "text-white bg-black"}`}>Frontend</button>
            <button
                onClick={() => filterSkills("backend")}
                className={`p-2 rounded-md ${activeTab === "backend" && "text-white bg-black"}`}>Backend</button>
            <button
                onClick={() => filterSkills("soft-skills")}
                className={`p-2 rounded-md ${activeTab === "soft-skills" && "text-white bg-black"}`}>Soft Skills</button>
        </div>
        <div className="min-h-32 max-w-[800px] mx-auto mt-4 flex flex-wrap items-center justify-center gap-x-4">
            {selectedSkills.map(skill => <div
                key={skill.id}
                className="p-2 rounded-full cursor-pointer hover:font-semibold hover:bg-[var(--color-5)] hover:text-white"
            >
                {skill.skill}
            </div>)}
        </div>
    </div>
}