import type { NextPage } from "next";

type CardType = {
  articleId?: string;
  articleTitle?: string;
  articleReadingTime?: string;
  articleSubtitle?: string;
  articleDescription?: string;
  imageId?: string;
  authorName?: string;
  articlePostTime?: string;
};

const Card: NextPage<CardType> = ({
  articleId,
  articleTitle,
  articleReadingTime,
  articleSubtitle,
  articleDescription,
  imageId,
  authorName,
  articlePostTime,
}) => {
  return (
    <div className="flex-1 rounded-3xs bg-primary-contrast overflow-hidden flex flex-col items-start justify-start gap-[4px] text-left text-base text-studio-darkmode-maincta-457eff font-source-code-pro border-[0.7px] border-solid border-studio-lightmode-midseparator-dee3eb md:flex-[unset] md:self-stretch">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
        alt=""
        src={articleId}
      />
      <div className="self-stretch h-[278px] shrink-0 flex flex-col p-4 box-border items-start justify-between">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[9px]">
              <div className="relative uppercase font-semibold">
                {articleTitle}
              </div>
              <div className="rounded-md bg-whitesmoke-100 flex flex-row py-[3px] px-1.5 items-start justify-start text-sm text-dimgray">
                <div className="relative tracking-[-0.04em]">
                  {articleReadingTime}
                </div>
              </div>
            </div>
            <b className="self-stretch relative text-7xl tracking-[0.02em] leading-[34px] font-alegreya text-studio-darkmode-exportbg-1a202e">
              {articleSubtitle}
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-studio-darkmode-exportbg-1a202e font-components-button-large">
            <div className="self-stretch relative tracking-[0.01em] leading-[28px]">
              {articleDescription}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-mid text-dimgray">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <img
              className="relative w-10 h-10 shrink-0 object-cover"
              alt=""
              src={imageId}
            />
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative tracking-[-0.04em] font-semibold inline-block w-[145.47px]">
                {authorName}
              </div>
              <div className="relative text-sm font-components-button-large text-studio-darkmode-normalsolid-icons-96a2be inline-block w-[145.47px]">
                {articlePostTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
