"use strict";
class car {
    drive() {
        console.log('driving a car');
    }
}
class truck {
    drive() {
        console.log('driving a truck');
    }
    loadTruck(quantity) {
        console.log(quantity);
    }
}
let v1 = new car();
let v2 = new truck();
function useVehicle(veh) {
    veh.drive();
    if ('loadTruck' in veh) {
        veh.loadTruck(50);
    }
    if (veh instanceof truck) {
        veh.loadTruck(100);
    }
}
useVehicle(v1);
useVehicle(v2);
function animalMovement(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'tiger':
            speed = animal.runningSpeed;
            break;
        default:
            console.log('incorrect');
    }
    console.log(speed);
}
animalMovement({ type: 'bird', 'flyingSpeed': 45 });
animalMovement({ type: 'tiger', 'runningSpeed': 36 });
