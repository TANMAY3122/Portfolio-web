import React from 'react'
import Title from '../ui/title'

const Education = () => {
    return (
        <section className='mt-14'>
            <Title title='Education' />
            <div className='flex flex-col gap-1 mt-4'>
                <h3 className='text-lg '>Adani University</h3>
                <p className='text-sm '>BE - Information Communication Technology</p>
                <p className='text-sm text-gray-600 dark:text-neutral-400'>8.26 cgpa</p>
                <p className='text-sm text-gray-600 dark:text-neutral-400'>2020 - 2024</p>
            </div>
        </section>
    )
}

export default Education