import AnimateOnScroll from "@/components/AnimateOnScroll";
import dnaImg from "@/assets/dna-abstract.jpg";
import { Microscope, BarChart3, Users, GraduationCap } from "lucide-react";

const stats = [
  { icon: Microscope, value: "Genomics", label: "Core Expertise" },
  { icon: BarChart3, value: "Multi-Omics", label: "Data Integration" },
  { icon: Users, value: "Global", label: "Collaborations" },
  { icon: GraduationCap, value: "Training", label: "Capacity Building" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimateOnScroll animation="slide-left">
          <div className="relative">
            <img src={dnaImg} alt="DNA molecular visualization" className="rounded-2xl shadow-2xl w-full object-cover" loading="lazy" width={800} height={600} />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-secondary/20 -z-10" />
          </div>
        </AnimateOnScroll>

        <div>
          <AnimateOnScroll animation="fade-up">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">About LoxBio</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Research-Driven <span className="text-gradient">Biotechnology</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LoxBio is dedicated to advancing biological discovery through the integration of molecular biology, bioinformatics, and biological data analysis. We support academic institutions, research groups, and scientific collaborations by delivering rigorous, reproducible, and methodologically robust solutions across the life sciences.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={300}>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our core expertise lies in the design and implementation of molecular and computational research workflows, encompassing genomics, metagenomics, transcriptomics, phylogenetics, and microbial genome analysis.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <AnimateOnScroll key={s.label} animation="scale" delay={300 + i * 100}>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
