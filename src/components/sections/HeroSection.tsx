import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { HeroSection as HeroSectionType } from '@/types/sanity';

interface HeroSectionProps {
  section: HeroSectionType;
}

const HeroSection: React.FC<HeroSectionProps> = ({ section }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

    const slideVariants = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -80 } };
    const imageVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

    // The heroContent is now derived from the section prop
    const heroContent = [{
      title: section.title,
      description: section.description,
      image: {
        src: section.imageUrl,
        alt: section.title
      },
      ctaLink: section.ctaLink,
      ctaLinkLearnMore: section.ctaLinkLearnMore
    }];

    const startProgress = useCallback(() => {
        setProgress(0);
        if (progressTimerRef.current) clearInterval(progressTimerRef.current);
        progressTimerRef.current = setInterval(() => {
            setProgress(prev => prev + 100 / (5000 / 100));
        }, 100);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % heroContent.length);
        startProgress();
    }, [heroContent.length, startProgress]);

    const previousSlide = () => {
        setCurrentSlide(prev => (prev - 1 + heroContent.length) % heroContent.length);
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
                <div className="z-10 text-center lg:text-left relative">
                    <AnimatePresence mode="wait">
                        <motion.div key={currentSlide} initial="hidden" animate="visible" exit="exit" variants={slideVariants} transition={{ duration: 0.5, ease: 'easeInOut' }}>
                            <h1 className="text-4xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-6 leading-tight tracking-tighter">{currentHero.title}</h1>
                            <p className="text-lg md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">{currentHero.description}</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link to={currentHero.ctaLink} className="w-full sm:w-auto"><Button size="lg" variant="default" className="w-full h-12 text-base">Request a Demo</Button></Link>
                                <Link to={currentHero.ctaLinkLearnMore} className="w-full sm:w-auto"><Button size="lg" variant="outline" className="w-full h-12 text-base">Learn More</Button></Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="relative w-full h-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div key={currentSlide} initial="hidden" animate="visible" exit="exit" variants={imageVariants} transition={{ duration: 0.5, delay: 0.2 }} className="w-full h-full">
                            <img src={currentHero.image.src} alt={currentHero.image.alt} className="object-contain w-full h-80 md:h-96 lg:h-[500px] card-hover-animation" />
                        </motion.div>
                    </AnimatePresence>
                    {heroContent.length > 1 && (
                        <>
                            <Button variant="outline" size="icon" onClick={previousSlide} className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 h-10 w-10 md:h-12 md:w-12 opacity-80 hover:opacity-100 transition-opacity lg:hidden"><ChevronLeft className="h-6 w-6" /></Button>
                            <Button variant="outline" size="icon" onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 h-10 w-10 md:h-12 md:w-12 opacity-80 hover:opacity-100 transition-opacity lg:hidden"><ChevronRight className="h-6 w-6" /></Button>
                            
                            <Button variant="outline" size="icon" onClick={previousSlide} className="absolute top-1/2 -translate-y-1/2 -left-16 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:inline-flex"><ChevronLeft className="h-6 w-6" /></Button>
                            <Button variant="outline" size="icon" onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 -right-16 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:inline-flex"><ChevronRight className="h-6 w-6" /></Button>
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
                                className={`h-2 w-10 rounded-full transition-colors ${currentSlide === i ? 'bg-zinc-400' : 'bg-zinc-200'}`}
                                onClick={() => goToSlide(i)}
                            />
                        ))}
                    </div>
                    <Progress 
                        value={progress} 
                        className="absolute bottom-0 left-0 w-full h-1 bg-zinc-200" 
                        indicatorClassName="bg-zinc-400"
                    />
                </>
            )}
        </section>
    );
};

export default HeroSection;
