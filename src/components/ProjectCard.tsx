import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github, preview } from "../assets";
import { cn } from "../utils/lib";
import { fadeIn } from "../utils/motion";
import { ProjectCardProps } from "./works";

// Project Card
export const ProjectCard = ({
    index, name, description, tags,
    image,
    source_code_link,
    live_site_link,
}: ProjectCardProps) => (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
            <div className="relative w-full h-[230px]">
                {/*  */}
                {/* <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Live Site */}
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div
                        onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img
                            src={preview}
                            alt="Live Site"
                            title="Live Site"
                            className="w-2/3 h-2/3 object-contain" />
                    </div>

                    {/* Github */}
                    <div
                        onClick={() => window.open(source_code_link, "_blank", "noreferrer")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
                    >
                        <img
                            src={github}
                            alt="Github"
                            title="Github"
                            className="w-1/2 h-1/2 object-contain" />
                    </div>
                </div>
            </div>

            {/* Work Info */}
            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-white-100 text-[14px]">{description}</p>
            </div>

            {/* Work Tag */}
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, tagIdx) => (
                    <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </Tilt>
    </motion.div>
);
