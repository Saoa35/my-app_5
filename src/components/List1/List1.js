import React from "react";
import Item from "../Item/Item";

export default class List1 extends React.Component {   // React.PureComponent

    state = {
        field: ''
    }

    shouldComponentUpdate(currProps, currState) {
        return this.props.item.length !== currProps.items.length;
    }

    render() {

        return(
            <ul>
                <h2>List1</h2>

                {this.props.items.map(element => {
                    return <Item key={element.id} value={element.item}/>
                })}
            </ul>
        )
    }
}