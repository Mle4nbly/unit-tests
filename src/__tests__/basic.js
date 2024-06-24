import { healthChecking } from "../js/game";

test('healthChecking if healthy', () => {
    const heroInfo = {name: 'Маг', health: 90};
    const result = healthChecking(heroInfo);

    expect(result).toBe('healthy');
});

test('healthChecking if wounded', () => {
    const heroInfo = {name: 'Маг', health: 50};
    const result = healthChecking(heroInfo);

    expect(result).toBe('wounded');
});

test('healthChecking if critical', () => {
    const heroInfo = {name: 'Маг', health: 10};
    const result = healthChecking(heroInfo);

    expect(result).toBe('critical');
});

test('healthChecking if immortal', () => {
    const heroInfo = {name: 'Маг', health: "immortal"};
    const result = healthChecking(heroInfo);

    expect(result).toBe('immortal');
});