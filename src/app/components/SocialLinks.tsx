import { motion } from "framer-motion";
import SocialIcon from "@/app/components/SocialIcon";
import { useTooltip } from "@/app/hooks/useTooltip";
import { copyToClipboard } from "@/app/utils/helper";
import { GithubIcon, MailIcon, LinkedInIcon, CallIcon } from "@/app/components/Icons";

interface SocialLinksProps {
    isLightMode: boolean;
}

const SocialLinks = ({ isLightMode }: SocialLinksProps) => {
    const { tooltipVisible, showTooltip } = useTooltip();

    const handleCopyClick = () => {
        copyToClipboard("+919074089543");
        showTooltip();
    };

    return (
        <motion.div
            className="flex gap-6 justify-center md:justify-start mt-4 md:mt-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
        >
            <SocialIcon
                href="https://www.linkedin.com/in/rajalakshmy-s-2709/"
                icon={LinkedInIcon}
                bgColor="bg-blue-600"
                hoverColor="hover:bg-blue-700"
                ariaLabel="LinkedIn Profile" />
            <SocialIcon
                href="https://github.com/rajalakshmys-27"
                icon={GithubIcon}
                bgColor="bg-gray-800"
                hoverColor="hover:bg-gray-700"
                ariaLabel="Github Profile"
            />
            <SocialIcon
                href="mailto:rajalakshmys27@gmail.com"
                icon={MailIcon}
                bgColor="bg-red-600"
                hoverColor="hover:bg-red-700"
                ariaLabel="Mail"
            />
            <SocialIcon
                icon={CallIcon}
                bgColor="bg-green-600"
                hoverColor="hover:bg-green-700"
                ariaLabel="Call"
                onClick={handleCopyClick}
                isCallIcon={true}
                tooltipVisible={tooltipVisible}
                isLightMode={isLightMode}
            />
        </motion.div>
    )
};

export default SocialLinks;