import { BiUser } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { RiProjectorLine, RiServiceLine } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";
import {FcAbout} from 'react-icons/fc'

export const content ={
    nav : [
        {
icon: TbSmartHome,
link : "#home",
        },
        {
            icon:FcAbout,
            link: "#about",
        },
        {
            link: "#skills",
            icon: BiUser,
          
        },
        {
            link: "#service",
            icon: RiServiceLine,
        },
        {
            link: "#project",
            icon: RiProjectorLine,
        },
        {
            link: "#contact",
            icon: MdOutlinePermContactCalendar,
        },
    ]
}

