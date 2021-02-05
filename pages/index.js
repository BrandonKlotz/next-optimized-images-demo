import Head from 'next/head'
import planet from '../public/planet-1.png?trace'

export default function Home() {
  return (
    <div>
      Hello world
      <div className="w-96 h-auto">
         <img src={planet.trace} />
         <img src={planet.src} />
      </div>
    </div>
  )
}
