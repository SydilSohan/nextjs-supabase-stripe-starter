import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import { CalendarCheck2Icon, ClockIcon, LocateIcon } from 'lucide-react';
import Link from 'next/link';
type Props = {};

const MeetUp = (props: Props) => {
  return (
    <section className="px-4  py-12">
      <Card className="w-full sm:max-w-2xl shadow-2xl mx-auto rounded-lg">
        <CardHeader className="bg-gray-100 py-2  w-full flex justify-center rounded-lg">
          <Image
            className="mx-auto"
            src="/Meetup.png"
            alt="meetup"
            width={100}
            height={50}
          />
        </CardHeader>
        <CardContent>
          <CardDescription className="py-4 text-sm sm:text-lg font-normal">
            Ready to ditch the same old bar scene?{' '}
            <Link
              className="text-primary font-bold"
              target="_blank"
              href={'https://www.meetup.com/bierdiplom-pub-crawls/'}
            >
              Join
            </Link>{' '}
            Bierdiplom on our next Meetup pub crawl! Explore a vibrant
            neighborhood, sample unique brews, and discover your city&apos;s
            best spots with like-minded adventurers. Our app is your guide,
            turning every crawl into a chance to build friendships and
            unforgettable memories. It&apos;s the perfect way to meet fellow
            beer enthusiasts, discover new favorite brews, and turn an ordinary
            night into an urban adventure. Check out our upcoming events, book
            the route you like and join us for a night of laughter, shared
            experiences, and maybe even your new favorite beer.
          </CardDescription>
        </CardContent>
        <CardFooter className="flex gap-2 justify-center text-primary">
          <ClockIcon className="size-14" strokeWidth={0.7} />
          <CalendarCheck2Icon className="size-14" strokeWidth={0.7} />
          <LocateIcon className="size-14" strokeWidth={0.7} />
        </CardFooter>
      </Card>
    </section>
  );
};

export default MeetUp;
