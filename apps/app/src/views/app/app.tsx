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
          class="relative text-center text-4xl font-bold text-gray-900 text-left px-2 py-8"
          >
            Settings
          </div>
      </div>
    </>
  )
}