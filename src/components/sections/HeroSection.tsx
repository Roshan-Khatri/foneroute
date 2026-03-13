import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { HeroSection as HeroSectionType } from "@/types/sanity";
import { sanityText, urlFor } from "@/lib/sanity";

interface HeroSectionProps {
  section: HeroSectionType;
}

const HeroSection: React.FC<HeroSectionProps> = ({ section }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef<any>(null);
  const progressTimerRef = useRef<any>(null);

  const slideVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const heroContent =
    section?.slides?.map((slide) => {
      const imageUrl = slide?.image ? urlFor(slide.image).url() : "";

      return {
        title: sanityText(slide?.heading),
        description: sanityText(slide?.description),
        image: {
          src: imageUrl,
          alt: sanityText(slide?.heading) || "Hero Image",
        },
        ctaLink: slide?.primaryButton?.link || "#",
        ctaLinkLearnMore: slide?.secondaryButton?.link || "#",
      };
    }) || [];

  const startProgress = useCallback(() => {
    setProgress(0);

    if (progressTimerRef.current) clearInterval(progressTimerRef.current);

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => prev + 100 / (5000 / 100));
    }, 100);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      heroContent.length ? (prev + 1) % heroContent.length : 0
    );
    startProgress();
  }, [heroContent.length, startProgress]);

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      heroContent.length
        ? (prev - 1 + heroContent.length) % heroContent.length
        : 0
    );
    startProgress();
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    startProgress();
  };

  useEffect(() => {
    if (!isPaused && heroContent.length > 1) {
      timerRef.current = setInterval(nextSlide, 5000);
      startProgress();
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [nextSlide, isPaused, startProgress, heroContent.length]);

  const currentHero = heroContent[currentSlide];

  if (!currentHero) return null;

  return (
    <section
      className="relative group overflow-hidden bg-background pt-40 sm:pt-28 pb-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh] lg:min-h-[calc(100vh-8rem)]">

        {/* TEXT */}
        <div className="z-10 text-center lg:text-left relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {currentHero.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                {currentHero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to={currentHero.ctaLink}>
                  <Button size="lg">Request a Demo</Button>
                </Link>

                <Link to={currentHero.ctaLinkLearnMore}>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* IMAGE */}
        <div className="relative w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center"
            >
              {currentHero.image.src && (
                <img
                  src={currentHero.image.src}
                  alt={currentHero.image.alt}
                  className="object-contain w-full h-80 md:h-96 lg:h-[500px]"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {heroContent.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={previousSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2"
              >
                <ChevronLeft />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <ChevronRight />
              </Button>
            </>
          )}
        </div>
      </div>

      {heroContent.length > 1 && (
        <>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {heroContent.map((_, i) => (
              <button
                key={i}
                className={`h-2 w-10 rounded-full ${
                  currentSlide === i ? "bg-zinc-400" : "bg-zinc-200"
                }`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>

          <Progress
            value={progress}
            className="absolute bottom-0 left-0 w-full h-1 bg-zinc-200"
          />
        </>
      )}
    </section>
  );
};

export default HeroSection;