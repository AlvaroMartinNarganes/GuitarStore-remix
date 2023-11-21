//Al poner server indicamos que este archivo solo puede usarse en el servidor
export async function getCurso(){
    const response= await fetch(`${process.env.API_URL}/curso?populate=imagen`)
    return await response.json();
}
