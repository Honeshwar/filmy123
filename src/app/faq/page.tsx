import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                Is Filmy123 Vision really free?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Yes, Filmy123 Vision is completely free to use. We&apos;re
                supported by advertisements, which allows us to provide our
                extensive library of movies and TV shows without requiring a
                subscription fee.
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
                What devices can I watch Filmy123 Vision on?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Filmy123 Vision is available on most modern web browsers, mobile
                devices (iOS and Android), smart TVs, and streaming devices like
                Roku, Apple TV, and Fire TV.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                Why am I seeing advertisements?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Filmy123 Vision is ad-supported, which allows us to offer our
                service for free. We strive to keep ad breaks brief and relevant
                to provide the best viewing experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                Can I download content to watch offline?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Currently, Filmy123 Vision does not support downloading content
                for offline viewing. You need an internet connection to stream
                our content.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                How often is new content added?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                We add new movies and TV shows to our library regularly. Check
                back frequently to discover new content, or create an account to
                receive notifications about new additions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                What is the streaming quality?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Filmy123 Vision offers streaming quality up to 1080p (Full HD),
                depending on your internet connection and the device you&apos;re
                using. Our adaptive streaming technology adjusts the quality to
                provide the best experience based on your current connection
                speed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                Is Filmy123 Vision available internationally?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Filmy123 Vision is available in many countries, though our
                content library may vary by region due to licensing agreements.
                We&apos;re continuously working to expand our international
                presence.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                Can I watch Filmy123 Vision on multiple devices simultaneously?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Yes, you can stream Filmy123 Vision on multiple devices at the
                same time using the same account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-tubiYellow">
                How do I report technical issues?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                If you experience technical difficulties while using Filmy123
                Vision, please visit our Help Center or contact our support team
                through the Contact Us page. Be sure to include details about
                the issue, your device, and browser or app version to help us
                resolve the problem quickly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
