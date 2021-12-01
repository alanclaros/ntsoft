
function openURL(url) {
    window.open(url, '_self');
}

function sendMessage(tipo) {
    const nombre = document.getElementById('nombre').value.trim();
    const telefonos = document.getElementById('telefonos').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    const snackbarContainer = document.querySelector('#contact-toast');
    const contactBtn = document.getElementById('contact-btn');

    let dataToast = {};
    if (nombre === '') {
        dataToast = { message: 'Debe llenar su nombre', timeout: 2000 };
        snackbarContainer.MaterialSnackbar.showSnackbar(dataToast);
        return false;
    }

    if (telefonos === '') {
        dataToast = { message: 'Debe llenar sus telefonos', timeout: 2000 };
        snackbarContainer.MaterialSnackbar.showSnackbar(dataToast);
        return false;
    }

    if (mensaje === '') {
        dataToast = { message: 'Debe llenar el mensaje', timeout: 2000 };
        snackbarContainer.MaterialSnackbar.showSnackbar(dataToast);
        return false;
    }

    // const data = { message: 'Example Message # ', timeout: 3000 };
    // snackbarContainer.MaterialSnackbar.showSnackbar(data);

    // const tr_load = document.getElementById('tr_loading');
    // console.log('tr...', tr_load);
    // tr_load.style.display = 'block';

    const imagen = document.forms['form_contacto'].elements['ruta_img'].value;
    const url_main = document.forms['form_contacto'].elements['url_main'].value;
    const token = document.forms['form_contacto'].elements['csrfmiddlewaretoken'].value;

    $("#tr_loading").fadeIn('slow');
    $("#td_loading").html('<img src="' + imagen + '">');
    contactBtn.disabled = true;

    datos = {
        'nombre': nombre,
        'telefonos': telefonos,
        'mensaje': mensaje,
        'operation_x': 'send_message',
        'csrfmiddlewaretoken': token,
    }

    $("#td_loading").load(url_main, datos, function () {
        resultadoMensaje();
    });

}

function resultadoMensaje() {
    let respuesta = 'error';
    try {
        respuesta = document.getElementById('respuesta').value;
    }
    catch (e) {

    }
    const snackbarContainer = document.querySelector('#contact-toast');

    let dataToast = {};
    if (respuesta === 'ok') {
        dataToast = { message: 'Mensaje enviado correctamente', timeout: 3000 };
        snackbarContainer.MaterialSnackbar.showSnackbar(dataToast);
    }
    else {
        dataToast = { message: 'Error al enviar el mensaje', timeout: 3000 };
        snackbarContainer.MaterialSnackbar.showSnackbar(dataToast);
    }

    document.getElementById('nombre').value = '';
    document.getElementById('telefonos').value = '';
    document.getElementById('mensaje').value = '';

    const contactBtn = document.getElementById('contact-btn');
    contactBtn.disabled = false;
}

function openTab(evt, tabName) {
    //tab_name_1 
    const pos = tabName.lastIndexOf('_');
    if (pos === -1) {
        return false;
    }

    const nombre_tab = tabName.substr(0, pos);
    const numero_tab = tabName.substr(pos + 1, tabName.length - 1);
    //console.log(nombre_tab, numero_tab);
    for (let i = 1; i <= 10; i++) {
        try {
            //tab page
            let current_tab = document.getElementById(nombre_tab + '_' + i);
            current_tab.style.display = "none";
            //btn
            let current_btn = document.getElementById(nombre_tab + '_btn_' + i);
            current_btn.className = 'tab_button';
        }
        catch (e) {

        }
    }

    //select tabName
    const tab_select = document.getElementById(tabName);
    tab_select.style.display = 'block';
    //btn
    const tab_btn = document.getElementById(nombre_tab + '_btn_' + numero_tab);
    tab_btn.className = 'tab_button_select';


    // let i, tabcontent, tablinks;
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    // document.getElementById(tabName).style.display = "block";
    // evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();