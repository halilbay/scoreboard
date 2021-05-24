import axios from 'axios'
import { API_URL } from '../.env'

export class Http {
    constructor () {
        this.instance = axios.create({
            baseURL: API_URL
        })

        return this.init()
    }

    init() {
        // we can add auth/token check later
        return this.instance
    }
}