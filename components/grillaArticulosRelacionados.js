import React from 'react'
import Link from 'next/link'

const GrillaArticulosRelacionados = () => (
    <>
    <div className="articuloRelacionado">
        <div className="ArticuloRelacionadoImg">
            <img src={`https://picsum.photos/id/237/359/255`} alt={`imagen`} />
            <span className="btn-social">twt-fbk</span>
        </div>
        <h3 className="DescriptionArticuloTitle">Un día para el autismo no es suficiente: Aún faltan más acciones</h3>
    </div>
    <style jsx>{`
        .articuloRelacionado {
            width: 100%;
        }
        @media (min-width: 481px) {
            .articuloRelacionado {
                width: calc(50% - 15px);
            }
        }
        @media (min-width: 989px) {
            .articuloRelacionado {
                width: calc(33.3333% - 20px); 
            }
        }
        .btn-social {
            display: inline-block;
            background: red;
            position: absolute;
            bottom: 15px;
            right: 15px;
            width: auto;

        }
        .ArticuloRelacionadoImg {
            position: relative;
        }
        .ArticuloRelacionadoImg img {
            border-radius: 17px;
            width: 100%;
            display: block;
        }
        .DescriptionArticuloTitle {
            font-family: 'Lato', sans-serif;
            font-weight: 900;
            font-size: 26px;
            line-height: 30px;
        }
    `}</style>
    </>
)

export default GrillaArticulosRelacionados