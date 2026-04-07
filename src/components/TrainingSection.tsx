import AnimateOnScroll from "@/components/AnimateOnScroll";
import trainingImg from "@/assets/training-workshop.jpg";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Strong theoretical foundations in molecular & computational biology",
  "Hands-on practical applications with real-world datasets",
  "Reproducible research practices and workflow design",
  "Tailored for students, early-career researchers & established scientists",
];

const TrainingSection = () => (
  <section id="training" className="py-24">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <AnimateOnScroll animation="fade-up">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">Capacity Development</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Training & <span className="text-gradient">Workshops</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="blur-in" delay={200}>
            <p className="text-muted-foreground leading-relaxed mb-8">
              LoxBio is committed to knowledge transfer through specialized training programs. Our workshops emphasize practical application and reproducible research practices in molecular biology and computational biology.
            </p>
          </AnimateOnScroll>
          <ul className="space-y-3">
            {features.map((f, i) => (
              <AnimateOnScroll key={i} animation="slide-right" delay={250 + i * 100}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
        <AnimateOnScroll animation="scale" delay={200}>
          <div className="relative">
            <img src={trainingImg} alt="Training workshop" className="rounded-2xl shadow-2xl w-full object-cover" loading="lazy" width={800} height={600} />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default TrainingSection;
