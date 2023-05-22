import React from 'react'

const Projects = () => {

    const handleClickProjectRickandMorty = () => {
        window.open('https://rick-and-morty-by-cg.netlify.app/', '_blank')
    }

    const handleClickProjectPokedex = () => {
        window.open('https://pokedex-by-cgutierrez.netlify.app/', '_blank')
    }

    const handleClickProjectCrud = () => {
        window.open('https://base-usuarios-by-cg.netlify.app/', '_blank')
    }
    
  return (
    <article className='mt-5'>
        <h2 className='text-center text-4xl font-extrabold'>Mis proyectos</h2>
        <article className='max-w-[470px] p-2 mx-auto md:w-full md:max-w-[960px] md:p-6'>
            <h2 className='font-bold text-[#7127BA]'>Pokedex</h2>
            <section className='grid gap-2 py-2 md:flex md:gap-4 md:items-center'>
                <div className='max-w-full rounded-md border-[2px] border-[#38126D]'>
                    <img className='object-cover rounded-md md:object-contain' src="/images/pokedex.png" alt="" />
                </div>
                
                    <p>
                    Encuentra tu Pokémon favorito, fíltralos por tipo de Pokémon, busca tu favorito por nombre y analiza cada propiedad básica que tienen en esta espectacular Pokedex.
                    </p>
                
            </section>
            <button className='grid w-auto mx-auto p-2 border-[2px] border-[#7127BA] rounded-md' onClick={handleClickProjectPokedex}>Ver proyecto</button>
        </article>
        <article className='max-w-[470px] p-2 mx-auto md:w-full md:max-w-[960px] md:p-6'>
            <h2 className='font-bold text-[#7127BA]'>Metods CRUD - Api</h2>
            <section className='grid gap-2 py-2 md:flex md:gap-4 md:items-center'>
                <div className='max-w-full rounded-md border-[2px] border-[#38126D]'>
                    <img className='object-cover rounded-md md:object-contain' src="/images/crud.png" alt="" />
                </div>
                
                    <p>
                    Crea, actualiza y elimina información en este prototipo de creación de usuarios amigable para ti con un diseño elegante.
                    </p>
                
            </section>
            <button className='grid w-auto mx-auto p-2 border-[2px] border-[#7127BA] rounded-md' onClick={handleClickProjectCrud}>Ver proyecto</button>
        </article>
        <article className='max-w-[470px] p-2 mx-auto md:w-full md:max-w-[960px] md:p-6'>
            <h2 className='font-bold text-[#7127BA]'>Rick and Morty</h2>
            <section className='grid gap-2 py-2 md:flex md:gap-4 md:items-center'>
                <div className='max-w-full rounded-md border-[2px] border-[#38126D]'>
                    <img className='object-cover rounded-md md:object-contain' src="/images/rick-and-morty.png" alt="" />
                </div>
                
                    <p>
                    Navega en una interfaz donde encontraras todos los personajes de la serie Rick and Morty y cada una de sus dimensiones. Fíltralos por número de dimensión y analiza todas sus propiedades.
                    </p>
                
            </section>
            <button className='grid w-auto mx-auto p-2 border-[2px] border-[#7127BA] rounded-md' onClick={handleClickProjectRickandMorty}>Ver proyecto</button>
        </article>
    </article>
  )
}

export default Projects