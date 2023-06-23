export abstract class Weapon {
    weaponName: string;
    harm(): void{
        console.log(`Harm is done by ${this.weaponName}`)
    }
}