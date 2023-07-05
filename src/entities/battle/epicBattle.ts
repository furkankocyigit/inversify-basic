import { IBattle, IWarrior } from "../../interfaces";
import {inject, injectable} from "inversify";
import { BattleSides } from "./sides";

@injectable()
export class EpicBattle implements IBattle{
    
    public warrior1:IWarrior;
    public warrior2:IWarrior;
    
    constructor(@inject("Factory<Warrior>") warriorFactory: (warriorType:string, weaponType:string) => IWarrior){
        this.warrior1 = warriorFactory(BattleSides.warrior1.name, BattleSides.warrior1.weapon);
        this.warrior2 = warriorFactory(BattleSides.warrior2.name, BattleSides.warrior2.weapon);
    }
    startBattle(): string {
        let battleAction = `FIGHT!
                    ${this.warrior1.name} attacks: ${this.warrior1.attack()}
                    ${this.warrior2.name} attacks: ${this.warrior2.attack()}`;
        return battleAction;
    }

    showEnemies(): string {
        let sides =  `Battle Sides!
                    ${this.warrior1.name} (${this.warrior1.weapon.weaponName})
                    vs
                    ${this.warrior2.name} (${this.warrior2.weapon.weaponName})`;

        return sides;
    }
    
}