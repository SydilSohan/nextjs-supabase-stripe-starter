import ScrollLink from '@/components/ui/ScrollLink';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function NewHeader() {
  return (
    <section className="relative w-screen pb-4">
      <div className="max-w-screen-xl sm:min-h-[90vh] mx-auto px-4   gap-6  overflow-hidden md:px-8 md:flex justify-center items-center flex flex-col-reverse md:flex-row z-20">
        <div className=" space-y-5 max-w-screen-sm flex justify-center flex-col items-center gap-4 lg:gap-10">
          <h1 className="text-3xl pt-8  text-primary text-center font-extrabold sm:text-6xl  capitalize">
            The Ultimate Pub Crawl Challenge with a German Twist: Bierdiplom
          </h1>
          <p className="backdrop-blur-sm text-center bg-orange-200 bg-opacity-25 border-[1px] border-orange-200 border-opacity-20 px-2 lg:px-12 py-2 text-sm lg:text-lg text-white w-fit rounded-full">
            Explore, Savor Unique Beers, Earn Your BierDiplom- Your Phone Guides
            The Way!
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm justify-center">
            <Button asChild>
              <ScrollLink href="/#routes-section">
                See Our Crawls
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </ScrollLink>
            </Button>
          </div>
        </div>

        <Image
          priority
          fill
          alt=""
          className=" -z-10   brightness-50 object-cover"
          src="https://kxclciyfvlffosmwwgyn.supabase.co/storage/v1/object/public/images/assets/pexels-pavel-danilyuk-5858163.jpg"
        />
      </div>
    </section>
  );
}
