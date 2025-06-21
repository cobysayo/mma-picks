export type Fighter = {
    name: string;
    image: string;
    stats: string;
}

export type FightData = {
    fightId: number;
    fighters: Fighter[];
}

export type FightNightData = FightData[]