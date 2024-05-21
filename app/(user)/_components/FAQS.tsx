import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export default function FAQs() {
  const faqsList = [
    {
      question: 'Will it work on my phone?',
      answer:
        'Absolutely. We designed Brews & Clues to work on any smartphone without the need to download an app. As long as you can get on the internet, you can access the tour.',
    },
    {
      question: 'How long does it take?',
      answer:
        "Tours typically take 2-3 hours to complete, but you're in control. Start anytime and go at your own pace. Need a break? Take one. Want to stay for an extra drink? Go for it.",
    },
    {
      question: "What's included on the tour?",
      answer:
        'Your team ticket includes your interactive tour and trivia game - designed to deliver a few hours of fun while you explore the city and enjoy a few drinks along the way.',
    },
    {
      question: 'Do I need to be 21 to play?',
      answer:
        "To complete the tour, you'll need to go in and out of bars, pubs and tap rooms. Some of those places, depending on the time of day, may restrict entry to anyone under 21.",
    },
    {
      question: 'How does it actually work?',
      answer:
        "Meet at the starting location, create a team name, and log in. Then we'll serving up trivia questions and scavenger hunts as you make your way through the city.",
    },
    {
      question: "Why aren't drinks included?",
      answer:
        "Not everyone wants the same drink (or number of drinks). We've designed the tour experience, but you get to decide how to spend your money along your route.",
    },
  ];

  return (
    <section
      id="faqs-section"
      className="px-4 py-12 lg:px-0 lg:py-14   w-full  bg-gray-50 border-y-[1px] border-gray-200 "
    >
      <div className="max-w-screen-xl flex flex-col gap-4 justify-between  mx-auto">
        <div className="max-w-lg">
          <h3 className="mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Frequently asked questions
          </h3>
          <div className="mt-3 text-gray-600 dark:text-gray-400">
            <p>
              Can&apos;t find the answer you&apos;re looking for? feel free to{' '}
              <Link
                className="text-primary font-semibold whitespace-nowrap"
                href="info@bierdiplom.com"
              >
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="divide-y  flex flex-col sm:flex-row justify-center sm:gap-12  ">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col w-full flex-1"
          >
            {faqsList.splice(0, 3).map((list, i) => (
              <AccordionItem key={i} value={list.answer}>
                <AccordionTrigger className="hover:text-primary">
                  {list.question}
                </AccordionTrigger>
                <AccordionContent>{list.answer}</AccordionContent>
              </AccordionItem>
            ))}{' '}
          </Accordion>
          <Accordion type="single" collapsible className="flex-1 w-full">
            {faqsList.splice(0, 3).map((list, i) => (
              <AccordionItem key={i} value={list.answer}>
                <AccordionTrigger className="hover:text-primary">
                  {list.question}
                </AccordionTrigger>
                <AccordionContent>{list.answer}</AccordionContent>
              </AccordionItem>
            ))}{' '}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
