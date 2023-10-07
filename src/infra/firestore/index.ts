import { User } from "../../Entities/User";
import { Firebase } from "../firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";

export class FireStore {
    private static instance: FireStore | null = null;
    private constructor() {}

    public static getInstance(): FireStore {
        if (!FireStore.instance) {
            FireStore.instance = new FireStore();
        }
        return FireStore.instance;
      }

    private _db = getFirestore(Firebase.getInstance().app)

    async getUser(id: string) {
        const docRef = doc(this._db, "users", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const user = docSnap.data() as User
            console.log(user.email);
        } else {
            console.log("No such document!");
        }
    }
}