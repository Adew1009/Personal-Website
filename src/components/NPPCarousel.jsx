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

export function NPPCarousel({ parkpage, findpark, visitedparks }) {
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
        <CarouselItem key={parkpage}>
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <img
                  className="rounded-xl shadow-xl shadow-slate-00"
                  src={parkpage}
                  alt="Park Page"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={visitedparks}>
          <div className="p-1">
            <Card>
              <CardContent className="flex  items-center justify-center p-6">
                <img
                  className="rounded-xl shadow-xl shadow-slate-00 "
                  src={visitedparks}
                  alt="Visited Parks Page"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={findpark}>
          <div className="p-1">
            <Card>
              <CardContent className="flex  items-center justify-center p-6">
                <img
                  className="rounded-xl shadow-xl shadow-slate-00 "
                  src={findpark}
                  alt="Find a Park Page"
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
