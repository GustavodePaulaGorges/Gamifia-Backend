import express from "express";
import cors from 'cors'

import axios from "axios";

const app = express()
app.use(cors())


app.get('/games', async (_, res) => {
    const body = "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    const { data } = await axios.post(
      `https://api.igdb.com/v4/games`, body, 
      { 
        headers: { 
          'Accept': 'application/json', 
          'Client-ID': 'ifkbm8zyz72nykbtv2rfwyb5syb1qt', 
          'Authorization': 'Bearer 3zu22nn07fpobd53u9b6l4jx2d0lst'
        }
      }
    );
    console.log(data)
    res.send(data)
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})