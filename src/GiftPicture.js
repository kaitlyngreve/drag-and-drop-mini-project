import { useDrag } from "react-dnd";

function GiftPicture({ url, id }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <div>
            <img
                className="gift-pictures"
                src={url}
                ref={drag}
                style={{ border: isDragging ? "5px solid #fff" : "0px" }}
            />
        </div>
    )
}

export default GiftPicture;