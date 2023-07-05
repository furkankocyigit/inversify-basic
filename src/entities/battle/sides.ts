import config from "config";

export const BattleSides = {
    warrior1: {
        name: config.get<string>("Warriors.firstSide"),
        weapon: config.get<string>("Weapons.firstWeapon")
    },
    warrior2: {
        name: config.get<string>("Warriors.secondSide"),
        weapon: config.get<string>("Weapons.secondWeapon")
    }
}
