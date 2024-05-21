'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { ReviewCard } from './ReviewCard';
import { Reviews } from '@/app/(user)/routes/[routeName]/[routeId]/page';
export default async function RouteCarousel({ reviews }: { reviews: Reviews }) {
  return (
    <section className="bg-muted w-full flex justify-center flex-col items-center py-12">
      <h3 className="text-3xl">
        <span className="text-primary">Reviews</span> on this route
      </h3>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,

            loop: true,
          }),
        ]}
        className="max-w-[100vw] w-[100%]  overflow-hidden sm:overflow-visible  my-8 justify-center  lg:max-w-screen-xl"
      >
        <CarouselContent className="-ml-1 mx-auto py-4">
          {reviews?.map((review) => (
            <CarouselItem
              key={review.id}
              className="pl-1  sm:max-h-fit   md:basis-1/2"
            >
              <ReviewCard review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
