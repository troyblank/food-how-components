import React from 'react';

export default function Ingredient({ id, ingredientClickHand, icon, name }) {
    function onClick() {
        ingredientClickHand(id);
    }

    return (
      <li onClick={onClick}>{icon}{name}</li>
    );
}
