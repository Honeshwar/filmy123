import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Help = () => {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Help Center
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-tubiPurple/40 p-6 rounded-lg border border-white/10 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Getting Started
            </h3>
            <p className="text-white/80">
              Learn how to create an account and start streaming.
            </p>
          </div>

          <div className="bg-tubiPurple/40 p-6 rounded-lg border border-white/10 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Technical Support
            </h3>
            <p className="text-white/80">
              Troubleshoot common streaming and playback issues.
            </p>
          </div>

          <div className="bg-tubiPurple/40 p-6 rounded-lg border border-white/10 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Account Management
            </h3>
            <p className="text-white/80">
              Update your profile, preferences, and account settings.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                Is Tubi Vision really free?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Yes, Tubi Vision is completely free to use. We&apos;re supported
                by advertisements, which allows us to provide our extensive
                library of movies and TV shows without requiring a subscription
                fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                Do I need to create an account?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                While you can browse and watch content without an account,
                creating one allows you to save favorites, track your viewing
                history, and receive personalized recommendations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                What devices can I watch Tubi Vision on?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Tubi Vision is available on most modern web browsers, mobile
                devices (iOS and Android), smart TVs, and streaming devices like
                Roku, Apple TV, and Fire TV.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                Why am I seeing advertisements?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Tubi Vision is ad-supported, which allows us to offer our
                service for free. We strive to keep ad breaks brief and relevant
                to provide the best viewing experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                Can I download content to watch offline?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Currently, Tubi Vision does not support downloading content for
                offline viewing. You need an internet connection to stream our
                content.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center p-8 bg-tubiPurple/40 rounded-lg border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-white/80 mb-6">
            Our support team is ready to assist you with any questions or
            issues.
          </p>
          <a
            href="/contact"
            className="inline-block bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90 px-6 py-2 rounded-md font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
};

export default Help;
