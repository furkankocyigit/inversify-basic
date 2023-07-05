import "reflect-metadata";
import {Container, injectable, interfaces} from "inversify"
import SERVICE_IDENTIFIER from "../src/constants/identifiers";
import { IBattle, IWarrior, IWeapon } from "../src/interfaces";
import { EpicBattle } from "../src/entities/battle/epicBattle";
import { WarriorFactory } from "../src/factory/warriorFactory";
import { WeaponFactory } from "../src/factory/weaponFactory";

let container = new Container();

container.bind<interfaces.Factory<IWeapon>>("Factory<Weapon>").toFactory<IWeapon>((context: interfaces.Context) => {
    return (weaponType: string) => {
        let factory = context.container.get<WeaponFactory>("WeaponFactory");
        return factory.createWeapon(weaponType);
    };
});

container.bind<interfaces.Factory<IWarrior>>("Factory<Warrior>").toFactory<IWarrior>((context: interfaces.Context) => {
    return (warriorType: string,weaponType:string) => {
        let weapon = context.container.get<WeaponFactory>("WeaponFactory").createWeapon(weaponType);
        let factory = context.container.get<WarriorFactory>("WarriorFactory");
        return factory.createWarrior(warriorType, weapon);
    };
});

container.bind<WeaponFactory>("WeaponFactory").to(WeaponFactory);
container.bind<WarriorFactory>("WarriorFactory").to(WarriorFactory);

container.bind<IBattle>(SERVICE_IDENTIFIER.BATTLE).to(EpicBattle);

export default container;


