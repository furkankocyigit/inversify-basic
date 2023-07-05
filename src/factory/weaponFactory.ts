import { injectable } from "inversify";
import { Katana } from "../entities/weapons/katana";
import { Shuriken } from "../entities/weapons/shuriken";


export @injectable()
class WeaponFactory{
    public createWeapon(type: string){
        switch(type){
            case 'Katana':
                return new Katana();
            case 'Shuriken':
                return new Shuriken();
            default:
                throw new Error('Invalid weapon type ' + type);
        } 
    }
}