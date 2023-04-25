import { firebaseFirestore } from "../FirebaseConfig"

import {
    collection as firestoreCollection,
    getDocs,
    orderBy,
    query,
    where,
} from "firebase/firestore/lite"

interface ReadDocObj {
    collection: string
}

const readDocuments = async ({ collection }: ReadDocObj) => {
    const collectionRef = firestoreCollection(firebaseFirestore, collection)
    return getDocs(
        query(
            collectionRef,
            where("status", "==", "published"),
            orderBy("date", "desc")
        )
    )
}

const FirebaseFirestoreService = {
    readDocuments,
}

export default FirebaseFirestoreService
