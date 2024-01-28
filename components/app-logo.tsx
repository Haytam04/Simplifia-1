import type { NextPage } from "next";

const AppLogo: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[123px] box-border max-w-full">
      <header className="flex-1 bg-white flex flex-row items-center justify-between py-4 px-[220px] box-border gap-[20px] max-w-full sticky top-[0] z-[99] text-left text-5xl text-mediumslateblue-300 font-dm-sans mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[55px] mq900:pr-[55px] mq900:box-border mq1300:pl-[110px] mq1300:pr-[110px] mq1300:box-border">
        <div className="h-[73px] w-[97px] flex flex-row items-center justify-between">
          <img
            className="h-[179px] w-[190px] relative object-cover"
            loading="eager"
            alt=""
          />
        </div>
        <div className="h-[60px] w-[1000px] flex flex-row items-center justify-start gap-[60px] max-w-full mq900:w-[750px] mq1300:w-[427.6399999999999px] mq1300:gap-[30px]">
          <div className="w-[572.36px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1300:hidden">
            <div className="w-[51px] flex flex-row items-center justify-start">
              <h3 className="m-0 relative text-inherit leading-[23px] font-medium font-inherit shrink-0">
                Home
              </h3>
            </div>
            <div className="flex flex-row items-center justify-start">
              <h3 className="m-0 relative text-inherit leading-[23px] font-medium font-inherit">
                Services
              </h3>
            </div>
            <div className="flex flex-row items-center justify-start">
              <h3 className="m-0 relative text-inherit leading-[23px] font-medium font-inherit">
                Utilitys
              </h3>
            </div>
            <div className="flex flex-row items-center justify-start">
              <h3 className="m-0 relative text-inherit leading-[23px] font-medium font-inherit">
                Pricing
              </h3>
            </div>
            <div className="flex flex-row items-center justify-start">
              <h3 className="m-0 relative text-inherit leading-[23px] font-medium font-inherit whitespace-pre-wrap shrink-0">
                Contact Us
              </h3>
            </div>
          </div>
          <div className="self-stretch w-20" />
          <div className="self-stretch w-[250px] flex flex-row items-start justify-end py-0 pr-0 pl-[33px] box-border gap-[24px] mq900:hidden">
            <button className="cursor-pointer [border:none] py-4 px-6 bg-mediumslateblue-300 self-stretch rounded-lg flex flex-row items-center justify-center hover:bg-royalblue-100">
              <div className="relative text-lg tracking-[-0.02em] leading-[23px] font-medium font-paragraph-p3-regular text-whitesmoke-300 text-left">
                Login
              </div>
            </button>
            <button className="cursor-pointer p-4 bg-gray-400 self-stretch flex-1 rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-mediumslateblue-300 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue-100">
              <div className="relative text-lg tracking-[-0.02em] leading-[23px] font-medium font-paragraph-p3-regular text-mediumslateblue-300 text-left whitespace-nowrap">
                sign up
              </div>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default AppLogo;
