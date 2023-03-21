import type { NextPage } from "next";
import Card from "./card";

const CardsRow: NextPage = () => {
  return (
    <div className="self-stretch rounded-3xs bg-primary-contrast shadow-[0px_0px_100px_rgba(0,_0,_0,_0.25)] flex flex-row p-[30px] box-border items-start justify-start gap-[48px] max-w-full text-left text-base text-studio-darkmode-maincta-457eff font-source-code-pro md:flex-col">
      <Card
        articleId="/rectangle-478@2x.png"
        articleTitle="Design to code"
        articleReadingTime="3 min read"
        articleSubtitle="Locofy.ai – Turn Figma to Code!"
        articleDescription="Go from Figma to code in minimum amount of time using Locofy. Take your.."
        imageId="/avatar@2x.png"
        authorName="Anna Rosé"
        articlePostTime="Posted just now"
      />
      <Card
        articleId="/rectangle-4781@2x.png"
        articleTitle="Design to code"
        articleReadingTime="2 min read"
        articleSubtitle="Figma for Developers"
        articleDescription="Developers often believe they will be off to a flying start if they skip the designing process and jump directly to code."
        imageId="/avatar@2x.png"
        authorName="Justin Chen"
        articlePostTime="Posted on Sep 6, 2022"
      />
      <Card
        articleId="/rectangle-4782@2x.png"
        articleTitle="Integrations"
        articleReadingTime="2 min read"
        articleSubtitle="Best UI library to use in Figma"
        articleDescription="Find out what UI library suit your product the most. From Material UI, Bootstrap, ..."
        imageId="/avatar1@2x.png"
        authorName="Isaac Tan"
        articlePostTime="Posted on Sep 5, 2022"
      />
    </div>
  );
};

export default CardsRow;
