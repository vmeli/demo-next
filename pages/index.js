import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import GrillaArticulosRelacionados from '../components/grillaArticulosRelacionados'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="stylesheet" type="text/css" charset="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet"></link>
    </Head>

    <Nav />

    <div className="wrapperminisite">Sandor</div>

    <div className="wrapperminisite">
    <h2 className="GrillaArticulosRelacionados">Noticias</h2>
        <div className="GrillaArticulos">
          <GrillaArticulosRelacionados />
          <GrillaArticulosRelacionados />
          <GrillaArticulosRelacionados />
        </div>
    </div>

    <style jsx>{`
      .wrapperminisite {
        /*max-width: 1920px;*/
        max-width: 1440px;
        width: 100%;
        margin: auto;
        background-color: #ededed;
      }
      .GrillaArticulosRelacionados {
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 19.8px;
        line-height: 49px;
        background: #0051ff;
        display: inline-block;
        min-width: 151px;
        text-align: center;
        color: #FFF;
        border-top-right-radius: 29px;
        border-bottom-right-radius: 29px;
        /*padding: 0 139px;*/
        /*padding: 0 8.7rem;*/
        margin: 0 0 42px;
      }
      .GrillaArticulos {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        margin: 0 30px;
      }
      @media (min-width: 481px) {
        .GrillaArticulosRelacionados {
          min-width: 433px;
        }
      }
      @media (min-width: 989px) {
        .GrillaArticulos {
          margin: 0 15px;
        }
      }
    `}</style>
  </div>
)

export default Home
