// SE debe agregar siempre el prop-types ya sea con yarn o npm y 
// luego de eso se puede importar en el componente

import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe( 'Pruebas en <GifItem/>', () => {

  const title = 'Kakaroto';
  const url = 'https://www.udemy.com/';

  test( 'Debe hacer match con el snapshot', () => {
    const { container } = render( <GifItem title={ title } url={ url } /> )
    expect( container ).toMatchSnapshot();
    // screen.debug();
  } );

  test( 'Debe mostrar la img con el URL y el ALT indicado', () => {

    render( <GifItem title={ title } url={ url } /> );
    // screen.debug();

    //NO ES UNA BUENA PRACTICA HACERLO ASI
    // const altGif = screen.getByRole( 'img' ).alt;
    // const urlGif = screen.getByRole( 'img' ).src;


    // SIEMPRE QUE SE PUEDA HACER DESESTRUCTURACION ES LO MEJOR
    const { src, alt } = screen.getByRole( 'img' );

    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  } );


  test( 'Debe mostrar el titulo en el componente', () => {

    render( <GifItem title={ title } url={ url } /> );
    expect( screen.getByText( title ) ).toBeTruthy();

  } );


  //ESTO FUE UNA PRUEBA MIA PERO NO FUNCIONA PORQUE NO HAY IDs O MAS PROPIEDADES PARA EVLUAR LA CLASE
  // test( 'Debe tener la clase CARD en el div principal', () => {
  //   render( <GifItem title={ title } url={ url } /> );
  //   screen.debug();
  //   const gifCard = screen.getByRole( 'div' );
  //   expect( gifCard ).toHaveClass( 'CARD' );

  // } );


} );