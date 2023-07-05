import { injectable } from "inversify";

@injectable()
export abstract class IWeapon {
    weaponName: string;
    harm(): string {
        return `Harm is done by ${this.weaponName}`
    }
}