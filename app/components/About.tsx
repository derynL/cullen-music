import { Card } from 'flowbite-react';

export function about(): JSX.Element {
  return (
    <div className='max-w-2xl align-middle justify-center'>
      <header>
        <h1 className='mt-9 mb-3 text-4xl text-center font-bold dark:text-gray-200'>
          Cullen Music
        </h1>
      </header>
      <Card
        imgAlt='Meaningful alt text for an image that is not purely decorative'
        imgSrc='cullen-music.png'
      >
        {/* <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Noteworthy technology acquisitions 2021
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p> */}
      </Card>
    </div>
  );
}
