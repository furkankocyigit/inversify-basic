import {inject, injectable} from "inversify"
import SERVICE_IDENTIFIER from "../../constants/identifiers";
import { Warrior,Weapon } from "../../interfaces";

@injectable()
export class Ninja implements Warrior{
    public name: string;
    public weapon: Weapon;
    
    public constructor(@inject(SERVICE_IDENTIFIER.WEAPON) _weapon:Weapon ){
        this.name = "Ninja";
        this.weapon = _weapon;
    }
    
    public attack(): string  {
        return this.weapon.harm();
    }
}