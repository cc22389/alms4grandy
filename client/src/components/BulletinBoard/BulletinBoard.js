import React from "react";
import NoteCard from "../NoteCard/NoteCard";

function BulletinBoard() {
    

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <NoteCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BulletinBoard;