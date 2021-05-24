import { BaseService } from "./base.service"

export class PlayerService extends BaseService {
    static get entity () {
        return 'player'
    }
}