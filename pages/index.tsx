import type { NextPage } from "next";
import Head from "next/head";
import AppLogo from "../components/app-logo";
import Hero from "../Group";
import Services from "../Text Block";
import Utilitys from "../Namebox Avater";
import Pricing from "../Frame 68";
import ApplicationMobile from "../components/application-mobile";
import Testimonial from "../components/testimonial";
import Contact from "../Testimonial Frame";
import Footer from "../components/footer";

const LandingPageV1Desktop: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[15px] px-0 pb-0 box-border tracking-[normal]">
      <AppLogo />
      <Hero />
      <section className="w-[1520px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[98px] min-h-[948px] max-w-full text-center text-53xl text-mediumslateblue-300 font-paragraph-p3-regular mq450:gap-[24px] mq900:gap-[49px]">
        <div className="self-stretch flex flex-row items-center justify-start min-h-[164px] max-w-full mq900:gap-[30px]">
          <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border max-w-full mq900:gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start relative gap-[24px]">
              <img
                className="w-[70.26%] h-[10%] absolute my-0 mx-[!important] top-[39.89%] right-[-1.03%] bottom-[50.11%] left-[30.78%] max-w-full overflow-hidden max-h-full object-contain"
                loading="eager"
                alt=""
              />
              <h1 className="m-0 self-stretch h-[87px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block z-[1] mq450:text-24xl mq900:text-39xl">
                Pourquoi Nous?
              </h1>
            </div>
          </div>
        </div>
        <Services />
      </section>
      <section className="w-[1414px] flex flex-row items-start justify-start py-0 pr-[33px] pl-5 box-border relative min-h-[322px] max-w-full text-center text-53xl text-mediumslateblue-300 font-paragraph-p3-regular">
        <h1 className="m-0 h-[87px] flex-1 relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block max-w-full mq450:text-24xl mq900:text-39xl">{`Fonctionnalité `}</h1>
        <div className="h-[772px] w-[752px] my-0 mx-[!important] absolute bottom-[-693.5px] left-[328px] flex flex-col items-center justify-start max-w-full">
          <Utilitys />
          <div className="w-[440px] h-[452px] relative max-w-full mt-[-612px]">
            <div className="absolute top-[-0.1px] left-[-0.3px] rounded-[50%] box-border w-full h-full z-[1] border-[2px] border-dashed border-lightskyblue" />
            <div className="absolute top-[150px] left-[139px] w-[169px] h-[151px] flex flex-row items-start justify-start z-[2]">
              <img
                className="h-[219px] w-[219px] absolute my-0 mx-[!important] top-[calc(50%_-_109.5px)] left-[calc(50%_-_109.5px)] object-cover"
                loading="eager"
                alt=""
                src="/2removebgpreview-1-2@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border min-h-[258px] max-w-full text-center text-21xl text-mediumslateblue-200 font-paragraph-p3-regular">
        <div className="w-[1981px] flex flex-row items-start justify-start py-0 px-0 box-border shrink-0 max-w-[103%]">
          <div className="w-[2013px] flex flex-col items-start justify-start shrink-0 max-w-[102%]">
            <h1 className="m-0 w-[774px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block max-w-full pr-5 z-[3] mq450:text-5xl mq900:text-13xl">
              Gestion de payements
            </h1>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-lg text-midnightblue">
              <div className="w-[1862px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[20px] max-w-full mq1300:flex-wrap mq1300:justify-center">
                <div className="w-[417px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
                  <div className="self-stretch h-[60px] relative tracking-[-0.02em] leading-[30px] inline-block shrink-0">
                    Découvrez rapidement les appartements ayant payé et ceux en
                    attente dans notre gestion syndic facile et claire
                  </div>
                </div>
                <div className="w-[754px] flex flex-col items-center justify-start gap-[1px] max-w-full text-center text-21xl text-mediumslateblue-200">
                  <h1 className="m-0 self-stretch h-14 relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block shrink-0 z-[3] mq450:text-5xl mq900:text-13xl">
                    Créer annoncement
                  </h1>
                  <div className="w-[376px] flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full text-left text-lg text-midnightblue">
                    <div className="h-[70px] flex-1 relative tracking-[-0.02em] leading-[30px] inline-block max-w-full">
                      creer annoncement par syndicat au cas de reparations ou
                      d'urgence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border min-h-[487px] max-w-full text-center text-21xl text-mediumslateblue-200 font-paragraph-p3-regular">
        <div className="w-[2052px] flex flex-row items-start justify-start py-0 px-0 box-border shrink-0 max-w-[107%]">
          <div className="w-[2109px] flex flex-col items-start justify-start gap-[7px] shrink-0 max-w-[103%]">
            <h1 className="m-0 w-[774px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block max-w-full pr-5 z-[3] mq450:text-5xl mq900:text-13xl">
              Payement Syndic
            </h1>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-lg text-midnightblue">
              <div className="w-[1916px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[20px] max-w-full mq1300:flex-wrap mq1300:justify-center">
                <div className="w-[489px] flex flex-col items-start justify-start gap-[150px] max-w-full mq900:gap-[75px]">
                  <div className="w-[431px] h-[59px] relative tracking-[-0.02em] leading-[30px] inline-block shrink-0 max-w-full pr-5">
                    Payez votre syndic simplement : en ligne avec votre carte
                    bancaire ou de manière traditionnelle
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full text-center text-21xl text-mediumslateblue-200">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[7px] max-w-full">
                      <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-bold font-inherit mq450:text-5xl mq900:text-13xl">
                        Messages automatique
                      </h1>
                      <div className="w-[468px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full text-left text-lg text-midnightblue">
                        <div className="h-[120px] flex-1 relative tracking-[-0.02em] leading-[30px] inline-block max-w-full">
                          Soyez à jour ! Votre paiement syndic est en attente.
                          Régularisez rapidement pour une gestion sans souci.
                          Merci
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[754px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-full text-center text-21xl text-mediumslateblue-200">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[24px] max-w-full">
                    <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-bold font-inherit z-[3] mq450:text-5xl mq900:text-13xl">
                      Assistance en ligne
                    </h1>
                    <div className="w-[524px] flex flex-row items-start justify-end max-w-full text-left text-lg text-midnightblue">
                      <div className="h-[120px] w-[454px] relative tracking-[-0.02em] leading-[30px] inline-block shrink-0 max-w-full">
                        Assistance en ligne disponible ! Besoin d'aide ou
                        d'infos ? Contactez-nous instantanément pour une
                        assistance rapide et efficace.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pricing />
      <section className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-0 box-border min-h-[1836px] max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start max-w-full">
          <ApplicationMobile />
          <Testimonial />
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPageV1Desktop;
