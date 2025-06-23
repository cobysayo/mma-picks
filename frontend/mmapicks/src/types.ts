export type Fighter = {
    headshot: string,
    fullName: string,
    age: string,
    height: string,
    reach: string,
    weightClass: string,
    weight: string,
    record: string
}

export type FightData = {
    fightId: number;
    fighters: Fighter[];
}

export type FightNightData = FightData[]