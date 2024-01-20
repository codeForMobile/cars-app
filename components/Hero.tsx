'use client'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, Book or Rent a car - quickly!
            </h1>
            <p className='hero__subtitle'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nihil, vel libero consequatur vero sed, animi molestiae quas tenetur praesentium nam laboriosam labore iure. Et maxime architecto magni maiores a.
            </p>

            <CustomButton
                title='Explore Cars'
                containerStyles='bg-primary-blue text-white rounded-full mt-10'
                handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image 
                    src='/hero.png'
                    alt='hero'
                    fill className='object-contain'
                />
                <div className='hero__image-overlay'/>
            </div>
        </div>
    </div>
  )
}

export default Hero