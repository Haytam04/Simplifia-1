import type { NextPage } from "next";
import ServiceBlock from "service-block";

const Services: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[17px] max-w-full text-center text-7xl text-black font-ubuntu">
      <div className="w-[487px] flex flex-col items-start justify-start py-0 pr-8 pl-0 box-border max-w-full">
        <ServiceBlock />
      </div>
      <div className="w-[450px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch rounded-xl bg-whitesmoke-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-8 pb-[67px] pr-[52px] pl-[38px] box-border gap-[10px] max-w-full mq450:pt-[21px] mq450:pr-5 mq450:pb-11 mq450:box-border">
          <div className="w-[450px] h-[448px] relative rounded-xl bg-whitesmoke-100 hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-10">
            <div className="h-[247px] flex-1 relative">
              <h2 className="m-0 absolute top-[186.5px] left-[41px] text-inherit tracking-[-0.02em] font-bold font-inherit inline-block w-[191.8px] z-[1] mq450:text-2xl">
                Bonne interface utilisateur
              </h2>
              <img
                className="absolute top-[-0.5px] left-[0px] w-[312px] h-48 overflow-hidden z-[2]"
                loading="eager"
                alt=""
              />
            </div>
          </div>
          <div className="self-stretch h-[92px] relative text-xl tracking-[-0.02em] inline-block z-[1] mq450:text-base">
            Simplifiez la gestion grâce à un design convivial, des tableaux de
            bord personnalisables et une navigation intuitive.
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-xl bg-whitesmoke-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[47px] pb-[69px] pr-[52px] pl-[53px] box-border gap-[20px] min-w-[326px] max-w-full mq450:pt-[31px] mq450:pb-[45px] mq450:box-border mq900:pl-[26px] mq900:pr-[26px] mq900:box-border">
        <div className="w-[502px] h-[448px] relative rounded-xl bg-whitesmoke-100 hidden max-w-full" />
        <div className="flex flex-col items-end justify-start gap-[6px]">
          <img
            className="w-[184px] h-[184px] relative overflow-hidden shrink-0 z-[2]"
            loading="eager"
            alt=""
          />
          <h2 className="m-0 relative text-inherit tracking-[-0.02em] font-bold font-inherit z-[1] mq450:text-2xl">
            Application Mobile
          </h2>
        </div>
        <div className="self-stretch h-[92px] relative text-xl tracking-[-0.02em] inline-block z-[1] mq450:text-base">
          Restez connecté à votre immobilier partout avec une appli facile à
          utiliser, des notifications instantanées et un accès en temps réel.
        </div>
      </div>
    </div>
  );
};

export default Services;
