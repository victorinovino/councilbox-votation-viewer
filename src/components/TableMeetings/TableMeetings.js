/*Componente tabla lista de reuniones*/
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded  } from '@material-ui/icons';
import { useState } from 'react';
import styles from './TableMeetings.module.css';

/*Componente para orden de la cabecera */
const orderBy = (countries, value, direction ) => {
  if (direction === 'asc') {
    return [...countries].sort((a,b) => (a[value] > b[value] ? 1 : -1)); /*value hace referencia a los atributos del objeto countries*/
  }

  if (direction === 'desc') {
    return [...countries].sort((a,b) => (a[value] > b[value] ? -1 : 1));
  }
  
  return countries;
} 

/*Componente para indicar si la flecha arriba abajo o que no aparezca en función del valor de dirección (asc/desc)*/
const SortArrow = ({direction}) => {
  if (!direction) {
    return <></>; /*Si no se especifica dirección no muestra flecha*/ 
  }
/*Condición flecha abajo*/
  if (direction === "desc") {
    return (
    <div className = {styles.heading_arrow}>
    <KeyboardArrowDownRounded color = "inherit" /> 
    </div>
    )
  }
/*Condición flecha arriba*/  
  else {
    return (
    <div className = {styles.heading_arrow}>
    <KeyboardArrowUpRounded color = "inherit" />
    </div>
    )
  }
}

/*El valor de countries (petición desde el index) se pasa como prop*/
const TableMeetings = ({countries}) => {

    const [direction,setDirection] = useState(); 
    /*Hook UseState cuyo valor inicial es cero*/
    /*direction representa el estado del componente TableMeetings*/ 
    /*SetDirection que es la función para cambiar el valor del estado */
    const [value,setValue] = useState();

    /*Variable que almacena el resultado de los países en orden descendente*/
    const orderedCountries = orderBy (countries,value, direction)

    /*Variable que almacena el resultado de cambiar la dirección de la flecha*/ 
    const switchDirection = () => {
      if(!direction) {
        setDirection("desc");
      }
      else if (direction === "desc") {
        setDirection("asc");
      }
      else {
        setDirection(null);
      }
    }

    /*Variable que almacena el resultado de cambiar la dirección y el valor de countries*/
    const setValueAndDirection = (value) => {
      switchDirection();
      setValue (value)
    }

    return (
        <div>
          <div className = {styles.heading}>
              <button className = {styles.heading_nombre} onClick={() => setValueAndDirection ("name")}>
                <div>Nombre</div>
                <SortArrow direction = {direction} /> 
              </button>

              <button className = {styles.heading_aFavor}> 
                <div>A Favor</div>
                <SortArrow direction = {direction} />
              </button>

              <button className = {styles.heading_enContra}>
                <div>En Contra</div>
                <SortArrow direction = {direction} />
               </button>
              
              <button className = {styles.heading_abstenciones} onClick={() => setValueAndDirection ("population")}>
                <div>Abstenciones</div>
                <SortArrow direction = {direction} />
              </button>
          </div>

          {orderedCountries.map((country)=> (
              <div className = {styles.row}>
                  <div className = {styles.name}>{country.name}</div>
                  <div className = {styles.population}>{country.population}</div>
                  <div className = {styles.region}>{country.region}</div>
                  <div className = {styles.capital}>{country.capital}</div>
              </div>    
          ))}

        </div>
    )
}

export default TableMeetings;