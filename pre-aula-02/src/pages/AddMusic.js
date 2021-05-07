import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import addMusicImg from '../assets/images/add-music-img.png'

function AddMusic() {
    return (
        <>
        <NavBar/>
    <div className="container">
      <div className="add-music">
        <form>
          <h1>Adicionar</h1>
          <div>
            <label>Nome: <input type="text" /></label>
          </div>
          <div>
            <label>Genêro: <input type="text" /></label>
          </div>
          <div>
            <label>Ano Lançamento:</label>
            <input type="text" />
          </div>

          <div>
            <label> Imagem (url):</label>
            <input type="text" />
          </div>
          <div>
            <Button destino="/minhas-musicas" >Adicionar</Button>
          </div>
        </form>
        <img src={addMusicImg} alt="" />
      </div>
    </div>
        </>
    );
}

export default AddMusic;