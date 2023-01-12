function ListRoom({room}) {
    return (
        <div className="grid">
            {room.map((room) => (
                <div className="border-2 text-white" key={room.id}>
                    <h2> {room.name}</h2>
                    <p> {room.temp}</p>
                    <p> {room.fan}</p>
                    <p> {room.air}</p>
                </div>
            ))}
        </div>
    );
}

export default ListRoom;