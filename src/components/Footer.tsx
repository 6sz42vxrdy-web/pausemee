const Footer = () => {
  return (
    <footer className="container py-12 md:py-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-base font-medium text-foreground">PauseMe</p>
        
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:gap-6">
          <a href="mailto:support@pauseme.app" className="transition-colors hover:text-foreground">
            support@pauseme.app
          </a>
          <a href="/privacy" className="transition-colors hover:text-foreground">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
