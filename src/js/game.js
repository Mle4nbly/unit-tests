export function healthChecking(heroInfo) {
    let health = heroInfo.health;

    if (health > 50) {
        return "healthy";
    }
    if (health >= 15 && health <= 50) {
        return "wounded";
    } 
    if (health < 15) {
        return "critical";
    }

    return "immortal";
}