import { Typography } from "@mui/material";

const Counter = ({count}:{count:number}) => {
    return <Typography gutterBottom variant="h3" sx={{marginLeft: 'auto', marginRight:'50px'}} >
            {count}/5
          </Typography>   
}

export default Counter;