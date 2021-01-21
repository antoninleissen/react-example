import React from 'react';

/**
 * Component that presents the list of movies 
 * list : contains the movies object
 * callback : function that we call when the user clicks on a list item
 * type : variable that we use to know the type of the list we're creating
 * @param {list, callback, type} props 
 */
const List = (props) => {
    return (
        <ul className="list">
            {
                props.list.map(item => {
                    return (
                        props.type !== "FAV" ? (
                            <li className="listItem" key={item.id} onClick={() => props.callback(item)}>{item.name}</li>
                        ) : 
                        (
                            <li className="listItem" key={item.id}>
                                {item.name}
                                <span className="del" onClick={() => props.callback(item)}>x</span>
                            </li>
                        )
                    )
                })
            }
        </ul>
    )
}

export default List;