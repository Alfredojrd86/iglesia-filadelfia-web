import Container from '../../components/ui/Container'
import AcercaTabs from '../../components/acerca/AcercaTabs'

export const metadata = {
  title: 'Declaración de fe | Iglesia Filadelfia',
}

export default function DeclaracionDeFePage() {
  return (
    <main className="py-10">
      <AcercaTabs />
      <Container className="max-w-3xl">
        <h1
          className="font-sans text-[60px] leading-[63px] font-bold text-[#333333] tracking-tight mb-6"
          style={{ fontFamily: '"Balto Web", Helvetica, Arial, sans-serif' }}
        >
          Declaración de fe
        </h1>
        <p
          className="text-[18px] leading-[32px] text-[#333333] mb-6"
          style={{ fontFamily: '"Merriweather Web", Georgia, "Times New Roman", Times, serif', fontWeight: 300 }}
        >
          Esta es la declaración doctrinal de la Iglesia Filadelfia. A continuación
          expresamos, de manera resumida, aquello que creemos que la Biblia enseña con
          claridad.
        </p>

        <section className="space-y-4">
          <h2
            className="text-xl font-semibold text-[#333333]"
            style={{ fontFamily: '"Balto Web", Helvetica, Arial, sans-serif' }}
          >
            1. La Biblia
          </h2>
          <p
            className="text-[18px] leading-[32px] text-[#333333]"
            style={{ fontFamily: '"Merriweather Web", Georgia, "Times New Roman", Times, serif', fontWeight: 300 }}
          >
            Creemos que la Biblia es la Palabra de Dios, inspirada, inerrante y
            autoritativa para la fe y la conducta.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2
            className="text-xl font-semibold text-[#333333]"
            style={{ fontFamily: '"Balto Web", Helvetica, Arial, sans-serif' }}
          >
            2. Dios
          </h2>
          <p
            className="text-[18px] leading-[32px] text-[#333333]"
            style={{ fontFamily: '"Merriweather Web", Georgia, "Times New Roman", Times, serif', fontWeight: 300 }}
          >
            Creemos en un solo Dios verdadero, eterno, existente en tres personas:
            Padre, Hijo y Espíritu Santo.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2
            className="text-xl font-semibold text-[#333333]"
            style={{ fontFamily: '"Balto Web", Helvetica, Arial, sans-serif' }}
          >
            3. Jesucristo
          </h2>
          <p
            className="text-[18px] leading-[32px] text-[#333333]"
            style={{ fontFamily: '"Merriweather Web", Georgia, "Times New Roman", Times, serif', fontWeight: 300 }}
          >
            Creemos en Jesucristo, verdadero Dios y verdadero hombre, su nacimiento
            virginal, vida sin pecado, muerte sustitutiva, resurrección corporal y
            regreso glorioso.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2
            className="text-xl font-semibold text-[#333333]"
            style={{ fontFamily: '"Balto Web", Helvetica, Arial, sans-serif' }}
          >
            4. Salvación
          </h2>
          <p
            className="text-[18px] leading-[32px] text-[#333333]"
            style={{ fontFamily: '"Merriweather Web", Georgia, "Times New Roman", Times, serif', fontWeight: 300 }}
          >
            La salvación es por gracia mediante la fe en Cristo, no por obras, y se
            evidencia por una vida transformada por el Espíritu Santo.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2
            className="text-xl font-semibold text-[#333333]"
            style={{ fontFamily: '"Balto Web", Helvetica, Arial, sans-serif' }}
          >
            5. La Iglesia
          </h2>
          <p
            className="text-[18px] leading-[32px] text-[#333333]"
            style={{ fontFamily: '"Merriweather Web", Georgia, "Times New Roman", Times, serif', fontWeight: 300 }}
          >
            La iglesia es el cuerpo de Cristo, compuesta por todos los creyentes, y
            se expresa en congregaciones locales que adoran, enseñan la Palabra y
            participan de la misión.
          </p>
        </section>

        <p className="mt-10 text-sm text-[#6b7280]">Última actualización: Agosto 2025</p>
      </Container>
    </main>
  )
}


