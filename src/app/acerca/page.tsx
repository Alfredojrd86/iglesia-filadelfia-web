import AcercaTabs from '../../components/acerca/AcercaTabs'
import AcercaContent from '../../components/acerca/AcercaContent'

export const metadata = { title: 'Acerca de nosotros | Iglesia Filadelfia' }

export default function AcercaPage() {
  return (
    <main className="py-10">
      <AcercaTabs />
      <AcercaContent />
    </main>
  )
}


