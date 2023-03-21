import type { NextPage } from "next";

const Form: NextPage = () => {
  return (
    <div className="absolute top-[765px] left-[145px] rounded-xl bg-primary-contrast shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] box-border w-[509px] flex flex-col py-7 px-[30px] items-start justify-start gap-[17px] max-w-full text-left text-3xl text-darkslategray font-poppins border-[1px] border-solid border-whitesmoke-200">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch relative leading-[34px] font-semibold">
          140,000 people have signed up
        </div>
        <div className="self-stretch relative text-lg leading-[34px] font-components-button-large text-slategray">
          Fill in your details to join the party!
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <input
          className="font-components-button-large text-xl bg-primary-contrast self-stretch rounded overflow-hidden flex flex-row py-2.5 px-[18px] items-center justify-start leading-[30px] [outline:none] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
          type="text"
          placeholder="Your name"
        />
        <input
          className="font-components-button-large text-xl bg-primary-contrast self-stretch rounded overflow-hidden flex flex-row py-2.5 px-[18px] items-center justify-start leading-[30px] [outline:none] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
          type="text"
          placeholder="Email address"
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-orange rounded w-[164px] h-14 shrink-0 overflow-hidden flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-peru">
        <div className="overflow-hidden flex flex-col py-2 px-[22px] items-start justify-start">
          <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-left">
            Subscribe
          </div>
        </div>
      </button>
    </div>
  );
};

export default Form;
