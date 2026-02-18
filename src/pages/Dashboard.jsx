import Header from '../components/Header'
import ResultatStat from '../components/ResultatStat'
import { initvaleur } from '../utils/dev'
import Card from '../components/Card'
import AccesRapide from '../components/AccesRapide'
import IcoPrevision from '../assets/ico-prevision.svg?react'
import IcoResultat from '../assets/ico-resultat.svg?react'

function Dashboard() {
  //initvaleur()
  return (
    <>
      <Header title="Dashboard" />
      <section className="p-8 flex flex-wrap gap-4">
        <Card title="Accès rapide" classname="w-full">
          <div className="flex flex-wrap gap-4">
            <AccesRapide url="/previsions" libelle="Prévisions">
              <IcoPrevision className="w-32 h-auto" />
            </AccesRapide>
            <AccesRapide url="/resultats" libelle="Résultats">
              <IcoResultat className="w-32 h-auto" />
            </AccesRapide>
          </div>
        </Card>
        <Card title="Statistiques" classname="w-full">
          <ResultatStat />
        </Card>
      </section>
    </>
  )
}
export default Dashboard
