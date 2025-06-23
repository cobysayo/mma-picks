"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const port = 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/fights', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fightNightData = [];
    yield axios_1.default.get("https://sports.core.api.espn.com/v2/sports/mma/leagues/ufc/events").then((result) => __awaiter(void 0, void 0, void 0, function* () {
        const ufcEvent = result.data.items[0].$ref;
        yield axios_1.default.get(ufcEvent).then((result) => __awaiter(void 0, void 0, void 0, function* () {
            const fightList = result.data.competitions;
            for (let i = 0; i < result.data.competitions.length; i++) {
                const fight = [];
                for (let j = 0; j < 2; j++) {
                    yield axios_1.default.get(fightList[i].competitors[j].athlete.$ref).then((result) => __awaiter(void 0, void 0, void 0, function* () {
                        const athlete = result.data;
                        yield axios_1.default.get(athlete.records.$ref).then((result) => {
                            fight.push({
                                headshot: athlete.headshot.href,
                                fullName: athlete.fullName,
                                age: athlete.age,
                                height: athlete.displayHeight,
                                reach: athlete.displayReach,
                                weightClass: athlete.weightClass.text,
                                weight: athlete.displayWeight,
                                record: result.data.items[0].displayValue
                            });
                        });
                    }));
                }
                fightNightData.push({ fighters: fight });
            }
            console.log(JSON.stringify(fightNightData, null, 2));
        }));
    }));
    res.status(200).send(fightNightData);
}));
app.listen(port, () => console.log('hello world!!!!!'));
