import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ClientType = {
  commentPlaceholder?: string;
  avater?: string;
  malak?: string;
  syndicDAppartement90AinDi?: string;

  /** Style props */
  propBorderBottom?: CSSProperties["borderBottom"];
  propColor?: CSSProperties["color"];
};

const Client: NextPage<ClientType> = ({
  commentPlaceholder,
  avater,
  malak,
  syndicDAppartement90AinDi,
  propBorderBottom,
  propColor,
}) => {
  const commentStyle: CSSProperties = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
    };
  }, [propBorderBottom]);

  const malakStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="flex-1 rounded-3xs bg-whitesmoke-200 flex flex-col items-start justify-start py-[60px] px-10 box-border gap-[60px] min-w-[364px] max-w-full text-left text-5xl text-black font-paragraph-p3-regular mq450:pt-[140px] mq450:pb-[39px] mq450:box-border mq450:min-w-full mq900:gap-[30px]">
      <textarea
        className="[border:none] bg-[transparent] h-[137px] w-auto [outline:none] self-stretch box-border flex flex-col items-start justify-start font-paragraph-p3-regular text-5xl text-gray-500 border-b-[1px] border-solid border-gray-300"
        placeholder={commentPlaceholder}
        rows={7}
        cols={20}
        style={commentStyle}
      />
      <div className="w-[383px] flex flex-row items-end justify-start gap-[42px] max-w-full mq450:flex-wrap mq450:gap-[21px]">
        <img
          className="h-[95px] w-[95px] relative rounded-[50%] object-cover min-h-[95px]"
          loading="eager"
          alt=""
          src={avater}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[160px] min-h-[95px]">
          <h3
            className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-lgi mq450:leading-[29px]"
            style={malakStyle}
          >
            {malak}
          </h3>
          <div className="relative text-base tracking-[-0.02em] leading-[20px] text-gray-500">
            {syndicDAppartement90AinDi}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
