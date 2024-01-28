import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <section className="w-[1774px] flex flex-col items-end justify-start py-0 px-5 box-border gap-[126px] min-h-[1341px] max-w-full text-center text-53xl text-mediumslateblue-300 font-paragraph-p3-regular mq450:gap-[16px] mq900:gap-[31px] mq1300:gap-[63px]">
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <h1 className="m-0 h-[97px] w-[1650px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-24xl mq900:text-39xl">
          Contacter nous
        </h1>
      </div>
      <div className="w-[1576px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-11xl font-oswald mq1650:flex-wrap mq1650:justify-center">
        <div className="w-[770px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border min-w-[770px] max-w-full mq450:pt-[23px] mq450:box-border mq900:min-w-full mq1300:pt-9 mq1300:box-border mq1650:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[70px] max-w-full mq450:gap-[17px] mq900:gap-[35px]">
            <h2 className="m-0 w-[586px] h-16 relative text-inherit tracking-[0.08em] font-semibold font-inherit inline-block shrink-0 max-w-full mq450:text-lg mq900:text-5xl">
              Si vous avez des questions n’hésitez pas
            </h2>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[54px] max-w-full mq450:gap-[27px]">
                <input
                  className="w-full [border:none] [outline:none] bg-ghostwhite self-stretch h-[89px] flex flex-row items-center justify-start pt-[29px] px-9 pb-[27px] box-border font-poppins text-5xl text-darkgray min-w-[250px]"
                  placeholder="Nom"
                  type="text"
                />
                <input
                  className="w-full [border:none] [outline:none] bg-ghostwhite self-stretch h-[88px] flex flex-row items-center justify-start py-7 px-9 box-border font-poppins text-5xl text-darkgray min-w-[250px]"
                  placeholder="Email"
                  type="text"
                />
                <textarea
                  className="[border:none] bg-ghostwhite h-[267px] w-auto [outline:none] self-stretch flex flex-row items-start justify-start py-[37px] px-9 box-border font-poppins text-5xl text-darkgray"
                  placeholder=" Votre Message"
                  rows={13}
                  cols={38}
                />
                <button className="cursor-pointer [border:none] py-[29px] pr-[359px] pl-[325px] bg-mediumslateblue-300 self-stretch flex flex-row items-center justify-center box-border max-w-full hover:bg-royalblue-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="h-[88px] w-[765px] relative bg-mediumslateblue-300 hidden max-w-full" />
                  <b className="h-[30px] relative text-xl tracking-[0.08em] inline-block font-poppins text-white text-left z-[1] mq450:text-base">
                    Submit
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[606px] flex flex-col items-start justify-start gap-[152px] min-w-[606px] max-w-full text-base text-black font-poppins mq450:gap-[38px] mq900:gap-[76px] mq900:min-w-full mq1650:flex-1">
          <img
            className="self-stretch h-[360.1px] relative max-w-full overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/group-15.svg"
          />
          <div className="w-[491px] flex flex-row items-start justify-start py-0 px-[13px] box-border shrink-0 max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[54px] max-w-full mq450:gap-[27px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[53px] max-w-full mq450:gap-[26px]">
                <div className="self-stretch flex flex-row items-end justify-start gap-[31px] max-w-full mq450:flex-wrap mq450:gap-[15px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[52px] w-[53px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full border-[1px] border-solid border-mediumslateblue-100" />
                    <img
                      className="absolute top-[14.9px] left-[15px] w-[25px] h-[22.6px] z-[1]"
                      alt=""
                      src="/contact-icon.svg"
                    />
                  </button>
                  <div className="h-[38px] flex-1 relative tracking-[0.08em] inline-block min-w-[225px] max-w-full">
                    Casablanca,Ain sbaa Amane 4
                  </div>
                </div>
                <div className="w-[301px] flex flex-row items-center justify-start gap-[29px]">
                  <div className="h-[54px] w-[53px] relative">
                    <img
                      className="absolute top-[12.9px] left-[12px] w-7 h-[21.7px]"
                      loading="eager"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[1] border-[1px] border-solid border-mediumslateblue-100" />
                  </div>
                  <div className="h-[37px] flex-1 relative tracking-[0.08em] inline-block whitespace-nowrap">
                    +212656567758
                  </div>
                </div>
              </div>
              <div className="w-[381px] flex flex-row items-center justify-start gap-[35px] max-w-full mq450:flex-wrap mq450:gap-[17px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[53px] w-[53px] relative">
                  <img
                    className="absolute top-[18.9px] left-[12px] w-7 h-[18.2px]"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[1] border-[1px] border-solid border-mediumslateblue-100" />
                </button>
                <div className="h-[38px] flex-1 relative tracking-[0.08em] inline-block min-w-[157px] whitespace-nowrap">
                  Symplifia@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
