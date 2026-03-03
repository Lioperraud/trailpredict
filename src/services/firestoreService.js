import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore'
import { db } from './firebase'

/**
 * Sauvegarder un résultat
 */
export const saveResult = async (userId, resultData) => {
  try {
    await addDoc(collection(db, 'resultats'), {
      uid: userId,
      date: resultData.date,
      nom: resultData.nom,
      distance: resultData.distance,
      denivele: resultData.denivele,
      temps: resultData.temps,
      technicite: resultData.technicite,
      conditionDifficile: resultData.conditionDifficile,
      horsCalcul: resultData.horsCalcul,
    })
  } catch (error) {
    console.error('Erreur sauvegarde résultat :', error)
    throw error
  }
}
/**
 * Supprimer un résultat
 */
export const deleteResult = async (firestoreId) => {
  try {
    await deleteDoc(doc(db, 'resultats', firestoreId))
  } catch (error) {
    console.error('Erreur suppression résultat :', error)
    throw error
  }
}
/**
 * Modifier un résultat
 */
export const updateResult = async (firestoreId, updatedData) => {
  try {
    await updateDoc(doc(db, 'resultats', firestoreId), {
      ...updatedData,
    })
  } catch (error) {
    console.error('Erreur mise à jour résultat :', error)
    throw error
  }
}
/**
 * Écoute en temps réel les résultats d'un utilisateur
 */
export const subscribeToUserResults = (userId, callback) => {
  const q = query(collection(db, 'resultats'), where('uid', '==', userId))

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const results = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    callback(results)
  })

  return unsubscribe // IMPORTANT pour cleanup
}
/**
 * Récupérer tous les résultats d'un utilisateur
 */
export const getUserResults = async (userId) => {
  const q = query(collection(db, 'resultats'), where('uid', '==', userId))

  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}
