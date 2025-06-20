import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'

const FighterCard = () => {
    return ( <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="254"
          
          width="auto"
          image="https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2504169.png&w=350&h=254"
          alt="charles oliveira"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default FighterCard