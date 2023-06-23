import SERVICE_IDENTIFIER from "../../constants/identifiers";
import { Battle, Warrior } from "../../interfaces";
import {inject, injectable} from "inversify";

@injectable()
export class EpicBattle implements Battle{
    
    @inject(SERVICE_IDENTIFIER.WARRIOR) public warrior1:Warrior;
    @inject(SERVICE_IDENTIFIER.WARRIOR) public warrior2:Warrior;
    
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