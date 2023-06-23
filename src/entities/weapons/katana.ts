import { injectable } from "inversify";
import { Weapon } from "../../interfaces/weapon";

@injectable()
export class Katana extends Weapon {
    public constructor() {
        super()
        this.weaponName = 'Katana';
    }
    
}