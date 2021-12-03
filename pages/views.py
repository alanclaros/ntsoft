from django.shortcuts import render
from django.urls import reverse
from django.conf import settings

# paths
# path_index = reverse('index')
# path_productos = reverse('productos')
# path_servicios = reverse('servicios')
# path_contacto = reverse('contacto')


def index(request):
    context = {
        # 'path_index': path_index,
        # 'path_productos': path_productos,
        # 'path_servicios': path_servicios,
        # 'path_contacto': path_contacto,
        'page': 'index'
    }

    return render(request, 'pages/index.html', context)


def productos(request):
    context = {
        # 'path_index': path_index,
        # 'path_productos': path_productos,
        # 'path_servicios': path_servicios,
        # 'path_contacto': path_contacto,
        'page': 'productos'
    }

    return render(request, 'pages/productos.html', context)


def servicios(request):
    context = {
        # 'path_index': path_index,
        # 'path_productos': path_productos,
        # 'path_servicios': path_servicios,
        # 'path_contacto': path_contacto,
        'page': 'servicios'
    }

    return render(request, 'pages/servicios.html', context)


def contacto(request):
    context = {
        # 'path_index': path_index,
        # 'path_productos': path_productos,
        # 'path_servicios': path_servicios,
        # 'path_contacto': path_contacto,
        'page': 'contacto'
    }

    return render(request, 'pages/contacto.html', context)


def acerca_de(request):
    context = {
        'page': 'acerca_de'
    }

    return render(request, 'pages/acerca_de.html', context)


def send_message(request):

    try:
        nombre = request.POST['nombre']
        telefonos = request.POST['telefonos']
        mensaje = request.POST['mensaje']
        operation_x = request.POST['operation_x']
        respuesta = 'ok'

    except Exception as ex:
        nombre = ''
        telefonos = ''
        mensaje = ''
        respuesta = 'error'

    if respuesta == 'ok':
        try:
            # Import the email modules we'll need
            from email.message import EmailMessage
            import smtplib

            # Create a text/plain message
            separador = "\n"
            email_content = f"Mensaje: {separador}Nombre: {nombre} {separador}Fonos: {telefonos}{separador}Mensaje: {mensaje}"
            msg = EmailMessage()
            msg.set_content(email_content)

            # me == the sender's email address
            # you == the recipient's email address
            msg['Subject'] = 'NTSOFT - mensaje, ' + settings.SUB_URL_EMPRESA
            msg['From'] = settings.EMAIL_CONTACT_FROM
            # msg['To'] = settings.EMAIL_CONTACT_TO
            msg['To'] = 'acc.claros@gmail.com, alan_claros13@hotmail.com'

            # Send the message via our own SMTP server.
            s = smtplib.SMTP(settings.EMAIL_SERVER_NAME)
            s.send_message(msg)
            s.quit()

        except Exception as ex:
            respuesta = 'error'

    context = {
        'page': 'send_message',
        'respuesta': respuesta,
        'operation_x': operation_x,
    }

    return render(request, 'pages/send_message.html', context)
