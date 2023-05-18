import React from 'react'

const Header = () => {
  return (
    <section>
        <div>
            <h2 className='p-6 pb-0 text-center'>Hola, <span className='text-[#7127BA]'>soy Cristian Arley Gutierrez,</span>  un desarrollador frontend</h2>
            <div className='relative'>
                <img className='mx-auto' src="/images/background-image.png" alt="" />
                <img className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' src="/images/Me.png" alt="" />
                <img className='absolute -top-2 right-16' src="/images/Arrow.png" alt="" />
            </div>       
            
            
        </div>

        <section className='px-4 text-start text-sm'>            
            <p>Probablemente soy el diseñador más apasionado con el que trabajarás. Si tienes un gran proyecto que necesita algunas habilidades increíbles, soy quien estas buscando.</p>
        </section>

    </section>
  )
}

export default Header