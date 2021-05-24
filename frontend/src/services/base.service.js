import { assert } from '@/core'

import { Http } from './http.init'
import { ResponseWrapper, ErrorWrapper } from './util'

export class BaseService {
    static get entity() {
        throw new Error('entity getter not defined')
    }

    static request() {
        return new Http()
    }

    static responseWrapper(...rest) {
        return new ResponseWrapper(...rest)
    }

    static errorWrapper(...rest) {
        return new ErrorWrapper(...rest)
    }

    static async getListPublic(parameters = {}) {
        assert.object(parameters)
        const params = { ...parameters }

        try {
            const response = await this.request().get(`${this.entity}/all/json`, {params})
            const data = {
                content: response.data,
                total: Number(response.headers['x-total-count'])
            }

            return new ResponseWrapper(response, data)
        }
        catch (error) {
            const message = error.response.data ? error.response.data.error : error.response.statusText
            throw new ErrorWrapper(error, message)
        }
    }

    static async getByIdPublic (id) {
        assert.id(id)

        try {
            const response = await this.request().get(`${this.entity}/${id}`)
            return new ResponseWrapper(response, response.data.data)
        }
        catch (error) {
            const message = error.response.data ? error.response.data.error : error.response.statusText
            throw new ErrorWrapper(error, message)
        }
    }
}