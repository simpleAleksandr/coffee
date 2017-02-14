angular.module('sPainter').controller('TitleCtrl', function () {
   this.titleName=
        {
            sender: [
                {send: 'Отправить:'},
                {send: 'Коментарий'},
                {send: '/'},
                {send: 'Письмо'}
            ],
            language: [
                {send: 'Рус'},
                {send: '/'},
                {send: 'Eng'}
            ],

            buttons: [
                {
                    send: 'Главная',
                    urlPage: '#/'
                },
                {send: 'Галлерея', urlPage: '#/gallery'}
            ],
            sortsTitle: 'Cортировать по:',
            sortsAttrs: 'Cортировать...',
            category: 'Категории:',
            contacts:'Контакты:'


        };
});