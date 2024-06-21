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

export function DewCarousel({ dew1, dew2, dew3, dew4, dew5, dew6, dew7 }) {
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
          <CarouselItem key={dew1}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center">
                  <img
                    className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                    src={dew1}
                    alt="data table"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key={dew2}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center">
                  <img
                    className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                    src={dew2}
                    alt="data table"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>{" "}
          <CarouselItem key={dew3}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center">
                  <img
                    className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                    src={dew3}
                    alt="data table"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>{" "}
          <CarouselItem key={dew4}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center">
                  <img
                    className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                    src={dew4}
                    alt="data table"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>{" "}
          <CarouselItem key={dew5}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center">
                  <img
                    className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                    src={dew5}
                    alt="data table"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>{" "}
          <CarouselItem key={dew6}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center">
                  <img
                    className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                    src={dew6}
                    alt="data table"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          v{" "}
          <CarouselItem key={dew7}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center">
                  <img
                    className="rounded-xl shadow-xl shadow-slate-00 w-2/3"
                    src={dew7}
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
    </section>
  );
}
