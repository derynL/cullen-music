'use client';

import FooterCM from './components/FooterCM';
import HeaderCM from './components/HeaderCM';

export default function Index(): JSX.Element {
  return (
    <>
      <HeaderCM />
      <div className='flex dark:bg-gray-900'>
        <main className='order-2 m-4 flex-[1_0_16rem]'>
          <MainPage />
        </main>
      </div>
      <FooterCM />
    </>
  );
}

function MainPage(): JSX.Element {
  return (
    <div className='m-8'>
      <section>
        <header className='mt-4 mb-4'>
          <h2 className='text-4xl font-semibold dark:text-white'>
            Cullen Film Music
          </h2>
        </header>
      </section>
      <section className='w-5/6 mt-24 h-5/6 justify-center'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-2'>
          <div className='pt-28'>
            <h1 className='mb-6 text-gray-600 text-4xl dark:text-gray-200'>
              "Music is the wine that fills the cup of silence."
            </h1>
            <h3 className='text-gray-500 dark:text-gray-300'>- Robert Fripp</h3>
          </div>
          <div className='justify-items-start'>
            <img
              alt='Cullen Music'
              src='/cfm-0bg.png'
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
