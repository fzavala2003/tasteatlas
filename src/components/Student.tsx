import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Data {
  apellido: string
  nombre: string
  paralelo: string
}
export default function Student( data: Data ) {
    return (
        <>
            <Typography component="p" variant="h4">
                
                {data.apellido} {data.nombre}

            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>

                {/* PENDIENTE: Renderice el paralelo */}
                Paralelo #{data.paralelo}

            </Typography>
        </>
    )
}
