import { injectable } from "inversify";
import { IWeapon } from "../../interfaces/weapon";

@injectable()
export class Katana extends IWeapon {
    public constructor() {
        super()
        this.weaponName = 'Katana';
    }
    
}