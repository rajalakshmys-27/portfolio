"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

const skills = [
    { name: "HTML", iconLight: "/assets/skillicons/html-light.png", iconDark: "/assets/skillicons/html-dark.png" },
    { name: "CSS", iconLight: "/assets/skillicons/css-light.png", iconDark: "/assets/skillicons/css-dark.png" },
    { name: "JavaScript", iconLight: "/assets/skillicons/js-light.png", iconDark: "/assets/skillicons/js-dark.png" },
    { name: "TypeScript", iconLight: "/assets/skillicons/ts-light.png", iconDark: "/assets/skillicons/ts-dark.png" },
    { name: "React.js", iconLight: "/assets/skillicons/react-light.png", iconDark: "/assets/skillicons/react-dark.png" },
    { name: "Redux Toolkit", iconLight: "/assets/skillicons/redux-toolkit-light.png", iconDark: "/assets/skillicons/redux-toolkit-dark.png" },
    { name: "Redux Saga", iconLight: "/assets/skillicons/redux-saga.png", iconDark: "/assets/skillicons/redux-saga.png" },
    { name: "Next.js", iconLight: "/assets/skillicons/nextjs-light.png", iconDark: "/assets/skillicons/nextjs-dark.png" },
    { name: "Node.js", iconLight: "/assets/skillicons/nodejs.png", iconDark: "/assets/skillicons/nodejs.png" },
    { name: "Express.js", iconLight: "/assets/skillicons/expressjs-light.png", iconDark: "/assets/skillicons/expressjs-dark.png" },
    { name: "MongoDB", iconLight: "/assets/skillicons/mongodb-light.png", iconDark: "/assets/skillicons/mongodb-dark.png" },
    { name: "Mongoose", iconLight: "/assets/skillicons/mongoose.png", iconDark: "/assets/skillicons/mongoose.png" },
    { name: "RestAPI", iconLight: "/assets/skillicons/restapi-light.png", iconDark: "/assets/skillicons/restapi-dark.png" },
    { name: "Graphql", iconLight: "/assets/skillicons/graphql.png", iconDark: "/assets/skillicons/graphql.png" },
    { name: "Git", iconLight: "/assets/skillicons/git-light.png", iconDark: "/assets/skillicons/git-dark.png" },
    { name: "GitHub", iconLight: "/assets/skillicons/github-light.png", iconDark: "/assets/skillicons/github-dark.png" },
    { name: "AWS", iconLight: "/assets/skillicons/aws-light.png", iconDark: "/assets/skillicons/aws-dark.png" },
    { name: "Jenkins", iconLight: "/assets/skillicons/jenkins-light.png", iconDark: "/assets/skillicons/jenkins-dark.png" },
    { name: "Bootstrap", iconLight: "/assets/skillicons/bootstrap-light.png", iconDark: "/assets/skillicons/bootstrap-dark.png" },
    { name: "ReactBootstrap", iconLight: "/assets/skillicons/reactbootstrap-light.png", iconDark: "/assets/skillicons/reactbootstrap-dark.png" },
    { name: "Sass", iconLight: "/assets/skillicons/sass.png", iconDark: "/assets/skillicons/sass.png" },
    { name: "Less", iconLight: "/assets/skillicons/less.png", iconDark: "/assets/skillicons/less.png" },
    { name: "Jira", iconLight: "/assets/skillicons/jira-light.png", iconDark: "/assets/skillicons/jira-dark.png" },
    { name: "Yarn", iconLight: "/assets/skillicons/yarn.png", iconDark: "/assets/skillicons/yarn.png" },
    { name: "Npm", iconLight: "/assets/skillicons/npm.png", iconDark: "/assets/skillicons/npm.png" },
    { name: "EJS", iconLight: "/assets/skillicons/ejs.png", iconDark: "/assets/skillicons/ejs.png" },
    { name: "Jest", iconLight: "/assets/skillicons/jest.png", iconDark: "/assets/skillicons/jest.png" },
    { name: "RTL", iconLight: "/assets/skillicons/rtl-light.png", iconDark: "/assets/skillicons/rtl-dark.png" },

];

export default function Skills() {
    const { isLightMode } = useTheme();

    return (
        <section id="skills"
            className={`md:min-h-screen flex flex-col justify-centre skills-section py-16 ${isLightMode ? "text-black bg-[#ffffff]" : "text-white bg-[#141414]"} `}>
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-5 px-4 md:px-10">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="skill-card flex flex-col items-center justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                        <Image
                            src={isLightMode ? skill.iconLight : skill.iconDark}
                            alt={skill.name}
                            width={96}
                            height={96}
                            className="mb-2 object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
