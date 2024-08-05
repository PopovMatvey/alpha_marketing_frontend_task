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

$("#slideMenu").on("click", (_event) => {
    showModalWindow('pagecrm_header-mobile_slide-panel');
});

$(".pagecrm_header-mobile_slide-panel").on("click", (_event)=>{
    hideModalWindow("pagecrm_header-mobile_slide-panel");
});