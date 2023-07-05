import container from "./config/inversify.config";
import SERVICE_IDENTIFIER from "./src/constants/identifiers";
import { IBattle } from "./src/interfaces";

let epicBattle = container.get<IBattle>(SERVICE_IDENTIFIER.BATTLE);

console.log('\t\t******* Welcome to Battle! *******\n');

console.log(epicBattle.showEnemies());
console.log(epicBattle.startBattle());