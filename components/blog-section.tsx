import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";

const BlogSection: NextPage = () => {
  return (
    <div className="absolute top-[109px] left-[145px] bg-primary-contrast shadow-[0px_0px_100px_rgba(0,_0,_0,_0.25)] w-[1440px] flex flex-row p-[30px] box-border items-start justify-start gap-[48px] max-w-full text-left text-base text-studio-darkmode-maincta-457eff font-source-code-pro md:flex-col">
      <FrameComponent1
        rectangle478="/rectangle-478@2x.png"
        designToCode="Design to code"
        minRead="3 min read"
        locofyaiTurnFigmaToCode="Locofy.ai – Turn Figma to Code!"
        goFromFigmaToCodeInMinimu="Go from Figma to code in minimum amount of time using Locofy. Take your.."
        avatar="/avatar@2x.png"
        annaRos="Anna Rosé"
        postedJustNow="Posted just now"
      />
      <FrameComponent1
        rectangle478="/rectangle-4781@2x.png"
        designToCode="Design to code"
        minRead="2 min read"
        locofyaiTurnFigmaToCode="Figma for Developers"
        goFromFigmaToCodeInMinimu="Developers often believe they will be off to a flying start if they skip the designing process and jump directly to code."
        frame7661AlignSelf="unset"
        line2Width="302.7px"
        avatar="/avatar1@2x.png"
        annaRos="Justin Chen"
        postedJustNow="Posted on Sep 6, 2022"
        frame7639AlignSelf="unset"
        frame7645Flex="unset"
        frame7645JustifyContent="flex-start"
        frame7645Gap="13px"
      />
      <FrameComponent1
        rectangle478="/rectangle-4782@2x.png"
        designToCode="Integrations"
        minRead="2 min read"
        locofyaiTurnFigmaToCode="Best UI library to use in Figma"
        goFromFigmaToCodeInMinimu="Find out what UI library suit your product the most. From Material UI, Bootstrap, ..."
        frame7661AlignSelf="unset"
        line2Width="330.7px"
        avatar="/avatar2@2x.png"
        annaRos="Isaac Tan"
        postedJustNow="Posted on Sep 5, 2022"
        frame7639AlignSelf="stretch"
        frame7645Flex="1"
        frame7645JustifyContent="space-between"
        frame7645Gap="unset"
      />
    </div>
  );
};

export default BlogSection;
