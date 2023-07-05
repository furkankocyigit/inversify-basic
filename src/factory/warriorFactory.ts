import { injectable } from "inversify";
import { IWeapon } from "../interfaces";
import { Ninja } from "../entities/warriors/ninja";
import { Samurai } from "../entities/warriors/samurai";

export @injectable()
class WarriorFactory{
    public createWarrior(type: string, weapon: IWeapon){
        switch(type){
            case 'Ninja':
                return new Ninja(weapon);
            case 'Samurai':
                return new Samurai(weapon);
            default:
                throw new Error('Invalid warrior type ' + type);
        } 
    }
}