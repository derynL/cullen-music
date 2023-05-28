import { Modal } from 'flowbite';
import type { ModalOptions, ModalInterface } from 'flowbite';

const $buttonElement: HTMLElement = document.querySelector('#button');
const $modalElement: HTMLElement = document.querySelector('#modal');
const modalOptions: ModalOptions = {
  placement: 'bottom-center',
};
const modal: ModalInterface = new Modal($modalElement, modalOptions);
$buttonElement.addEventListener('click', () => modal.toggle());
modal.show();
