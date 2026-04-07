import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bioinformatics from "@/assets/bioinformatics.jpg";
import collab from "@/assets/research-collab.jpg";
import genomics from "@/assets/genomics-lab.jpg";
import dataAnalysis from "@/assets/data-analysis.jpg";
import molecularLab from "@/assets/molecular-lab.jpg";
import metagenomics from "@/assets/metagenomics.jpg";

const slides = [
  { src: bioinformatics, alt: "Bioinformatics data analysis", title: "Advanced Bioinformatics Analysis", description: "We leverage cutting-edge computational tools and custom pipelines to analyze complex biological datasets, from genome assembly to functional annotation, enabling researchers to extract meaningful insights from high-throughput data." },
  { src: genomics, alt: "Genomics laboratory", title: "Next-Generation Sequencing", description: "Our genomics workflows encompass whole-genome sequencing, targeted amplicon sequencing, and RNA-Seq, providing comprehensive molecular characterization for diverse research applications in microbiology, ecology, and clinical studies." },
  { src: collab, alt: "Research collaboration", title: "Collaborative Research Teams", description: "LoxBio partners with academic institutions and research groups worldwide, fostering interdisciplinary collaboration that bridges molecular biology, computational science, and biostatistics to deliver impactful scientific outcomes." },
  { src: dataAnalysis, alt: "Computational data analysis", title: "Computational Data Science", description: "From statistical modelling to machine learning, our computational biology team applies rigorous analytical frameworks to multi-omics datasets, ensuring reproducible results and robust biological interpretations." },
  { src: molecularLab, alt: "Molecular biology laboratory", title: "Molecular Biology & Wet Lab", description: "Our molecular biology expertise includes DNA/RNA extraction, PCR optimization, cloning, and sample preparation for sequencing — providing end-to-end support from bench to bioinformatics." },
  { src: metagenomics, alt: "Metagenomics research", title: "Metagenomics & Microbial Ecology", description: "We specialize in culture-independent microbial community profiling using 16S/ITS amplicon and shotgun metagenomics, revealing the diversity and functional potential of complex microbial ecosystems." },
];

const ResearchGallery = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => { setCurrent(index); setIsTransitioning(false); }, 500);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="research" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimateOnScroll animation="fade-up">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">Our Work</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Research in <span className="text-gradient">Action</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="blur-in" delay={200}>
            <p className="text-muted-foreground">From molecular labs to computational analysis — driving impactful scientific outcomes worldwide.</p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="scale" delay={300}>
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl bg-card">
              <div className="relative h-72 md:h-[420px] overflow-hidden">
                <img src={slide.src} alt={slide.alt} className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"}`} loading="lazy" width={1024} height={768} />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="text-secondary text-xs font-semibold tracking-widest uppercase mb-2">
                  {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <h3 className={`font-heading text-2xl font-bold text-foreground mb-4 transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>{slide.title}</h3>
                <p className={`text-muted-foreground leading-relaxed transition-all duration-500 delay-100 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>{slide.description}</p>
              </div>
            </div>

            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 md:-left-5 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg" aria-label="Previous slide">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 md:-right-5 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg" aria-label="Next slide">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"}`} aria-label={`Go to slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ResearchGallery;
