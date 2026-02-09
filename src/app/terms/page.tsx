const Terms = () => {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Disclaimer
        </h1>

        <div className="prose prose-invert max-w-none">
          {/* <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Disclaimer  Terms of Use
          </h2> */}
          <p className="text-white/80 mb-6">
            Welcome to <strong>Filmy123</strong>. Please read this disclaimer
            carefully before using our website.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            1. No Hosted Content
          </h2>
          <p className="text-white/80 mb-6">
            Filmy123{" "}
            <strong>
              does not host or upload any videos, movies, or TV shows
            </strong>{" "}
            on its own servers. All the content provided on our website is{" "}
            <strong>freely available on the internet</strong> and is sourced via{" "}
            <strong>third-party and publicly accessible links</strong>. We
            simply organize and present content already available online in a
            user-friendly manner.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            2. Third-Party Links
          </h2>
          <p className="text-white/80 mb-6">
            All video links and streaming sources are hosted by{" "}
            <strong>external websites</strong> that are not affiliated with
            Filmy123. We do <strong>not control or own</strong> any of the media
            content and are not responsible for the accuracy, availability,
            legality, or quality of content on third-party websites. If you find
            any content that infringes copyright laws or violates any policies,
            please contact the source website directly.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            3. No Responsibility
          </h2>
          <p className="text-white/80 mb-2">Filmy123 is not liable for:</p>
          <ul className="list-disc pl-5 text-white/80 mb-6 space-y-1">
            <li>Any legal issues arising from the use of third-party links.</li>
            <li>Any damage caused to your device while using the site.</li>
            <li>The unavailability or inaccuracy of linked content.</li>
          </ul>
          <p className="text-white/80 mb-6">
            Use the site <strong>at your own discretion and risk</strong>.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            4. Content Ownership
          </h2>
          <p className="text-white/80 mb-6">
            All content, logos, trademarks, and media referenced or linked to on
            Filmy123 belong to their respective owners. We do{" "}
            <strong>not claim ownership</strong> or rights over any third-party
            content.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            5. Consent
          </h2>
          <p className="text-white/80 mb-6">
            By using our website, you hereby consent to our{" "}
            <strong>disclaimer</strong> and agree to its terms.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Update</h2>
          <p className="text-white/80 mb-6">
            This Disclaimer was last updated on <strong>April 17, 2025</strong>.
            We reserve the right to update or change this at any time without
            prior notice.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Terms;
