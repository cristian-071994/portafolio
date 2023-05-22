import React from 'react'

const Projects = () => {

    const handleClickProjectRickandMorty = () => {
        window.open('https://rick-and-morty-by-cg.netlify.app/', '_blank')
    }

    const handleClickProjectPokedex = () => {
        window.open('https://pokedex-by-cgutierrez.netlify.app/', '_blank')
    }
  return (
    <article className='mt-5'>
        <h2 className='text-center text-4xl font-extrabold'>Mis proyectos</h2>
        <article className='max-w-[470px] p-2 mx-auto'>
            <h2>Pokedex</h2>
            <section className='grid gap-2 py-2'>
                <div className='max-w-full rounded-md border-[2px] border-[#38126D]'>
                    <img className='object-cover' src="/images/pokedex.png" alt="" />
                </div>
                
                    <p>
                    Encuentra tu Pokémon favorito, fíltralos por tipo de Pokémon, busca tu favorito por nombre y analiza cada propiedad básica que tienen en esta espectacular Pokedex.
                    </p>
                
            </section>
            <button className='grid w-auto mx-auto p-2 border-[2px] rounded-md' onClick={handleClickProjectPokedex}>Ver proyecto</button>
        </article>
        <article className='max-w-[470px] p-2 mx-auto'>
            <h2>Rick and Morty</h2>
            <section className='grid gap-2 py-2'>
                <div className='max-w-full rounded-md border-[2px] border-[#38126D]'>
                    <img className='object-cover' src="/images/rick-and-morty.png" alt="" />
                </div>
                
                    <p>
                    Navega en una interfaz donde encontraras todos los personajes de la serie Rick and Morty y cada una de sus dimensiones. Fíltralos por número de dimensión y analiza todas sus propiedades.
                    </p>
                
            </section>
            <button className='grid w-auto mx-auto p-2 border-[2px] rounded-md' onClick={handleClickProjectRickandMorty}>Ver proyecto</button>
        </article>
    </article>
  )
}

export default Projects