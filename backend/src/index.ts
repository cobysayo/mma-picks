import express from "express";
import axios from "axios";
import cors from "cors";

const port = 8080;
const app = express();
app.use(cors())



app.get('/fights',  async (req, res) => {
    const fightNightData: any[] = []

    await axios.get("https://sports.core.api.espn.com/v2/sports/mma/leagues/ufc/events").then(async (result) => {
        const ufcEvent = result.data.items[0].$ref

        await axios.get(ufcEvent).then(async (result) => {
            const fightList = result.data.competitions;

            for (let i = 0; i < result.data.competitions.length; i++) {
                const fight: any = []
                for (let j = 0; j < 2; j++){
                    await axios.get(fightList[i].competitors[j].athlete.$ref).then(async (result) => {
                        const athlete = result.data

                        await axios.get(athlete.records.$ref).then( (result) => {
                            fight.push({
                            headshot: athlete.headshot?.href || 'https://secure.espncdn.com/combiner/i?img=/i/headshots/nophoto.png',
                            fullName: athlete.fullName,
                            age: athlete.age,
                            height: athlete.displayHeight,
                            reach: athlete.displayReach,
                            weightClass: athlete.weightClass.text,
                            weight: athlete.displayWeight,
                            record: result.data.items[0].displayValue
                        })
                    }
                        )
                        
                        }
                    ) 
                }
                fightNightData.push({fighters: fight})
            }

            console.log(JSON.stringify(fightNightData, null, 2))
        })
    })
    res.status(200).send(fightNightData)
})

app.listen(
    port,
    () => console.log('hello world!!!!!')
)
