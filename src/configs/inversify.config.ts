import "reflect-metadata";
import {Container} from "inversify"
import SERVICE_IDENTIFIER from "../constants/identifiers";
import { Battle, Warrior, Weapon } from "../interfaces";
import { Ninja } from "../entities/warriors/ninja";
import { Samurai } from "../entities/warriors/samurai";
import { EpicBattle } from "../entities/battle/epicBattle";
import { Katana } from "../entities/weapons/katana";

let container = new Container();

container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Ninja);
//container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Samurai);

container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Katana);

container.bind<Battle>(SERVICE_IDENTIFIER.BATTLE).to(EpicBattle);

export default container;