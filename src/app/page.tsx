import Hero from '../components/hero/Hero';
import RecentGrid from '../components/sections/RecentGrid';
import DonationCTA from '../components/cta/DonationCTA';

export default function Home() {
  const mock = Array.from({length: 6}).map((_, i) => ({
    id: String(i + 1),
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // enlace de ejemplo al video
    title: [
      'Predicación: El gozo en Cristo',
      'Predicación: Fe que transforma',
      'Predicación: Esperanza viva',
      'Predicación: Amor que permanece',
      'Predicación: La gracia de Dios',
      'Predicación: Caminar por el Espíritu',
    ][i % 6],
    excerpt:
      'Breve descripción del mensaje: ideas principales, texto bíblico y aplicación práctica.',
    meta: 'PREDICACIÓN RECIENTE',
    imageSrc: `https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg`, // thumb ejemplo
    authorName: 'Pastor Invitado',
    authorAvatarUrl: 'https://i.pravatar.cc/80?img=' + (i + 1),
  }));

  return (
    <main className="min-h-screen bg-[#ffffff]">
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
