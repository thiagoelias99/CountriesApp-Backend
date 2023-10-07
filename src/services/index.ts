// import MemoryDatabase from '../infra/database/memory/Memory-Database'
import { IAppDatabase } from "../database/AppDatabse"
import { FireStore } from "../infra/firestore"
import { UserServices } from "./UserServices"

const database: IAppDatabase = FireStore.getInstance()

const userServices = new UserServices(database.users)

export {
    userServices
}