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

export function CodeCarousel({ code1, code2 }) {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section className="SF heading text-4xl home-content animated-image2">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem key={code2}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center">
                  <img
                    className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                    src={code2}
                    alt="data table"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>{" "}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
