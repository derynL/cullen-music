'use client';

import FooterCM from './components/FooterCM';
import HeaderCM from './components/HeaderCM';
import HomeTitle from './components/HomeTitle';
import MainImage from './components/MainImage';

export default function Index(): JSX.Element {
  return (
    <>
      <HeaderCM />
      <div className='flex'>
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
          <HomeTitle />
          <div className='justify-items-start'>
            <MainImage />
          </div>
        </div>
      </section>
    </div>
  );
}
