import React from "react";
import { Tile } from '../../components/tile/Tile';

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => {
        const {name, ...description } = tile;
        return <Tile key={index} name={name} description={description}/>
      })}
    </div>
  );
};
