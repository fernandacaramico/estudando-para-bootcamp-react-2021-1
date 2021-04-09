import React from 'react';
import NavBar from '../components/NavBar'
import MusicCard from '../components/MusicCard'

function Music() {
    return (
        <>
        <NavBar />
            <div className="container">
                <div className="filter">
                    <Button lado="right">Adicionar</Button>
                    <button className="btn-green right">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                </div>

            </div>

        </>

    );
}

export default Music;