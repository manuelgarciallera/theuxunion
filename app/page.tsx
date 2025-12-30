export const dynamic = "force-static";

import Hero from "@/components/Hero";
import LandingSections from "@/components/LandingSections";
import Trusted from "@/components/Trusted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />

      {/* ✅ Manifiesto + Secciones app (6) + bloques alternos */}
      <LandingSections />

      {/* ✅ Lo último (por ahora): Empresas que confían */}
      <Trusted />

      <Footer />
    </main>
  );
}
