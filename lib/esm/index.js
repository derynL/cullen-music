import { Modal } from 'flowbite';
var $buttonElement = document.querySelector('#button');
var $modalElement = document.querySelector('#modal');
var modalOptions = {
    placement: 'bottom-center',
};
var modal = new Modal($modalElement, modalOptions);
$buttonElement.addEventListener('click', function () { return modal.toggle(); });
modal.show();
//# sourceMappingURL=index.js.map