import {
  TicketCheck,
  MapIcon,
  BookOpenCheck,
  MessageSquareHeartIcon,
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
export default function NewFeatures() {
  const features = [
    {
      icon: <MapIcon className="size-14" strokeWidth={0.7} />,
      title: 'Book a Route ',
      description:
        'Our pub crawl routes vary in difficulty with the easiest routes (Bachelor level) consisting of only 5-6 bars stops, ranging from 1-2 miles walking distance and requiring 2-3 hours to complete, to our most difficult routes (PhD) consisting of 10 bar stops, 2-3 miles distance and requiring 3-4 hours to complete. Book a route that you would feel most comfortable with. Once checkout is complete, you will unlock full access to the route and be able to see all pub stops, the route beer list (including a variety of brews to sample- from  classic German lagers to adventurous, local craft beers), Kneipenpass (stamp card), exam prep guide, final quiz (administered on the web app) and instructions you need to follow to successfully complete the route and receive your Bierdiplom.',
    },
    {
      icon: <TicketCheck className="size-14" strokeWidth={0.7} />,
      title: 'Collect Stamps ',
      description:
        'Before you being the pub crawl, you will need to download and print your &apos;Kneipenpass.&apos; This would have designated spaces for collecting stamps. Our web app will guide you through a curated list of participating pubs in a specific neighborhood/s, often focused on local or unique spots. Upon entering each pub, youd present your Kneipenpass to the bartender or a designated person. After ordering a drink (responsibly, of course!), youd get a unique stamp for that pub in your Kneipenpass. Visit all pubs on the crawl, collect their corresponding stamps in your Kneipenpass, complete all drinks, and upload your Kneipenpass to our website before the countdown timer expires.',
    },
    {
      icon: <BookOpenCheck className="size-14" strokeWidth={0.7} />,
      title: 'Pass the Exam:',
      description:
        'Uploading the stamp collection certificate will unlock the Bierdiplom exam consisting of two parts- Pat 1: Blind Beer Tastings- you will sample 3 beers and must guess at least 1 correctly. Part 2- Beer & Route Knowledge- you will have to answer at least 2 out of 7 questions correctly. To prepare for the final exam, carefully read through the exam prep guide section- with every pub you visit and drink you complete (responsibly, of course!), you&apos;ll learn about different beer styles, brewing traditions, as well as the history and landmarks of the neighborhoods you explore and pubs you visit.',
    },
    {
      icon: <MessageSquareHeartIcon className="size-14" strokeWidth={0.7} />,
      title: 'Post a Review',
      description:
        ' Upon successfully completing the exam, in the final step of the route you will be asked to leave us a review of your experience, so we know what where we need to focus to continuously improve our routes. Uploading your Kneipenpass, successfully passing the exam and leaving us a review must be completed before the designated time for each route has expired. After meeting these requirements, we will validate if you have collected all stamps from all pub stops and will issue your Bierdiplom certificate.',
    },

    // Add more features here
  ];
  return (
    <section id="process-section" className="py-14  overflow-x-hidden p-4">
      <div className="max-w-xl mx-auto space-y-3 sm:text-center">
        <h3 className="text-primary font-semibold">Process</h3>
        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          How Does it Work?
        </p>
        <p>
          Get your friends together and create your team name on the app. From
          there, we&apos;ll guide you through city and share some of its most
          interesting history as you learn and explore.
        </p>
      </div>
      <div className="mt-12">
        <div className="flex flex-row flex-wrap  max-w-screen-xl lg:w-[1280px]  gap-2  justify-start sm:justify-center items-start">
          {features.map((item, idx) => (
            <Card
              className="border-orange-200 group max-h-72 hover:max-h-[1000px] max-w-full sm:max-w-[48%] lg:max-w-[23%] transition-all duration-700 ease-in-out overflow-hidden flex  flex-col self-start justify-self-start justify-start items-start "
              key={idx}
            >
              <CardHeader className="flex flex-col flex-1  justify-center items-center text-center mx-auto relative cursor-pointer gap-4">
                <div
                  className={`size-20  lg:size-24 bg-orange-100 text-primary rounded-lg flex items-center justify-center ${
                    idx === features.length - 1 ? 'md:after:hidden' : ''
                  }`}
                >
                  {item.icon}
                </div>
                <h4
                  dangerouslySetInnerHTML={{ __html: item.title }}
                  className="text-xl my-5 text-gray-800 font-semibold text-center"
                />
              </CardHeader>
              <CardContent className="group-hover:hidden w-full text-sm transition-all    group-hover:opacity-100 duration-700  text-center text-gray-500  ">
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.description.substring(0, 100) + '...',
                  }}
                ></p>
              </CardContent>
              <CardContent className="break-normal w-full text-sm transition-all   opacity-0 group-hover:opacity-100 duration-700  text-center text-gray-700  ">
                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
