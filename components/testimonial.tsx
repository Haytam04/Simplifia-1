import type { NextPage } from "next";
import Client from "./client";

const Testimonial: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center py-[140px] px-5 box-border gap-[60px] min-h-[1009px] max-w-full mt-[-56px] text-center text-51xl text-mediumslateblue-300 font-paragraph-p3-regular mq900:gap-[30px] mq900:pb-[59px] mq900:box-border mq1300:pt-[140px] mq1300:pb-[91px] mq1300:box-border">
      <h1 className="m-0 w-[1479px] h-[147px] relative text-inherit leading-[84px] font-bold font-inherit inline-block shrink-0 mq450:text-23xl mq450:leading-[50px] mq900:text-37xl mq900:leading-[67px]">
        Ce que les gents disent de nous
      </h1>
      <div className="w-[1519px] flex flex-row flex-wrap items-center justify-center gap-[32px] min-h-[464px] max-w-full text-left text-5xl text-black mq900:gap-[16px]">
        <Client
          commentPlaceholder={`Facile à utiliser, Symplifia a rendu notre gestion immobilière sans 
souci !`}
          avater="/avater@2x.png"
          malak="Malak"
          syndicDAppartement90AinDi="Syndic d’ appartement 90 Ain diab Casablanca"
          propBorderBottom="1px solid #212529"
          propColor="#000"
        />
        <Client
          commentPlaceholder="Interface claire, l'appli mobile est super pratique. Symplifia a simplifié notre quotidien"
          avater="/avater-1@2x.png"
          malak="Ahmed"
          syndicDAppartement90AinDi="Syndic d’appartement 130 Hay riyad Rabat"
          propBorderBottom="1px solid #000"
          propColor="#212529"
        />
        <div className="flex-1 rounded-3xs bg-whitesmoke-200 flex flex-col items-start justify-start py-[60px] px-10 box-border gap-[60px] min-w-[364px] max-w-full text-gray-300 mq450:pt-[140px] mq450:pb-[39px] mq450:box-border mq450:min-w-full mq900:gap-[30px]">
          <textarea
            className="[border:none] bg-[transparent] h-[136px] w-auto [outline:none] self-stretch box-border flex flex-col items-start justify-start font-paragraph-p3-regular text-5xl text-gray-500 border-b-[1px] border-solid border-gray-300"
            placeholder="Avec Symplifia, la sécurité et la simplicité vont de pair dans la gestion immobilière."
            rows={7}
            cols={20}
          />
          <div className="w-[383px] flex flex-row items-end justify-start gap-[42px] max-w-full mq450:flex-wrap mq450:gap-[21px]">
            <img
              className="h-[95px] w-[95px] relative rounded-[50%] object-cover min-h-[95px]"
              loading="eager"
              alt=""
              src="/avater-2@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[172px] min-h-[95px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-lgi mq450:leading-[29px]">{`Amine `}</h3>
              <div className="relative text-base tracking-[-0.02em] leading-[20px] text-gray-500">
                <p className="m-0">{`Syndic d’appartement 120 Al amane `}</p>
                <p className="m-0">Ain Sbaa Casablanca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
