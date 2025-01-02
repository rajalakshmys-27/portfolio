"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
    { name: "HTML", icon: "/assets/skillicons/html5.png" },
    { name: "CSS", icon: "/assets/skillicons/css3.png" },
    { name: "JavaScript", icon: "/assets/skillicons/javascript.png" },
    { name: "TypeScript", icon: "/assets/skillicons/typescript.png" },
    { name: "React", icon: "/assets/skillicons/react.png" },
    { name: "Redux Toolkit", icon: "/assets/skillicons/redux-toolkit.png" },
    { name: "Redux Saga", icon: "/assets/skillicons/redux-saga.png" },
    { name: "Next.js", icon: "/assets/skillicons/nextjs.png" },
    { name: "Node.js", icon: "/assets/skillicons/nodejs.png" },
    { name: "Express.js", icon: "/assets/skillicons/express.png" },
    { name: "MongoDB", icon: "/assets/skillicons/mongodb.png" },
    { name: "Mongoose", icon: "/assets/skillicons/mongoose.png" },
    { name: "REST API", icon: "/assets/skillicons/rest-api.png" },
    { name: "GraphQL", icon: "/assets/skillicons/graphql.png" },
    { name: "Git", icon: "/assets/skillicons/git.png" },
    { name: "GitHub", icon: "/assets/skillicons/github.png" },
    { name: "AWS", icon: "/assets/skillicons/aws.png" },
    { name: "Jenkins", icon: "/assets/skillicons/jenkins.png" },
    { name: "Bootstrap", icon: "/assets/skillicons/bootstrap.png" },
    { name: "React Bootstrap", icon: "/assets/skillicons/react-bootstrap.png" },
    { name: "Sass", icon: "/assets/skillicons/sass.png" },
    { name: "Less", icon: "/assets/skillicons/less.png" },
    { name: "Jira", icon: "/assets/skillicons/jira.png" },
    { name: "Yarn", icon: "/assets/skillicons/yarn.png" },
    { name: "npm", icon: "/assets/skillicons/npm.png" },
    { name: "EJS", icon: "/assets/skillicons/ejs.png" },
    { name: "Jest", icon: "/assets/skillicons/jest.png" },
    { name: "React Testing Library", icon: "/assets/skillicons/react-testing-library.png" },
];

export default function Skills() {
    return (
        <section className="min-h-screen flex flex-col justify-centre skills-section bg-black text-white py-10" id="skills">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-5 px-4 md:px-10">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="skill-card flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={80}
                            height={80}
                            className="mb-2 object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
