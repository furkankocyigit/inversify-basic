
import {inject, injectable, multiInject} from "inversify"
import SERVICE_IDENTIFIER from "../../constants/identifiers";
import { IWeapon,IWarrior } from "../../interfaces/";

@injectable()
export class Samurai implements IWarrior{
    public name: string;
    public weapon: IWeapon;
    
    public constructor(@inject(SERVICE_IDENTIFIER.WEAPON) _weapon:IWeapon){
        this.name = "Samurai";
        this.weapon = _weapon;
    }
    
    public attack(): string {
        return this.weapon.harm();
    }
}