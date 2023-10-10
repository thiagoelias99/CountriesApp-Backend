export default class IdNotFoundError extends Error {
    constructor(id: string) {
        super(`Id ${id} not found.`)
    }
}