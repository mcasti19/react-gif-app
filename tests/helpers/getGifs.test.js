import { getGifs } from "../../src/helpers/getGifs";



describe( 'Pruebas en Helper <getGift/>', () => {

    test( 'Debe retornar un arreglo de gifs ', async () => {
        const gifs = await getGifs( 'Dragon Ball' );
        console.log( gifs );

    } );
} ); 