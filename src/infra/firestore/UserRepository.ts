import { Firestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { IUser, IUserUpdate } from "../../Entities/User"
import { IUserRepository } from "../../database/repository/UserRepository"

export class UserRepository implements IUserRepository {
    constructor(
        private db: Firestore
    ) { }

    usersCollection = "users"

    async save(user: IUser): Promise<IUser> {
        const docRef = doc(this.db, this.usersCollection, user.id)
        const docSnap = await getDoc(docRef)

        await setDoc(docRef, user)
        return new Promise((resolve, reject) => {
            resolve(user)
        })
    }

    getAll(): Promise<IUser[]> {
        throw new Error("Method not implemented.")
    }
    async getById(id: string): Promise<IUser> {
        const docRef = doc(this.db, this.usersCollection, id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            const user = docSnap.data() as IUser
            return new Promise((resolve, reject) => {
                resolve({
                    id: docSnap.id,
                    email: user.email,
                    name: user.name,
                    countries: user.countries?.map(country => {
                        return {
                            cca2: country.cca2,
                            namePt: country.namePt,
                            nameUs: country.nameUs,
                            nameEs: country.nameEs,
                            flagPng: country.flagPng,
                            flagSvg: country.flagSvg
                        }
                    }) || [],
                    notes: user.notes || []
                })
            })
        } else {
            throw new Error(`User not found with id ${id}.`)
        }
    }
    getByEmail(email: string): Promise<IUser> {
        throw new Error("Method not implemented.")
    }
    remove(id: string): Promise<void> {
        throw new Error("Method not implemented.")
    }

    async update(id: string, data: IUserUpdate): Promise<IUser> {
        const docRef = doc(this.db, this.usersCollection, id)
        
        await updateDoc(docRef, {...data})

        return this.getById(id)
    }

}