import React from 'react';
import EditIcon from '../assets/images/edit-icon.png';
import DeleteIcon from '../assets/images/delete-icon.png';
import StarSolidIcon from '../assets/images/star-solid.png';

function MusicBox(props) {
    return (

        <div className="music-box">
            <div className="img-music"></div>
            <div className="music-data">
                <div className="icons">
                    <img src={EditIcon} alt="" className="edit" />
                    <img src={DeleteIcon} alt="" className="delete" />
                    <img src={StarSolidIcon} alt="" className="stars" />
                </div>
                <div className="name">
                    <label> Nome:
                        <input className="input-music" type="text" value={props.nome} />
                    </label>
                </div>
                <div className="genre">
                    <label> Genêro:
                        <input className="input-music" type="text" value={props.genero} />
                    </label>
                </div>
                <div className="release">
                    <label> Lançamento:
                        <input className="input-music" type="text" value={props.ano} />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default MusicBox;