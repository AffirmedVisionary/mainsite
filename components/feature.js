import Image from './image'

const Feature = ({data, iconlist}) => {
  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base font-semibold tracking-wide uppercase'>
            {data.title}
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl' style={{color: '#ffcc66'}}>
            {data.subtitle}
          </p>
          <p className='mt-4 max-w-2xl text-xl lg:mx-auto'>
            {data.description}
          </p>
        </div>

        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {iconlist.map((bullet) => {
              return (
                <div className='relative' key={bullet.id}>
                  <dt>
                    <div className='absolute flex items-center justify-center h-12 w-12 rounded-md text-white'  style={{backgroundColor: 'none'}}>
                      {/* Heroicon name: outline/globe-alt  */}
                      <Image image={bullet.icon} />
                    </div>
                    <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                      {bullet.header}
                    </p>
                  </dt>
                  <dd className='mt-2 ml-16 text-base text-gray-500'>
                    {bullet.description}
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Feature
