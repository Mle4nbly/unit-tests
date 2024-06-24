export function healthChecking(heroInfo) {
    let health = heroInfo['health'];

    if (health > 50) {
        console.log("healthy");

        return "healthy";
    }
    if (health >= 15 && health <= 50) {
        console.log("wounded");

        return "wounded";
    } 
    if (health < 15) {
        console.log("critical");

        return "critical";
    }

    console.log("immortal");
    return "immortal";
}