import {injectable} from "inversify"
import { IWeapon } from "../../interfaces/weapon";

@injectable()
export class Shuriken extends IWeapon{
    public constructor() {
        super()
        this.weaponName = 'Shuriken';
    }
} 