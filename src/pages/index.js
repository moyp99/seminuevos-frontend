import Head from "next/head";
import Image from "next/image";
import groq from 'groq'
import CardCarrousel from "../components/CardCarrousel";
import Landing from "../components/MainPage/Landing";
import client from '../lib/client'

export default function Home({cars}) {
  console.log(cars)
  return (
    <>
     <Landing/>
    <CardCarrousel cars={cars}/>
    </>
  );
}


const query = groq`*[_type == "car"]`

export async function getStaticProps(context) {

  const cars = await client.fetch(query)
  return {
    props: {
      cars
    }
  }
}