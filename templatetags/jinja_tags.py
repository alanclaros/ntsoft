from django.conf import settings
from django.apps import apps
from django import template

register = template.Library()


@register.filter('get_item')
def get_item(dictionary, key):
    return dictionary.get(key)


@register.filter('back_class')
def back_class(index):
    """combinacion de color de filas"""
    if int(index) % 2 == 0:
        return '1'
    else:
        return '2'
