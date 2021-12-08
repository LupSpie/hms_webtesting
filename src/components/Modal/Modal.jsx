import React from "react";
import "./Modal.css";
import logotipo from "../../icons/logotipo.png";

function Modal({ setOpenModal }) {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id='cancelBtn'
                    >
                        X
                    </button>
                </div>
                <div className='title'>
                    <img src={logotipo} alt='logotipo da mindspaces' />
                </div>
                <div className='body'>
                    <h2>Feito por:</h2>
                    <ul>
                        <li>Eduardo Silva</li>
                        <li>João Oliveira</li>
                        <li>Kaique Oliveira</li>
                        <li>Miguel Henrique</li>
                        <li>Renan Pepi</li>
                    </ul>
                    <br />
                    <h2>Feito com:</h2>
                    <ul>
                        <li>CRA (Create React App)</li>
                        <li>100ms</li>
                        <li>Tailwind</li>
                        <li>Framer Motion</li>
                        <li>uuid</li>
                        <li>Boring Avatars</li>
                        <li>Webrtc</li>
                        <br />
                        <p className='italics'>
                            Para ETEC de Hortolândia como projeto Final do curso de
                            desenvolvimento de sistemas.
                        </p>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Modal;
