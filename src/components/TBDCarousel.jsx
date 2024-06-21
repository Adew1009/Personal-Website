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

export function TBDCarousel({ budgetImage, tableImage, calendarImage }) {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
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
              <CardContent className="flex  items-center justify-center">
                <img
                  className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                  src={calendarImage}
                  alt="data table"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={budgetImage}>
          <div className="p-1">
            <Card>
              <CardContent className="flex  items-center justify-center">
                <img
                  className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                  src={budgetImage}
                  alt="data table"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem key={budgetImage}>
          <div className="p-1">
            <Card>
              <CardContent className="flex  items-center justify-center">
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
