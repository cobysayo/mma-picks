import { FightData } from "../types";
import FighterCard from "./FighterCard";

type FightProps = {
    data: FightData
    count: {
        count: number,
        setCount: (n:number) => void
  }
}

const useCSS = () => {
    return {
        fightCardContainer: {
            display:'flex',
            justifyContent:'center'
        }
    }
}

// .box {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 2px dotted rgb(96 139 168);
// }

const Fight = ({data, count}: FightProps) => {
    const styles = useCSS()

    return <div style={styles.fightCardContainer}>
        {/* TODO: add weight class */}
        <FighterCard fighter={data.fighters[0]} count={count}/>
        <FighterCard fighter={data.fighters[1]} count={count}/>
    </div>
}

export default Fight;