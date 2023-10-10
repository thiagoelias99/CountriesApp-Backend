import { IAppDatabase } from "../../database/AppDatabse";
import { IUserRepository } from "../../database/repository/UserRepository";
import { Firebase } from "../firebase";
import { getFirestore } from "firebase/firestore";
import { UserRepository } from "./UserRepository";

export class FireStore implements IAppDatabase {
    private _db = getFirestore(Firebase.getInstance().app)
    users: IUserRepository = new UserRepository(this._db)

    private static instance: FireStore | null = null;
    private constructor() { }

    public static getInstance(): FireStore {
        if (!FireStore.instance) {
            FireStore.instance = new FireStore();
        }
        return FireStore.instance;
    }
}