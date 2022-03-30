"""GestionDesActes URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


from AppGestionDesActes import views
from AppGestionDesActes.views import ActeViewSet, ActeByIDViewSet, PreoccupationViewSet, PreoccupationByIDViewSet
from GestionDesActes import settings

router=routers.DefaultRouter()
router.register("domaine",views.DomaineViewset,basename="domaine")
router.register("acte",views.ActeViewSet,basename="acte")
router.register("preoccupation",views.PreoccupationViewSet,basename="preoccupation")


import os

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(router.urls)),
    path('api/gettoken/',TokenObtainPairView.as_view(),name="gettoken"),
    path('api/resfresh_token/',TokenRefreshView.as_view(),name="refresh_token"),
    path('api/acte/<str:acte_id>',ActeByIDViewSet.as_view(),name="acteby_id"),
    path('api/preoccupation/<str:preoccupation_id>',PreoccupationByIDViewSet.as_view(),name="preoccupationby_id"),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)