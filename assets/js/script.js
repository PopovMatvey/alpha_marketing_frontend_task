'use strict'

const connectionFormDesctop = document.querySelector("#connectionFormDesctop");
const connectionForm = document.querySelector("#connectionForm");
const linkFormDesktop = document.querySelector("#linkFormDesktop");
const linkForm = document.querySelector("#linkForm");
const formConsultation = document.querySelector("#formConsultation");
const modalFormConnaction = document.querySelector("#modalFormConnaction");

const formsArray = [
    {
        elementDOM: connectionFormDesctop,
        url: '/connectionFormDesctop',
    },
    {
        elementDOM: connectionForm,
        url: '/connectionForm',
    },
    {
        elementDOM: linkFormDesktop,
        url: '/linkFormDesktop',
    },
    {
        elementDOM: linkForm,
        url: '/linkForm',
    },
    {
        elementDOM: formConsultation,
        url: '/formConsultation',
    },
    {
        elementDOM: modalFormConnaction,
        url: '/modalFormConnaction',
    },
];

/**
 * 
 * @param {*} parArrayObjectsForms 
 */
const setSubmitLisenersOnForms = (parArrayObjectsForms) => {
    for (let i = 0; i < formsArray.length; i++) {
        parArrayObjectsForms[i].elementDOM.addEventListener('submit', (event) => {
            const requestObject = getRequestObject(parArrayObjectsForms[i].elementDOM);

            event.preventDefault();
            sendRequest(parArrayObjectsForms[i].url, requestObject);
            hideModalWindow("pagecrm_modal-window_form_connect");
            showModalWindow("pagecrm_modal-window_notification");
        });
    }
}

/**
 * 
 * @param {*} parURL 
 * @param {*} parRequestObject 
 */
const sendRequest = (parURL, parRequestObject) => {
    fetch(parURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(parRequestObject)
    });
}

/**
 * 
 * @param {*} parFormDOM 
 * @returns 
 */
const getRequestObject = (parFormDOM) => {
    let returnedObject = {};

    for (let i = 0; i < parFormDOM.children.length - 1; i++) {
        returnedObject[parFormDOM.children[i].id] = parFormDOM.children[i].value;
    }

    return returnedObject;
}


if (window.innerHeight < 990) {
    const array = document.querySelectorAll('.pagecrm_header__row');

    for (let i = 0; i < array.length; i++) {
        array[i].style.paddingTop = "15px";

    }
}

if (window.innerHeight > 990) {
    document.querySelector('.pagecrm_header__row').style.paddingTop = "80px";
}





window.addEventListener('scroll', (_event) => {
    var elem = document.querySelector('.pagecrm_header-desktop');
    var y = scrollY;
    if ((y < 100) && (window.innerHeight > 990)) {
        elem.style.height = "70px";
    } else {
        elem.style.height = "50px";
    }
});

setSubmitLisenersOnForms(formsArray);
