import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import MusicBox from '../components/MusicBox';

function MinhasMusicas() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="filter">
                    <Button>Adicionar</Button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                    <MusicBox nome="Imagine" genero="Pop" ano="1970" />
                </div>
            </div>
        </>
    );
}

export default MinhasMusicas;