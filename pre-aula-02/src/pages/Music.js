import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import MusicCard from '../components/MusicCard';
import api from '../api';

function Music() {

    const [musics, setMusic] = useState([]);

    useEffect(() => {
        async function getMusics() {
            const resposta = await api.get("/");
            // console.log("RESPOSTA", resposta.data);
            setMusic(resposta.data);
        }
        getMusics();
    })

    

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


                    {
                        musics.map((music) => (

                            <MusicCard nome={music.nome} genero={music.genero} ano={music.ano}/>
                            )
                        )
                    }

                    <MusicCard nome="nome" genero="genero" ano="ano"/>
                    
                </div>

            </div>

        </>

    );
}

export default Music;