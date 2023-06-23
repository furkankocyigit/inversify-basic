import container from "./src/configs/inversify.config";
import SERVICE_IDENTIFIER from "./src/constants/identifiers";
import { Battle } from "./src/interfaces";

let epicBattle = container.get<Battle>(SERVICE_IDENTIFIER.BATTLE);

console.log('\t\t******* Welcome to Battle! *******\n');

console.log(epicBattle.showEnemies());
console.log(epicBattle.startBattle());