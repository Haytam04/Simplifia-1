import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="self-stretch bg-mediumslateblue-200 flex flex-col items-center justify-start pt-[142px] px-5 pb-[114px] box-border gap-[37px] max-w-full text-left text-base text-white font-paragraph-p3-regular mq900:gap-[18px] mq900:pt-[92px] mq900:pb-[74px] mq900:box-border">
      <div className="w-[1481px] flex flex-row items-start justify-start max-w-full">
        <div className="w-[1339px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1300:flex-wrap">
          <div className="w-60 flex flex-col items-start justify-start gap-[15px] text-lg text-floralwhite">
            <img
              className="w-[137px] h-[137px] relative object-cover"
              loading="eager"
              alt=""
              src="/2removebgpreview-1-1-1@2x.png"
            />
            <div className="self-stretch h-[60px] relative tracking-[-0.02em] leading-[30px] inline-block">
              Gérez votre syndic en toute simplicité avec Symplifia.
            </div>
          </div>
          <div className="w-[321px] flex flex-col items-start justify-start gap-[15px] max-w-full">
            <b className="relative text-lg tracking-[-0.02em]">Click bref</b>
            <div className="relative tracking-[-0.02em] leading-[20px] text-gray-100">
              Nos services
            </div>
            <div className="relative tracking-[-0.02em] leading-[20px]">
              Pourqoui nous
            </div>
            <div className="w-[177px] relative tracking-[-0.02em] leading-[20px] inline-block">
              nos plans
            </div>
            <div className="relative tracking-[-0.02em] leading-[20px]">
              Contacter nous
            </div>
          </div>
          <div className="w-[508px] flex flex-row items-start justify-start gap-[134px] max-w-full mq450:flex-wrap mq450:gap-[33px] mq900:gap-[67px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[157px]">
              <b className="relative text-lg tracking-[-0.02em]">Nos contact</b>
              <div className="relative tracking-[-0.02em] leading-[20px]">
                tel : 0661656016
              </div>
              <div className="self-stretch relative tracking-[-0.02em] leading-[20px]">
                email : symplifia@gmail.com
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] min-w-[133px] mq450:flex-1">
              <b className="relative text-lg tracking-[-0.02em]">
                Reseau sociaux
              </b>
              <div className="relative tracking-[-0.02em] leading-[20px]">
                Youtube
              </div>
              <div className="relative tracking-[-0.02em] leading-[20px]">
                facebook
              </div>
              <div className="relative tracking-[-0.02em] leading-[20px]">
                Instagram
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1480px] hidden max-w-full" />
      <div className="w-[1481px] h-px relative box-border max-w-full border-t-[1px] border-solid border-gray-200" />
    </footer>
  );
};

export default Footer;
