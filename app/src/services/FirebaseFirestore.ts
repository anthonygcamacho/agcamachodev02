import { firebaseFirestore } from "../FirebaseConfig"

import {
    collection as firestoreCollection,
    getDocs,
} from "firebase/firestore/lite"

interface ReadDocObj {
    collection: string
}

const readDocuments = async ({ collection }: ReadDocObj) => {
    const collectionRef = firestoreCollection(firebaseFirestore, collection)
    return getDocs(collectionRef)
}

const FirebaseFirestoreService = {
    readDocuments,
}

export default FirebaseFirestoreService
