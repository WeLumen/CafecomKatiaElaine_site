import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { Sobre } from "../components/Sobre";
import { Atuacao } from "../components/Atuacao";
import { Servicos } from "../components/Servicos";
import { Mentorias } from "../components/Mentorias";
import { Cafe } from "../components/Cafe";
import { Depoimentos } from "../components/Depoimentos";
import { Contato } from "../components/Contato";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main data-testid="home-page">
      <Nav />
      <Hero />
      <Marquee />
      <Sobre />
      <Atuacao />
      <Servicos />
      <Mentorias />
      <Cafe />
      <Depoimentos />
      <Contato />
      <Footer />
    </main>
  );
}
