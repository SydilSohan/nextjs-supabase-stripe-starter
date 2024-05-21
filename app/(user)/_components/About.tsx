import { Button } from '@/components/ui/button';
import Image from 'next/image';
import NewImage from '@/components/global/Image';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PartyPopper } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

type Props = {};

const About = (props: Props) => {
  return (
    <section className=" px-4 py-12 lg:px-0 lg:py-14   w-full  bg-gray-50 border-y-[1px] border-gray-200 ">
      <div className="max-w-screen-xl flex flex-col lg:flex-row gap-4 justify-between  mx-auto">
        <article className=" ">
          <h3 className="border-primary border-b-2 text-3xl font-bold  lg:text-4xl leading-10 pb-2 mb-4 w-fit">
            What is a Bierdiplom?
          </h3>
          <div className="leading-relaxed text-gray-700 w-full  lg:max-w-xl">
            <p className=" ">
              The concept of Bierdiplom, or &quot;Beer Diploma,&quot; originates
              from Germany and embodies a celebration of beer culture,
              knowledge, and camaraderie. Participants embark on a journey
              through various breweries, beer gardens, and pubs, sampling a wide
              array of beer styles. To earn their Bierdiplom, participants
              typically complete a series of challenges or tasks, which may
              include blind tastings, beer quizzes, collecting pub stamps,
              Kneipenstempel and demonstrating knowledge about different beer
              styles and brewing techniques, all while enjoying delicious craft
              beer and fun times with friends.
              <br />
              <br />
            </p>
            <p className="">
              We&apos;ve taken this beloved German tradition and given it a
              modern twist, allowing participants to embark on Bierdiplom
              journeys using their smartphones. Our innovative app guides users
              through curated routes, challenges them with tasks &amp; quizzes,
              and rewards them for their exploration of the vibrant world of
              craft beer. Join us as we bring the spirit of Bierdiplom to the
              USA, combining tradition with innovation for an unforgettable
              beer-centric pub crawl experience. It&apos;s the ultimate blend of
              exploration, beer education, and a touch of German tradition!
            </p>
            <Dialog modal>
              <DialogTrigger asChild>
                <Button variant={'outline'} className="mt-4">
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="p-2 sm:p-4 md:max-w-xl  lg:max-w-3xl sm:w-full w-screen text-left max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle>
                    <PartyPopper
                      size={50}
                      className="text-primary mb-2"
                      strokeWidth={0.5}
                    />
                    <h2 className="text-3xl text-left">
                      {' '}
                      Your Passport to Pub Crawl Glory!
                    </h2>{' '}
                  </DialogTitle>
                  <ScrollArea className="w-full h-[50vh] max-h-[50vh] shadow-inner  mt-4">
                    <DialogDescription className="leading-relaxed text-sm lg:text-lg text-left p-2">
                      Your Passport to Pub Crawl Glory! Inspired by the rich pub
                      culture of Germany, a Bierdiplom is a certificate awarded
                      for completing our curated, self-guided pub crawls.
                      It&apos;s more than just a piece of paper; it&apos;s a
                      symbol of your journey! Explore like a local with our web
                      app guiding you to hidden gems, unlocking interesting
                      facts about the pubs and the surrounding areas. Each stop
                      features a carefully chosen drink option, allowing you to
                      sample a variety of brews - from classic German lagers to
                      adventurous local craft beers. As you embark on this
                      beer-fueled adventure, you&apos;ll learn about different
                      styles, brewing traditions, and how to appreciate the
                      finer points of a good pint. With every pub you visit and
                      drink you complete (responsibly, of course!), you progress
                      towards earning your prestigious Bierdiplom. This
                      certificate signifies you as an urban explorer who
                      conquered the city&apos;s pub scene, a beer connoisseur
                      with an expanded knowledge base, and a city enthusiast
                      with a deeper appreciation for its unique pub culture and
                      historical significance. It&apos;s the ultimate blend of
                      exploration, beer education, and a touch of German
                      tradition!lay
                    </DialogDescription>
                  </ScrollArea>
                </DialogHeader>
                <DialogFooter className="flex items-end justify-end">
                  <DialogClose>
                    <Button variant={'outline'}>Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </article>
        <Image
          className="rounded-md shadow-lg shadow-primary max-h-72 object-cover"
          src="https://kxclciyfvlffosmwwgyn.supabase.co/storage/v1/object/public/images/assets/pexels-tembela-bohle-1089930%20(1).jpg"
          alt="Bierdiplom"
          width={400}
          height={800}
        />
      </div>
    </section>
  );
};

export default About;
