/**
 * 
 * @param {*} parClass 
 */
const hideModalWindow = (parClass) => {
    $(`.${parClass}`).css('display', function (_index, value) {
        if (value === 'block') {
            return "none";
        }
    });
}

/**
 * 
 * @param {*} parClass 
 */
const showModalWindow = (parClass) => {
    $(`.${parClass}`).css('display', function (_index, value) {
        if (value === 'none') {
            return "block";
        }
    });
}

$(".pagecrm_main-button").on("click", (_event) => {
    showModalWindow('pagecrm_modal-window_form_connect');
});

$(".grad-button").on("click", (_event) => {
    showModalWindow('pagecrm_modal-window_form_connect');
});

$(".question").on("click", (_event) => {
    showModalWindow('pagecrm_modal-window_form_connect');
});

$(".pagecrm_first_geader__contacts___question button").on('click', (_event) => {
    showModalWindow('pagecrm_modal-window_form_connect');
});

$(".pagecrm_modal-window_notification").on("click", (_event) => {
    hideModalWindow("pagecrm_modal-window_notification");
});

$(".pagecrm_modal-window_form_images_cross img").on("click", (_event) => {
    hideModalWindow("pagecrm_modal-window_notification");
});

// function getAnimationnumbers(block) {
//     var show = true;
//     var countbox = block;
//     $(window).on("scroll load resize", function () {
//         if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
//         var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
//         var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
//         var w_height = $(window).height(); // Высота окна браузера
//         var d_height = $(document).height(); // Высота всего документа
//         var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
//         if (w_top + 100 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
//             $('.pagecrm_header-desktop').css('padding', '0');
//             $('.pagecrm_header-desktop').spincrement({
//                 thousandSeparator: "",
//                 duration: 5000
//             });

//             show = false;
//         }
//     });
// }
