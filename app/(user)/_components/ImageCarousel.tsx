'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Database } from '@/types/supabase';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import RouteCard from './RouteFrame';
export default function ImageCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,

          loop: true,
        }),
      ]}
      className="max-w-[100vw] w-screen "
    >
      <CarouselContent className="mx-auto flex flex-row relative">
        <CarouselItem className="relative w-screen min-h-[200px] ">
          <Image
            layout="responsive"
            className="-z-10 object-contain sm:object-cover"
            src={
              'https://kxclciyfvlffosmwwgyn.supabase.co/storage/v1/object/public/images/assets/01-Explore.jpg'
            }
            alt={'Guide'}
            height={800}
            width={1280}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </CarouselItem>
        <CarouselItem className="relative  w-screen min-h-[200px]  ">
          <Image
            layout="responsive"
            className="-z-10 object-contain sm:object-cover"
            src={
              'https://kxclciyfvlffosmwwgyn.supabase.co/storage/v1/object/public/images/assets/02-Answer.jpg?t=2024-04-17T05%3A45%3A06.247Z'
            }
            alt={'Guide'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            height={800}
            width={1280}
          />
        </CarouselItem>
        <CarouselItem className="relative w-screen min-h-[200px]  ">
          <Image
            layout="responsive"
            className="-z-10 object-contain sm:object-cover"
            src={
              'https://kxclciyfvlffosmwwgyn.supabase.co/storage/v1/object/public/images/assets/04-Enjoy.jpg'
            }
            alt={'Guide'}
            height={800}
            width={1280}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer left-5 text-white z-30 size-6 sm:size-10 bg-orange-500" />
      <CarouselNext className=" cursor-pointer right-5 text-white z-30 size-6 sm:size-10 bg-orange-500" />
    </Carousel>
  );
}
