import { IWeapon } from './weapon';

export interface IWarrior {
    name: string;
    weapon: IWeapon;
    attack(): string;
}