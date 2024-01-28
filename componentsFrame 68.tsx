import type { NextPage } from "next";

const Pricing: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border max-w-full text-center text-53xl text-mediumslateblue-300 font-paragraph-p3-regular">
      <div className="flex-1 flex flex-col items-center justify-center py-[140px] px-5 box-border gap-[60px] max-w-full z-[2] mq900:gap-[30px] mq900:pt-[59px] mq900:pb-[59px] mq900:box-border mq1300:pt-[91px] mq1300:pb-[91px] mq1300:box-border">
        <div className="w-[1481px] flex flex-col items-center justify-start min-h-[162px] max-w-full">
          <h1 className="m-0 self-stretch h-[87px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block mq450:text-24xl mq900:text-39xl">
            Nos Prix
          </h1>
        </div>
        <div className="w-[1481px] flex flex-row flex-wrap items-center justify-center gap-[32px] max-w-full text-left text-5xl text-gray-300 mq900:gap-[16px]">
          <div className="flex-1 rounded-3xs bg-white box-border flex flex-col items-start justify-center py-10 pr-[45px] pl-[43px] gap-[25px] min-w-[354px] max-w-full border-[1px] border-solid border-royalblue-200 mq450:min-w-full mq900:py-[26px] mq900:pr-[22px] mq900:pl-[21px] mq900:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-lgi mq450:leading-[29px]">
                Free
              </h3>
              <b className="self-stretch h-11 relative text-17xl tracking-[-0.02em] inline-block text-royalblue-200 whitespace-nowrap mq450:text-3xl mq900:text-10xl">
                $0
              </b>
              <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[23px] font-medium">
                Capture ideas and find them quickly
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full text-base">
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative"
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block max-w-[calc(100%_-_37px)]">
                  Sync unlimited devices
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative"
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block max-w-[calc(100%_-_37px)]">
                  10 GB monthly uploads
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative"
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block max-w-[calc(100%_-_37px)]">
                  200 MB max. note size
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full mq450:flex-wrap">
                <img
                  className="h-[18px] w-[18px] relative"
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block min-w-[226px] max-w-full">
                  Customize Home dashboard and access extra widgets
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative"
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block max-w-[calc(100%_-_37px)]">
                  Connect primary Google Calendar account
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full mq450:flex-wrap">
                <img
                  className="h-[18px] w-[18px] relative"
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block min-w-[226px] max-w-full">{`Add due dates, reminders, and notifications to your tasks
 `}</div>
              </div>
            </div>
            <button className="cursor-pointer py-4 px-[37px] bg-white rounded-lg flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-royalblue-200 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dodgerblue">
              <div className="relative text-base tracking-[-0.02em] font-medium font-paragraph-p3-regular text-royalblue-200 text-left">
                Get Started
              </div>
            </button>
          </div>
          <div className="flex-1 rounded-3xs bg-royalblue-200 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-center py-20 px-11 box-border gap-[25px] min-w-[354px] max-w-full text-white mq450:pt-[34px] mq450:pb-[34px] mq450:box-border mq450:min-w-full mq900:py-[52px] mq900:px-[22px] mq900:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-lgi mq450:leading-[29px]">
                Personal
              </h3>
              <b className="self-stretch h-11 relative text-17xl tracking-[-0.02em] inline-block whitespace-nowrap mq450:text-3xl mq900:text-10xl">
                $11.99
              </b>
              <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[23px] font-medium">
                Keep home and family on track
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full text-lg">
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative"
                  alt=""
                  src="/icon-6.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[23px] font-medium inline-block max-w-[calc(100%_-_37px)]">
                  Sync unlimited devices
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative"
                  alt=""
                  src="/icon-6.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[23px] font-medium inline-block max-w-[calc(100%_-_37px)]">
                  10 GB monthly uploads
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full">
                <img
                  className="h-[18px] w-[18px] relative"
                  alt=""
                  src="/icon-6.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[23px] font-medium inline-block max-w-[calc(100%_-_37px)]">
                  200 MB max. note size
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full mq450:flex-wrap">
                <img
                  className="h-[18px] w-[18px] relative"
                  alt=""
                  src="/icon-9.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[23px] font-medium inline-block min-w-[226px] max-w-full">
                  Customize Home dashboard and access extra widgets
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full mq450:flex-wrap">
                <img
                  className="h-[18px] w-[18px] relative"
                  alt=""
                  src="/icon-9.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[23px] font-medium inline-block min-w-[224px] max-w-full">
                  Connect primary Google Calendar account
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full mq450:flex-wrap">
                <img
                  className="h-[18px] w-[18px] relative"
                  loading="eager"
                  alt=""
                  src="/icon-9.svg"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[23px] font-medium inline-block min-w-[201px] max-w-full">{`Add due dates, reminders, and notifications to your tasks
 `}</div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 px-[39px] bg-mediumslateblue-300 rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-royalblue-100">
              <div className="relative text-base tracking-[-0.02em] font-medium font-paragraph-p3-regular text-white text-left">
                Get Started
              </div>
            </button>
          </div>
          <div className="flex-1 rounded-3xs bg-white box-border flex flex-col items-start justify-center py-10 pr-[45px] pl-[43px] gap-[25px] min-w-[354px] max-w-full border-[1px] border-solid border-royalblue-200 mq450:min-w-full mq900:py-[26px] mq900:pr-[22px] mq900:pl-[21px] mq900:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-lgi mq450:leading-[29px]">
                Organization
              </h3>
              <b className="self-stretch h-11 relative text-17xl tracking-[-0.02em] inline-block text-royalblue-200 whitespace-nowrap mq450:text-3xl mq900:text-10xl">
                $49.99
              </b>
              <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[23px] font-medium">
                Capture ideas and find them quickly
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full text-base">
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full">
                <input
                  className="m-0 h-[18px] w-[18px] relative"
                  type="checkbox"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block max-w-[calc(100%_-_37px)]">
                  Sync unlimited devices
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full">
                <input
                  className="m-0 h-[18px] w-[18px] relative"
                  type="checkbox"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block max-w-[calc(100%_-_37px)]">
                  10 GB monthly uploads
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full">
                <input
                  className="m-0 h-[18px] w-[18px] relative"
                  type="checkbox"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block max-w-[calc(100%_-_37px)]">
                  200 MB max. note size
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full mq450:flex-wrap">
                <input
                  className="m-0 h-[18px] w-[18px] relative"
                  type="checkbox"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block min-w-[226px] max-w-full">
                  Customize Home dashboard and access extra widgets
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full">
                <input
                  className="m-0 h-[18px] w-[18px] relative"
                  type="checkbox"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block max-w-[calc(100%_-_37px)]">
                  Connect primary Google Calendar account
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] max-w-full mq450:flex-wrap">
                <input
                  className="m-0 h-[18px] w-[18px] relative"
                  type="checkbox"
                />
                <div className="flex-1 relative tracking-[-0.02em] leading-[20px] inline-block min-w-[226px] max-w-full">{`Add due dates, reminders, and notifications to your tasks
 `}</div>
              </div>
            </div>
            <button className="cursor-pointer py-4 px-[37px] bg-white rounded-lg flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-royalblue-200 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dodgerblue">
              <div className="relative text-base tracking-[-0.02em] font-medium font-paragraph-p3-regular text-royalblue-200 text-left">
                Get Started
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
