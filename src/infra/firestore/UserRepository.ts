import { Firestore, collection, doc, getDoc } from "firebase/firestore";
import { IUser } from "../../Entities/User";
import { IUserRepository } from "../../database/repository/UserRepository";

export class UserRepository implements IUserRepository {
    constructor(
        private db: Firestore
    ) { }

    usersCollection = "users"

    save(user: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }
    async getById(id: string): Promise<IUser> {
        const docRef = doc(this.db, this.usersCollection, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const user = docSnap.data() as IUser
            // const userCountries
            return new Promise((resolve, reject) => {
                resolve({
                    id: docSnap.id,
                    email: user.email,
                    name: user.name,
                    countries: user.countries?.map(country => {
                        return {
                            cca2: country.cca2,
                            name: country.namePt,
                            completeName: country.nameCompletePt
                        }
                    }) || [],
                    notes: user.notes || []                                        
                })
            })
        } else {
            throw new Error(`User not found with id ${id}.`);
        }
    }
    getByEmail(email: string): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    remove(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}