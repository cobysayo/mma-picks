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
          image={fighter.headshot}
          alt={fighter.fullName}
        />
        <CardContent sx={{width:200, height:'100%'}}>
          <div style={{display: 'flex'}}>
            <Checkbox checked={isChecked} color="success" sx={{marginLeft:'auto'}}/>
          </div>
          <Typography gutterBottom variant="h5">
            {fighter.fullName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {`Age: ${fighter.age}`}
            <br/>
            {`Height: ${fighter.height}`}
            <br/>
            {`Reach: ${fighter.reach}`}
            <br/>
            {`Weight: ${fighter.weight}`}
            <br/>
            {`Record: ${fighter.record}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default FighterCard