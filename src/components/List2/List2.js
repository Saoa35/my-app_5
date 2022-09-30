import React from "react";
import Item from "../Item/Item";

const List2 =  (props) => {

    return(
        <ol>
            <h2>List2</h2>

            {props.items.map(element => {
                return <Item key={element.id} value={element.item}/>
            })}
        </ol>
    )
}

export default React.memo(List2);