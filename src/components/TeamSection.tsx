import AnimateOnScroll from "@/components/AnimateOnScroll";
import professorImg from "@/assets/professor-edwin.jpeg";
import teamEdwin from "@/assets/team-edwin.jpg";
import { Mail, GraduationCap, Award, Globe, Linkedin } from "lucide-react";

const team = [
  {
    name: "Prof. Edwin Wanjofu",
    role: "Founder & Lead Researcher",
    image: professorImg,
    bio: "Professor Edwin Wanjofu is a distinguished biotechnologist and bioinformatician with extensive experience in molecular biology, genomics, and computational biology. He leads LoxBio's research initiatives, driving innovation in multi-omics data analysis and microbial genome research across international academic collaborations.",
    expertise: ["Molecular Biology", "Bioinformatics", "Genomics", "Metagenomics"],
    email: "ewanjofu@gmail.com",
  },
  {
    name: "Research & Analytics Team",
    role: "Bioinformatics & Data Science",
    image: teamEdwin,
    bio: "Our multidisciplinary team of researchers and data scientists brings together expertise in computational biology, biostatistics, and molecular techniques. We collaborate with institutions globally to deliver reproducible, high-impact scientific outcomes.",
    expertise: ["Data Analysis", "Pipeline Development", "Statistical Modelling", "Machine Learning"],
    email: "loxbio@outlook.com",
  },
];

const TeamSection = () => (
  <section id="team" className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <AnimateOnScroll animation="fade-up">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">Our People</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Team & <span className="text-gradient">Leadership</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="blur-in" delay={200}>
          <p className="text-muted-foreground">
            Meet the scientists and researchers driving LoxBio's mission to advance biological discovery worldwide.
          </p>
        </AnimateOnScroll>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <AnimateOnScroll key={member.name} animation={i === 0 ? "slide-left" : "slide-right"} delay={i * 150}>
            <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={600} />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-xl font-bold text-primary-foreground">{member.name}</h3>
                  <p className="text-secondary text-sm font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                  ))}
                </div>
                <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors font-medium">
                  <Mail className="w-4 h-4" /> {member.email}
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
        {[
          { icon: GraduationCap, label: "PhD-Level Expertise" },
          { icon: Globe, label: "International Reach" },
          { icon: Award, label: "Peer-Reviewed Research" },
          { icon: Linkedin, label: "Academic Network" },
        ].map((item, i) => (
          <AnimateOnScroll key={item.label} animation="scale" delay={i * 100}>
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
              <item.icon className="w-8 h-8 text-primary mb-2" />
              <p className="text-xs font-semibold text-foreground">{item.label}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
