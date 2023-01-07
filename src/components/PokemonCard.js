import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon })
{
  const [isBack, setIsBack] = useState(false)
  function handleSpriteClick()
  {
    setIsBack(!isBack)
  }

  const { name, hp, sprites } = pokemon
  return (
    <Card>
      <div onClick={handleSpriteClick}>
        <div className="image">
          <img alt="oh no!" src={isBack ? sprites.back : sprites.front} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
