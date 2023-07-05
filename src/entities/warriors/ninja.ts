import { inject, injectable, multiInject} from "inversify"
import SERVICE_IDENTIFIER from "../../constants/identifiers";
import { IWarrior,IWeapon } from "../../interfaces";
import config from "config";

@injectable()
export class Ninja implements IWarrior{
    public name: string;
    public weapon: IWeapon;
    
    public constructor(@inject(SERVICE_IDENTIFIER.WEAPON) _weapon:IWeapon ){
        this.name = "Ninja";
        this.weapon = _weapon;
    }
    
    public attack(): string  {
        return this.weapon.harm();
    }
}