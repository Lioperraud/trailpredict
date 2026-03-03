import Header from '../components/Header'
import Card from '../components/Card'
import PrevisionsForm from '../components/PrevisionsForm'
import PrevisionsResultats from '../components/PrevisionsResultats'
import { useState, useEffect } from 'react'
import { getUserResults } from '../services/firestoreService'
import { useAuth } from '../context/AuthContext'

function Previsions() {
  const { user } = useAuth()
  const [resultats, setResultats] = useState([])

  useEffect(() => {
    if (!user) return

    const loadResults = async () => {
      const data = await getUserResults(user.uid)
      setResultats(data)
    }

    loadResults()
  }, [user])

  const [myTrail, setMyTrail] = useState(() => {
    const saved = localStorage.getItem('myTrail')
    return saved
      ? JSON.parse(saved)
      : { distance: '', denivele: '', technicite: '' }
  })
  const [predict, SetPredict] = useState(false)
  useEffect(() => {
    localStorage.setItem('myTrail', JSON.stringify(myTrail))
    if (
      myTrail.distance !== '' &&
      myTrail.denivele !== '' &&
      myTrail.technicite !== ''
    )
      SetPredict(true)
    else SetPredict(false)
  }, [myTrail])

  if (!resultats.length)
    return (
      <>
        <Header title="Prévisions" />
        <section className="p-8 flex flex-wrap gap-4">
          <Card title="Important" classname="w-full">
            <p>
              Vous devez d'abord saisir des résultats pour faire des prévisions
            </p>
          </Card>
        </section>
      </>
    )

  return (
    <>
      <Header title="Prévisions" />
      <section className="px-6 xl:px-8 grid grid-cols-12 gap-4 pb-8">
        <Card title="Mon prochain trail" classname="col-span-12 xl:col-span-4">
          <PrevisionsForm
            myTrail={myTrail}
            setMyTrail={setMyTrail}
            predict={predict}
          />
        </Card>
        {predict && (
          <PrevisionsResultats
            classname="col-span-12 xl:col-span-8"
            myTrail={myTrail}
            resultats={resultats}
          />
        )}
      </section>
    </>
  )
}
export default Previsions
