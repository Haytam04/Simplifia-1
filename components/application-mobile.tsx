import type { NextPage } from "next";

const ApplicationMobile: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start py-[140px] px-[220px] box-border gap-[98px] max-w-full z-[1] text-left text-53xl text-mediumslateblue-300 font-paragraph-p3-regular mq450:py-[59px] mq450:px-5 mq450:box-border mq900:gap-[24px] mq900:py-[91px] mq900:px-[55px] mq900:box-border mq1300:gap-[49px] mq1300:pl-[110px] mq1300:pr-[110px] mq1300:box-border mq1650:flex-wrap">
      <div className="h-[535px] w-[622px] flex flex-col items-start justify-start min-w-[622px] max-w-full mq1300:min-w-full mq1650:flex-1">
        <img
          className="w-[577.6px] relative max-h-full object-cover max-w-full mq1650:self-stretch mq1650:w-auto"
          loading="eager"
          alt=""
          src="/home4feature3img-1@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[60px] min-w-[495px] shrink-0 max-w-full mq900:gap-[30px] mq1300:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start relative gap-[24px]">
          <img
            className="w-[69.37%] h-[10.42%] absolute my-0 mx-[!important] top-[38.94%] right-[4.74%] bottom-[50.64%] left-[25.89%] max-w-full overflow-hidden max-h-full"
            loading="eager"
            alt=""
            src="/element-1.svg"
          />
          <h1 className="m-0 self-stretch h-[198px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block shrink-0 z-[1] mq450:text-24xl mq900:text-39xl">
            Une Application mobile pour vous
          </h1>
          <div className="self-stretch h-[90px] relative text-lg tracking-[-0.02em] leading-[30px] text-black inline-block">
            <p className="m-0">
              Restez connecté à votre immobilier partout avec une appli facile à
              utiliser, des notifications instantanées et un accès en temps
              réel.
            </p>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-5 px-10 bg-mediumslateblue-300 rounded-lg overflow-hidden flex flex-row items-center justify-center gap-[10px]">
          <div className="relative text-lg tracking-[-0.02em] leading-[23px] font-medium font-paragraph-p3-regular text-white text-left">
            Télécharger
          </div>
          <div className="flex flex-row items-start justify-start">
            <img className="h-3.5 w-3.5 relative" alt="" src="/group-214.svg" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ApplicationMobile;
