from django.shortcuts import render

from rest_framework import viewsets, generics

# Create your views here.
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication

from AppGestionDesActes.models import Base_legale, Categorie_acte, Source_des_donnees, Type_de_centre, Acte, Type_preoccupation, Preoccupation


from AppGestionDesActes.serializers import BaseLegaleSerializer, CategorieActeSerializer, SourceDesDonneesSerializer, TypeDecentreSerializer, ActeSerializer, ActeListSerializer, PreoccupationSerializer, PreoccupationListSerializer


class ActeViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        acte = Acte.objects.all()
        serializer = ActeListSerializer(acte, many=True, context={"request": request})
        response_dict = {"error": False, "message": "Toute la liste des actes", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = ActeSerializer(data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False, "message": "Données de l'acte enreistrées avec succès"}
        except:
            dict_response = {"error": True, "message": "Erreur pendant  l'enregistrement des données de l'acte"}
        return Response(dict_response)

    def retrieve(self, request, pk=None):
        queryset = Acte.objects.all()
        acte = get_object_or_404(queryset, pk=pk)
        serializer = ActeSerializer(acte, context={"request": request})

        serializer_data = serializer.data

        return Response({"error": False, "message": "Single Data Fetch", "data": serializer_data})

    def update(self, request, pk=None):
        try:
            queryset = Acte.objects.all()
            acte = get_object_or_404(queryset, pk=pk)
            serializer = ActeSerializer(acte, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False, "message": "Successfully Updated acte Data"}
        except:
            dict_response = {"error": True, "message": "Error During Updating acte Data"}

        return Response(dict_response)


class ActeByIDViewSet(generics.ListAPIView):
    serializer_class = ActeSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        acte_id = self.kwargs["acte_id"]
        return Acte.objects.filter(id=acte_id)



class PreoccupationViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        preoccupation = Preoccupation.objects.all()
        serializer = PreoccupationListSerializer(preoccupation, many=True, context={"request": request})
        response_dict = {"error": False, "message": "Toute la liste des preoccupations", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = PreoccupationSerializer(data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False, "message": "Données de la preoccupation enreistrées avec succès"}
        except:
            dict_response = {"error": True, "message": "Erreur pendant  l'enregistrement des données de la preoccupation"}
        return Response(dict_response)

    def retrieve(self, request, pk=None):
        queryset = Preoccupation.objects.all()
        preoccupation = get_object_or_404(queryset, pk=pk)
        serializer = PreoccupationSerializer(preoccupation, context={"request": request})

        serializer_data = serializer.data

        return Response({"error": False, "message": "Single Data Fetch", "data": serializer_data})

    def update(self, request, pk=None):
        try:
            queryset = Preoccupation.objects.all()
            preoccupation = get_object_or_404(queryset, pk=pk)
            serializer = PreoccupationSerializer(preoccupation, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False, "message": "Successfully Updated preoccupation Data"}
        except:
            dict_response = {"error": True, "message": "Error During Updating preoccupation Data"}

        return Response(dict_response)


class PreoccupationByIDViewSet(generics.ListAPIView):
    serializer_class = PreoccupationSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        preoccupation_id = self.kwargs["preoccupation_id"]
        return Preoccupation.objects.filter(id=preoccupation_id)

