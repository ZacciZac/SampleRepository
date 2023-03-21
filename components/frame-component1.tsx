import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FrameComponent1Type = {
  rectangle478?: string;
  designToCode?: string;
  minRead?: string;
  locofyaiTurnFigmaToCode?: string;
  goFromFigmaToCodeInMinimu?: string;
  avatar?: string;
  annaRos?: string;
  postedJustNow?: string;

  /** Style props */
  frame7661AlignSelf?: Property.AlignSelf;
  line2Width?: Property.Width;
  frame7639AlignSelf?: Property.AlignSelf;
  frame7645Flex?: Property.Flex;
  frame7645JustifyContent?: Property.JustifyContent;
  frame7645Gap?: Property.Gap;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  rectangle478,
  designToCode,
  minRead,
  locofyaiTurnFigmaToCode,
  goFromFigmaToCodeInMinimu,
  frame7661AlignSelf,
  line2Width,
  avatar,
  annaRos,
  postedJustNow,
  frame7639AlignSelf,
  frame7645Flex,
  frame7645JustifyContent,
  frame7645Gap,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: frame7661AlignSelf,
    };
  }, [frame7661AlignSelf]);

  const lineDivStyle: CSS.Properties = useMemo(() => {
    return {
      width: line2Width,
    };
  }, [line2Width]);

  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      alignSelf: frame7639AlignSelf,
    };
  }, [frame7639AlignSelf]);

  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      flex: frame7645Flex,
      justifyContent: frame7645JustifyContent,
      gap: frame7645Gap,
    };
  }, [frame7645Flex, frame7645JustifyContent, frame7645Gap]);

  return (
    <div
      className="self-stretch flex-1 rounded-3xs bg-primary-contrast overflow-hidden flex flex-col items-start justify-start gap-[4px] text-left text-base text-studio-darkmode-maincta-457eff font-source-code-pro border-[0.7px] border-solid border-studio-lightmode-midseparator-dee3eb md:flex-[unset] md:self-stretch"
      style={frameDiv1Style}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
        alt=""
        src={rectangle478}
      />
      <div
        className="self-stretch flex-1 flex flex-col p-4 items-start justify-between"
        style={frameDiv2Style}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[9px]">
              <div className="relative uppercase font-semibold">
                {designToCode}
              </div>
              <div className="rounded-md bg-whitesmoke-100 flex flex-row py-[3px] px-1.5 items-start justify-start text-sm text-dimgray">
                <div className="relative tracking-[-0.04em]">{minRead}</div>
              </div>
            </div>
            <b className="self-stretch relative text-7xl tracking-[0.02em] leading-[34px] font-alegreya text-studio-darkmode-exportbg-1a202e">
              {locofyaiTurnFigmaToCode}
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-studio-darkmode-exportbg-1a202e font-components-button-large">
            <div className="self-stretch relative tracking-[0.01em] leading-[28px]">
              {goFromFigmaToCodeInMinimu}
            </div>
          </div>
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[13px] text-mid text-dimgray"
          style={frameDivStyle}
        >
          <div
            className="relative box-border w-[396.7px] h-[0.7px] shrink-0 border-t-[0.7px] border-solid border-studio-lightmode-lightseparator-ecf0f6"
            style={lineDivStyle}
          />
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <img
              className="relative w-10 h-10 shrink-0 object-cover"
              alt=""
              src={avatar}
            />
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative tracking-[-0.04em] font-semibold inline-block w-[145.47px]">
                {annaRos}
              </div>
              <div className="relative text-sm font-components-button-large text-studio-darkmode-normalsolid-icons-96a2be inline-block w-[145.47px]">
                {postedJustNow}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
