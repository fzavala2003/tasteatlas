import './App.css'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'

// PENDIENTE: Cree la interfaz
import { type Dish } from './interface/Dish'


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"
  
  const [dishes, setDishes] = useState<Dish[]>([])
  


  const fetchDishes = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setDishes(data)
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }

  useEffect(() => {
    fetchDishes()
  }, [])

  


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student apellido="Zavala" nombre="Fernando" paralelo="102"></Student>

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <DishTable data={dishes }></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
