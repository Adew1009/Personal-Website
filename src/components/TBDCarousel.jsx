import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TBDCarousel({ tableImage, calendarImage, budgetImage }) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem key={calendarImage}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img
                  className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                  src={calendarImage}
                  alt="data table"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={tableImage}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img
                  className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                  src={tableImage}
                  alt="data table"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={budgetImage}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img
                  className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                  src={budgetImage}
                  alt="data table"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
