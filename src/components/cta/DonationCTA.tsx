import Container from '../ui/Container'
import Link from 'next/link'

export default function DonationCTA() {
  return (
    <section className="mt-12 bg-[#F5F5F5]">
      <Container className="py-12 sm:py-16 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <p className="uppercase text-xs tracking-wider text-foreground/60">
            Apoya la misión
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Combustiona más gozo en Jesucristo
          </h2>
          <p className="text-foreground/75">
            Tus oraciones y ofrendas nos ayudan a alcanzar a más personas con el
            evangelio y sostener a nuestros misioneros. ¿Te unes con una ofrenda
            hoy?
          </p>
          <div className="flex gap-3">
            <Link
              href="/donaciones"
              className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Donar ahora
            </Link>
            <Link
              href="/misioneros"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-foreground/5"
            >
              Conocer la misión
            </Link>
          </div>
        </div>
        <div className="rounded-xl border p-4 bg-background">
          <p className="text-sm font-medium mb-3">Impacto estimado</p>
          <ul className="text-sm space-y-2 text-foreground/80">
            <li>• $10 ayuda a compartir recursos con 70 personas</li>
            <li>• $50 sostiene una semana de evangelismo local</li>
            <li>• $100 apoya a un misionero en el campo</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}


