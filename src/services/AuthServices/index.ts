import { ISignUp } from '../../Entities/Auth'
import { IUser } from '../../Entities/User'
import { IAppDatabase } from '../../database/AppDatabse'
import { Firebase } from '../../infra/firebase'

export class AuthServices {
    constructor(
        private firebase: Firebase,
        private database: IAppDatabase
    ) { }

    async signUp(data: ISignUp): Promise<string> {
        //Cadastrar usuário no firebase e receber o id
        const createdUserId = await this.firebase.signUp(data.email, data.password)

        //Cadastrar usuário no banco de dados
        const user: IUser = {
            id: createdUserId,
            email: data.email,
            name: data.name,
            countries: [],
            notes: []
        }        
        const responseUser = await this.database.users.save(user)

        return responseUser.id
    }
}