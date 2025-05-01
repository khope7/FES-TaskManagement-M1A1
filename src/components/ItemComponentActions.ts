// ItemComponentActions.ts

import Item from "./Item";

type ItemComponentActions =
    | { type: 'ADD_ITEM'; payload: Item }
    | { type: 'REMOVE_ITEM'; payload: number };

export default ItemComponentActions;