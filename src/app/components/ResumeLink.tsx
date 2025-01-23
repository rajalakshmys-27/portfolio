import { motion } from "framer-motion";

interface ResumeLinkProps {
    href: string;
    label: string;
    className: string;
    icon: React.ComponentType;
    download?: boolean;
    rel?: string;
}

const ResumeLink: React.FC<ResumeLinkProps> = ({
    href,
    label,
    className,
    icon: Icon,
    download,
    rel
}) => {
    return (
        <motion.a
            href={href}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={label}
            className={className}
            target="_blank"
            download={download || undefined}
            rel={rel || undefined}
        >
            {label} <Icon />
        </motion.a>)


};

export default ResumeLink;
