// settings.tsx
// -----------------------------------------------------------------------------

import { onMount, onCleanup } from 'solid-js'
// import uno from './app.uno'
export default function App ()
{
  let root!: any

  onMount( () =>
  {
    console.log( 'mount' )
  } )

  onCleanup( () =>
  {
    console.log( 'cleanup' )
  } );

  return (
    <>
      <div 
        ref={ root }
        class="container mx-auto"
        >
        <div 
          class="relative text-center font-bold text-gray-900 text-left font-[awesome-solid] awesome-green awesome-pri-opacity-10 awesome-opacity-60 awesome-sec-opacity-50 px-2 py-8"
          >
            App
          </div>
      </div>
    </>
  )
}