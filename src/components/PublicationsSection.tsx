import AnimateOnScroll from "@/components/AnimateOnScroll";
import { BookOpen, ExternalLink, FileText, TrendingUp } from "lucide-react";

const publications = [
  { title: "Metagenomic Profiling of Soil Microbial Communities in Agricultural Ecosystems", journal: "Journal of Microbial Ecology", year: "2025", type: "Research Article", description: "Comprehensive 16S rRNA amplicon sequencing analysis revealing microbial diversity patterns across different farming practices in sub-Saharan Africa." },
  { title: "Comparative Genomics of Pathogenic Bacteria: Insights from Whole-Genome Sequencing", journal: "BMC Genomics", year: "2024", type: "Research Article", description: "Whole-genome sequencing and phylogenomic analysis of clinically relevant bacterial strains, identifying novel virulence factors and antimicrobial resistance genes." },
  { title: "Transcriptomic Analysis of Plant-Microbe Interactions Under Drought Stress", journal: "Frontiers in Plant Science", year: "2024", type: "Original Research", description: "RNA-Seq-based differential gene expression analysis revealing key molecular pathways involved in plant resilience mediated by beneficial microorganisms." },
  { title: "Bioinformatics Pipeline Development for Multi-Omics Data Integration", journal: "Bioinformatics Advances", year: "2023", type: "Methods Paper", description: "A reproducible computational framework for integrating genomics, transcriptomics, and metabolomics data in biological research applications." },
  { title: "Microbial Diversity in Aquatic Ecosystems: A Metagenomics Approach", journal: "Environmental Microbiology", year: "2023", type: "Research Article", description: "Shotgun metagenomics analysis of freshwater microbial communities, providing insights into functional gene distribution and ecological dynamics." },
];

const stats = [
  { icon: FileText, value: "15+", label: "Publications" },
  { icon: TrendingUp, value: "200+", label: "Citations" },
  { icon: BookOpen, value: "10+", label: "Journals" },
  { icon: ExternalLink, value: "8+", label: "Collaborations" },
];

const PublicationsSection = () => (
  <section id="publications" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <AnimateOnScroll animation="fade-up">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">Scientific Output</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Publications & <span className="text-gradient">Research</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="blur-in" delay={200}>
          <p className="text-muted-foreground">
            Contributing to the global body of scientific knowledge through peer-reviewed publications and collaborative research.
          </p>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="scale" delay={200}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-5 rounded-2xl bg-hero">
              <s.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
              <p className="font-heading text-2xl font-extrabold text-primary-foreground">{s.value}</p>
              <p className="text-xs text-primary-foreground/70 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      <div className="max-w-4xl mx-auto space-y-4">
        {publications.map((pub, i) => (
          <AnimateOnScroll key={pub.title} animation={i % 2 === 0 ? "slide-left" : "slide-right"} delay={i * 80}>
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-semibold">{pub.year}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{pub.type}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{pub.title}</h3>
                  <p className="text-xs text-secondary font-semibold mb-2 italic">{pub.journal}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default PublicationsSection;
