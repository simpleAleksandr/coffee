angular.module('sPainter').controller('TitleCtrl', function () {
   this.titleName=
        {
            sender: [
                {send: 'Отправить:'},
                {send: 'Комантарий'},
                {send: '/'},
                {send: 'Письмо'}
            ],
            language: [
                {send: 'Рус'},
                {send: '/'},
                {send: 'Eng'}
            ],

            buttons: [
                {send: 'Главная'},
                {send: 'Галлерея'}
            ],
            sortsTitle: 'Cортировать по:',
            sortsAttrs: 'Cортировать...',
            category: 'Категории:',
            contacts:'Контакты:'


        };
});