/*Esto es lo que se verá en el browser*/
import Head from 'next/head';
import {useState} from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.css';
import SearchInput from '../components/SearchInput/SearchInput';
import TableMeetings from '../components/TableMeetings/TableMeetings';

export default function Home({countries}) {/*cambia countries por nombre o codigo de la reunión*/
  console.log(countries);/*Listado en consola de todas las reuniones*/


  
  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(keyword) ||
    country.capital.toLowerCase().includes(keyword) ||
    country.subregion.toLowerCase().includes(keyword)); /*Keyword es la palabra por la que se filtrará*/
  
  const onInputChange = (event) => {
    event.preventDefault(); /*Cancela el evento para que no ocurra*/

    setKeyword (event.target.value.toLowerCase());
  }
  
  return (
    <Layout>
      <div className = {styles.inputContainer}>
      <div className = {styles.count} >Buscar {countries.length} reuniones</div>
      
      <div className = {styles.input}>
      <SearchInput 
      placeholder = "Nombre de la reunión"
      onChange = {onInputChange} /*Evento ocurre cuando valor del elemento ha sido cambiado*/
      />
      </div>
      </div>
      
      <TableMeetings countries = {filteredCountries} /> 
    </Layout>
  )
}

export const getStaticProps = async () => { /*Esta función va a devolver una promesa*/
  const res = await fetch("https://restcountries.eu/rest/v2/all"); /*Aqui va la llamada a la API que devuelve nombres o votaciones*/
  const countries = await res.json(); /*cambiar countries por reuniones*/

  return {
    props: {
      countries,/*Cambiar por reuniones*/
    },
  };
};