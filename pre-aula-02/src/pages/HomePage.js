import React from 'react';
import Button from '../components/Button';
import imgIndex from '../assets/images/index-img.png';
import NavBar from '../components/NavBar'

function HomePage() {
    return (
        <>
            <NavBar />
            <div className="container index">
                <div className="index-content">
                    <div className="box-text-index">
                        <div className="info-index">
                            <h1>Faça parte do nosso dicionário de música </h1>
                            <h3>Contribua e fique por dentro das novidades  </h3>
                        </div>
                        <div className="img-index"></div>
                        
                        <Button lado="right" destino="/minhas-musicas">Conhecer!</Button>
                    </div>
                    <img src={imgIndex} alt="" className="index-img" />
                </div>
            </div>
        </>
    );

}

export default HomePage;