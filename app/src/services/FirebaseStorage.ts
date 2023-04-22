// import { firebaseStorage } from "../FirebaseConfig"

import {
    getDownloadURL as getStorageDownloadURL,
    ref,
    getStorage,
} from "firebase/storage"

const getDownloadURL = async (bucket: string) => {
    const storage = getStorage()
    const bucketRef = ref(storage, bucket)
    let downloadURL = await getStorageDownloadURL(bucketRef)
    return downloadURL
}

const FirebaseStorageService = {
    getDownloadURL,
}

export default FirebaseStorageService
