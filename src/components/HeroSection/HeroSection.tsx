import Image from "next/image";
import CountUpNumber from "../CountUpNumber/CountUpNumber";
import ClientComponent from "./ClientComponent";
import { heading1, section2 } from "./SeverComponent";

const HeroSection = () => {
    return <ClientComponent section2={section2} heading1={heading1} />;
};

export default HeroSection;