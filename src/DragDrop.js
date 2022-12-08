import GiftPicture from "./GiftPicture";
import React, { useState } from "react";
import { useDrop } from "react-dnd";

const GiftPictures = [
    {
        id: 1,
        url:
            "https://images.unsplash.com/photo-1511870381062-cb2443fb0fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
    },
    {
        id: 2,
        url:
            "https://images.unsplash.com/photo-1482175828271-d793f8c731b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
    },
    {
        id: 3,
        url:
            "https://images.unsplash.com/photo-1637338741891-4bc086664534?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    }
];

function DragDrop() {
    const [tree, setTree] = useState([]);

    return (
        <div>
            <div className='Gifts'>
                {GiftPictures.map((giftPicture) => {
                    return <GiftPicture url={giftPicture.url} id={giftPicture.id} />;
                })}
            </div>
        </div>
    )
};

export default DragDrop;
