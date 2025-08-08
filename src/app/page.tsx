import Hero from '../components/hero/Hero';
import RecentGrid from '../components/sections/RecentGrid';
import DonationCTA from '../components/cta/DonationCTA';

export default function Home() {
  const mock = Array.from({length: 6}).map((_, i) => ({
    id: String(i + 1),
    href: '#',
    title: [
      'Culto Dominical',
      'Estudio Bíblico',
      'Conferencia Misionera',
      'Reporte de Misiones',
      'Serie: Fe y Vida',
      'Reflexión de la Semana',
    ][i % 6],
    excerpt:
      'Contenido de ejemplo para previsualizar cómo lucen las tarjetas en el grid. Este texto es reemplazado por datos reales.',
    meta: i % 2 === 0 ? 'ARTÍCULO' : 'REPORTE',
    imageSrc: '/window.svg',
  }));

  return (
    <main className="min-h-screen">
      <Hero
        title="Viste tu corazón para adorar"
        subtitle="Recursos, noticias y reportes para la iglesia local y nuestras misiones."
        imageSrc="/vercel.svg"
        imageAlt="Hero"
      />
      <RecentGrid title="Recientes" items={mock} moreHref="#" />
      <DonationCTA />
    </main>
  );
}
