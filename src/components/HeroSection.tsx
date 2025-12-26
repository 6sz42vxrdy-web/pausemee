import heroPhone from "@/assets/hero-phone.png";
import appIcon from "@/assets/app-icon.png";

const HeroSection = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col items-center text-center">
        <img
          src={appIcon}
          alt="PauseMe app icon"
          className="mb-4 h-20 w-20 rounded-[22%] shadow-lg md:h-24 md:w-24"
        />
        
        <h1 className="mb-4 text-lg font-medium tracking-tight text-foreground md:text-xl">
          PauseMe
        </h1>
        
        <p className="mb-3 max-w-md text-2xl font-semibold leading-snug text-foreground md:text-3xl">
          A moment of calm when your mind won't quiet down.
        </p>
        
        <p className="mb-12 max-w-sm text-base text-muted-foreground md:text-lg">
          Write what's on your mind. Receive a grounded reflection. Find perspective.
        </p>

        <div className="mb-12">
          <img
            src={heroPhone}
            alt="PauseMe app showing a grounded perspective on racing thoughts"
            className="mx-auto w-[280px] rounded-3xl shadow-lg md:w-[320px]"
          />
        </div>

        <a
          href="https://apps.apple.com/app/pauseme"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-12 md:h-14"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
