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
            justifyContent:'center',
            marginLeft:'350px',
            marginRight:'350px',
            marginTop:'10px',
            border: '2px solid',
            borderRadius: '10px',
            padding:'5px' 
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

    return <div>
        <div style={styles.fightCardContainer}>
            <div style={{marginRight:'50px', minWidth:'110px', maxWidth:'110px' }}> {data.fighters[0].weightClass}</div>
            <FighterCard fighter={data.fighters[0]} count={count}/>
            <FighterCard fighter={data.fighters[1]} count={count}/>
        </div>
    </div>
}

export default Fight;