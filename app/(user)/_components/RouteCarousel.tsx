'use client';
import Autoplay from 'embla-carousel-autoplay';

import { Database, Tables } from '@/types/supabase';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import RouteCard from './RouteFrame';
export default function RouteCarousel({
  routes,
}: {
  routes: Tables<'routes'>[];
}) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1500,

          loop: true,
        }),
      ]}
      className="max-w-[100vw] w-[100%] lg:max-w-7xl overflow-hidden sm:overflow-visible md:w-[85%] my-8 justify-center "
    >
      <CarouselContent className="-ml-1 mx-auto justify-center items-center">
        {routes.map((route) => (
          <CarouselItem
            key={route.id}
            className="pl-1  sm:max-h-fit basis-1/2 lg:basis-1/4 "
          >
            <div className="p-1">
              <RouteCard route={route} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
