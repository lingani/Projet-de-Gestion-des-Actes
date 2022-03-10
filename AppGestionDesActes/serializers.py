from rest_framework import fields, serializers

from AppGestionDesActes.models import Base_legale, Categorie_acte, Source_des_donnees, Type_de_centre, Acte, Type_preoccupation, Preoccupation

class BaseLegaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Base_legale
        fields = "__all__"


class CategorieActeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie_acte
        fields = "__all__"


class SourceDesDonneesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Source_des_donnees
        fields = "__all__"


class TypeDecentreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type_de_centre
        fields = "__all__"


class TypePreoccupationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type_preoccupation
        fields = "__all__"


class ActeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acte
        fields = "__all__"

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['base_legale'] = BaseLegaleSerializer(instance.base_legale_id).data
        response['categorie_acte'] = CategorieActeSerializer(instance.categorie_acte_id).data
        response['source_des_donnees'] = SourceDesDonneesSerializer(instance.source_des_donnees_id).data
        response['types_de_centre'] = [TypeDecentreSerializer(t).data for t in instance.types_de_centre.all()]

        return response

class ActeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acte
        fields = ['id', 'name', 'cout', 'types_de_centre']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['types_de_centre'] = [TypeDecentreSerializer(t).data["name"] for t in instance.types_de_centre.all()]

        return response

class PreoccupationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preoccupation
        fields = "__all__"

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['types_preoccupation'] = [TypePreoccupationSerializer(t).data for t in instance.types_preoccupation.all()]
        response['actes_concernes'] = [ActeSerializer(t).data for t in instance.actes_concernes.all()]

        return response

class PreoccupationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preoccupation
        fields = ['id', 'titre']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['types_preoccupation'] = [TypePreoccupationSerializer(t).data["name"] for t in instance.types_preoccupation.all()]
        response['actes_concernes'] = [ActeSerializer(t).data["name"] for t in instance.actes_concernes.all()]
        
        return response

