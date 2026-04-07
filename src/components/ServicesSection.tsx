import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Dna, Database, FlaskConical, BookOpen, LineChart, Layers } from "lucide-react";

const services = [
  { icon: Dna, title: "Genomics & Metagenomics", desc: "Whole genome sequencing, amplicon sequencing, metagenomics profiling, and microbial community analysis using state-of-the-art bioinformatics pipelines." },
  { icon: LineChart, title: "Transcriptomics", desc: "RNA-Seq analysis, differential gene expression, pathway enrichment, and functional annotation for understanding gene regulation." },
  { icon: FlaskConical, title: "Phylogenetics", desc: "Molecular phylogenetic reconstruction, evolutionary analysis, and taxonomic classification using robust statistical methods." },
  { icon: Database, title: "Bioinformatics Pipelines", desc: "Custom computational workflows for sequence assembly, variant calling, genome annotation, and multi-omics data processing." },
  { icon: Layers, title: "Scientific Consultancy", desc: "Experimental design support, multi-omics integration, methodology selection, and alignment with publication standards." },
  { icon: BookOpen, title: "Training & Workshops", desc: "Specialized programs in molecular biology, computational biology, and reproducible research for students and researchers." },
];

const animations = ["fade-up", "scale", "slide-right", "fade-up", "scale", "slide-left"] as const;

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <AnimateOnScroll animation="fade-up">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="text-muted-foreground">
            Comprehensive molecular and computational solutions tailored for academic research and biological discovery.
          </p>
        </AnimateOnScroll>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimateOnScroll key={s.title} animation={animations[i]} delay={i * 100}>
            <div className="group p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
