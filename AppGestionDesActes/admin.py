from django.contrib import admin

# Register your models here.

from AppGestionDesActes.models import Base_legale, Categorie_acte, Source_des_donnees, Type_de_centre, Acte, Type_preoccupation, Preoccupation

admin.site.register(Base_legale)
admin.site.register(Categorie_acte)
admin.site.register(Source_des_donnees)
admin.site.register(Type_de_centre)
admin.site.register(Acte)
admin.site.register(Type_preoccupation)
admin.site.register(Preoccupation)