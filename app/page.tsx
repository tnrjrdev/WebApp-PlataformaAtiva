import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { AIConsulting } from "@/components/ai-consulting";
import { Automation } from "@/components/automation";
import { Mentorship } from "@/components/mentorship";
import { Differentials } from "@/components/differentials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <AIConsulting />
        <Automation />
        <Mentorship />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
