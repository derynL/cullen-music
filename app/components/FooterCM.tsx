import { Footer } from 'flowbite-react';
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaSoundcloud } from 'react-icons/fa';

function FooterCM(): JSX.Element {
  return (
    <Footer container className='fixed bottom-0 w-full'>
      <div className='dark:bg-gray-900'>
        <Footer.Divider />
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-2'>
          <div>
            <Footer.Copyright by='Cullen Film Music' year={2023} />
          </div>
          <div className='flex mt-4 mb-2 space-x-3 sm:justify-center sm:mt-0'>
            <Footer.Icon href='#' icon={BsYoutube} />
            <Footer.Icon href='#' icon={FaSoundcloud} />
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCM;
