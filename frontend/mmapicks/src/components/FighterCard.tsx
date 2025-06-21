import { Card, CardActionArea, CardMedia, CardContent, Typography, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { Fighter } from '../types'

type FighterCardProps = {
    fighter: Fighter
    count: {
        count: number,
        setCount: (n:number) => void
  }
}

const FighterCard = ({fighter, count}: FighterCardProps) => {
    const [isChecked, setIsChecked] = useState(false);
    return ( <Card>
      <CardActionArea disableRipple={true} onClick={() => {
        if (count.count < 5 && !isChecked){
            count.setCount(count.count+1)
            setIsChecked(true)
        } else if (count.count <= 5 && isChecked){
            count.setCount(count.count-1)
            setIsChecked(false)
        }    

      }} sx={{display:'flex', height:'100%'}}>
        <CardMedia
          component="img"
          height="254"
          width="auto"
          image={fighter.image}
          alt={fighter.name}
        />
        <CardContent sx={{width:200, height:'100%'}}>
          <div style={{display: 'flex'}}>
            <Checkbox checked={isChecked} color="success" sx={{marginLeft:'auto'}}/>
          </div>
          <Typography gutterBottom variant="h5">
            {fighter.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {fighter.stats}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default FighterCard