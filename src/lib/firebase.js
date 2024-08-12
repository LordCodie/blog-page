import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
    getFirestore,
    doc,
    getDocs,
    collection,
    getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
import {
    getStorage,
    ref,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js"

const firebaseConfig = {
    apiKey: "AIzaSyAWJ-fPFW8E-16uZjaPtxnxZ8WvydvSaMU",
    authDomain: "fir-practice-cf540.firebaseapp.com",
    projectId: "fir-practice-cf540",
    storageBucket: "fir-practice-cf540.appspot.com",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage();

export async function getDocTitlePlate() {
    const dataArray = []
    const querySnapshot = await getDocs(collection(db, "articles"));
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        dataArray.push(doc.id)
    });
    return dataArray
}

export async function loadDocByButton(docTitleField) {
    const docRef = doc(db, "articles", docTitleField);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

export function loadMainArticleImage(target) {
    const storageRef = ref(storage);
    const imagesRef = ref(storageRef, `articlesImages/${target}/${target}`);

    getDownloadURL(ref(imagesRef))
        .then((url) => {
            const img = document.getElementById("mainImageEl")
            img.src = url
        })
        .catch((error) => {
            // Handle any errors
            console.log(error.message)
        });
}

