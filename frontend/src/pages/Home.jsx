import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { Sobre } from "../components/Sobre";
import { Atuacao } from "../components/Atuacao";
import { Servicos } from "../components/Servicos";
import { Mentorias } from "../components/Mentorias";
import { Cafe } from "../components/Cafe";
import { Contato } from "../components/Contato";
import { EmpresasParceiras } from "../components/EmpresasParceiras";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <main data-testid="home-page">
      <a href="#hero" className="skip-link">Pular para o conteúdo</a>
      <Nav />
      <Hero />
      <Marquee />
      <Sobre />
      <Servicos />
      <Mentorias />
      <Cafe />
      <Atuacao />
      <Contato />
      <EmpresasParceiras />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
