import { injectable } from "inversify";

@injectable()
export abstract class Weapon {
    weaponName: string;
    harm(): string {
        return `Harm is done by ${this.weaponName}`
    }
}