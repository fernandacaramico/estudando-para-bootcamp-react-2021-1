import React from 'react';
<<<<<<< HEAD

function NotFound() {
    return(
        <>
        <nav>
        <div class="container">
            <img class="logo" src="../images/logo.png" alt="Logo"/>
            <img src="../images/avatar.png" alt="Avatar" class="avatar"/>
        </div>
    </nav>

    <div class="container index ">
        <div class="index-content">
            <div class="box-text-index">
                <div class="info-index not-found">
                    <h1>Oops!</h1>
                    <h3>A página que você procura não foi encontrada.</h3>
                </div>
                <div class="img-index"></div>
                <button class="btn-green">Voltar</button>
            </div>     
            <img src="../images/not-found.png" alt="" class="index-img"/>
        </div>  
    </div> 
    </>  
    );

=======
import NavBar from '../components/NavBar';
import notFound from '../assets/images/not-found.png'
import Button from '../components/Button';

function NotFound() {
    return (
        <>
            <NavBar />

            <div className="container index ">
                <div className="index-content">
                    <div className="box-text-index">
                        <div className="info-index not-found">
                            <h1>Oops!</h1>
                            <h3>A página que você procura não foi encontrada.</h3>
                        </div>
                        <div className="img-index"></div>
                        <Button lado="left">Voltar</Button>
                    </div>
                    <img src={notFound} alt="" className="index-img" />
                </div>
            </div>
        </>
    );
>>>>>>> c69a59e1662fc2f5b7e711b64999be3916d29b62
}

export default NotFound;