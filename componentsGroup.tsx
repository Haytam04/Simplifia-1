import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[241px] box-border min-h-[842px] max-w-full text-left text-45xl text-black font-paragraph-p3-regular mq450:pl-5 mq450:box-border mq900:pl-[60px] mq900:box-border mq1300:pl-[120px] mq1300:box-border">
      <div className="w-[1775px] flex flex-row items-start justify-start gap-[52px] shrink-0 max-w-[106%] mq900:gap-[26px] mq1650:flex-wrap">
        <div className="w-[719px] flex flex-col items-start justify-start pt-[75px] px-0 pb-0 box-border min-w-[719px] max-w-full mq900:pt-[49px] mq900:box-border mq1300:min-w-full mq1650:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[60px] mq900:gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <h1 className="m-0 self-stretch h-[231px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block mq450:text-19xl mq900:text-32xl">
                <span>{`Gérez votre syndic en toute simplicité avec `}</span>
                <span>Symplifia</span>
                <span>.</span>
              </h1>
              <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[30px] [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)] pr-5">
                Simplifiez votre quotidien immobilier
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-5 pr-4 pl-5 bg-mediumslateblue-300 rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-royalblue-100">
              <div className="relative text-lg tracking-[-0.02em] leading-[23px] font-medium font-paragraph-p3-regular text-whitesmoke-200 text-left">
                Savoir Plus
              </div>
            </button>
          </div>
        </div>
        <img
          className="h-[664.8px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[653px] mq1300:min-w-full"
          loading="eager"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
