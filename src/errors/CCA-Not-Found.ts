export default class CCANotFoundError extends Error {
    constructor(ccaCode: string) {
        super(`CCA2 with id ${ccaCode} not found.`)
    }
}