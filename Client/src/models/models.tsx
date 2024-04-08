export interface ImageModel {
    name: string;
    imageUrl: string;
}

export const models :ImageModel[] = [
    {
        name: "battery",
        imageUrl: 'assets/9vBattery.png'
    },
    {
        name: 'AC',
        imageUrl: 'assets/AC.png'
    },
    {
        name: 'Battery',
        imageUrl: 'assets/HomeBattery.png'
    },
    {
        name: 'nail',
        imageUrl: 'assets/nail.png'
    },
    {
        name: 'Refrigerator',
        imageUrl: 'assets/Refrigerator.png'
    },
    {
        name:'TableFan',
        imageUrl: 'assets/TableFan.png'
    },
    {
        name: 'WallOutlet',
        imageUrl: 'assets/WallOutlet.png'
    },
    {
        name: 'WallSwitch',
        imageUrl: 'assets/WallSwitch.png'
    },
    {
        name: 'Wire',
        imageUrl: 'assets/Wire.png'
    }];