const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-12 md:py-20">
        <article className="mx-auto max-w-2xl">
          <h1 className="mb-8 text-3xl font-semibold text-foreground md:text-4xl">
            Privacy Policy
          </h1>
          
          <p className="mb-8 text-sm text-muted-foreground">
            Last updated: December 2024
          </p>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-medium text-foreground">Introduction</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              PauseMe is designed to give you a moment of calm when your mind won't quiet down. 
              We believe privacy is essential to feeling safe, so we've built PauseMe with your 
              peace of mind at the centre.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This policy explains what information we collect, how we use it, and how we keep it safe. 
              We've kept it simple and straightforward.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-medium text-foreground">Information We Collect</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              PauseMe does not require you to create an account or log in. You can use the app 
              without providing any personal information.
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              When you use PauseMe, you may choose to type your thoughts into the app. This text 
              is the only information we receive from you, and only when you choose to share it.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not collect your name, email address, location, or any other personal details 
              through the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-medium text-foreground">How We Use Information</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              The text you enter is used for one purpose only: to generate a short, grounded 
              reflection to help you gain perspective.
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Your text is processed in real time and is not stored long-term. Once your 
              reflection is generated, your original text is not retained.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not use your information for advertising, marketing, or any other purpose 
              beyond providing you with a helpful response.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-medium text-foreground">Data Storage and Security</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              PauseMe does not maintain user accounts or store your conversations long-term. 
              Your thoughts remain your own.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We use industry-standard security measures to protect any data that passes through 
              our systems during the brief moment it takes to generate your reflection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-medium text-foreground">Third-Party Services</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              PauseMe uses AI technology to generate reflections. When you submit text, it is 
              processed by our AI service provider to create your response. This processing 
              happens securely and your text is not stored by these services.
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              We do not use third-party advertising or tracking services. There are no ads in 
              PauseMe, and we do not share or sell your information to anyone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              PauseMe is not a medical service, therapy, or substitute for professional mental 
              health care. If you are in crisis, please reach out to a qualified professional 
              or emergency service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-medium text-foreground">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              PauseMe is not directed at children under 13. We do not knowingly collect 
              information from children. If you believe a child has provided us with information, 
              please contact us and we will take steps to remove it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-medium text-foreground">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              If we make changes to this policy, we will update this page with the new version. 
              We encourage you to review this policy from time to time. Continued use of PauseMe 
              after any changes means you accept the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-medium text-foreground">Contact Information</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              If you have any questions about this privacy policy or how PauseMe handles your 
              information, please get in touch.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Email:{" "}
              <a 
                href="mailto:support@pauseme.app" 
                className="text-foreground underline transition-colors hover:text-muted-foreground"
              >
                support@pauseme.app
              </a>
            </p>
          </section>

          <div className="mt-12 border-t border-border pt-8">
            <a 
              href="/" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back to PauseMe
            </a>
          </div>
        </article>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
