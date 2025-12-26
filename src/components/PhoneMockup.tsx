import appScreenshot from "@/assets/app-screenshot.png";

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[280px] md:w-[320px]">
      {/* Phone frame */}
      <div className="relative rounded-[3rem] bg-foreground p-3 shadow-xl">
        {/* Inner bezel */}
        <div className="overflow-hidden rounded-[2.5rem] bg-background">
          {/* Screen content */}
          <img
            src={appScreenshot}
            alt="PauseMe app screenshot showing the main interface"
            className="w-full"
          />
        </div>
        {/* Dynamic Island / Notch */}
        <div className="absolute left-1/2 top-5 h-7 w-24 -translate-x-1/2 rounded-full bg-foreground" />
      </div>
    </div>
  );
};

export default PhoneMockup;
