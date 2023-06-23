import {injectable} from "inversify"
import { Weapon } from "../../interfaces/weapon";

@injectable()
export class Shuriken extends Weapon{
    public constructor() {
        super()
        this.weaponName = 'Shuriken';
    }
} 