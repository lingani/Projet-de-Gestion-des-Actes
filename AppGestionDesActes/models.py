from django.db import models

# Create your models here.
class Domaine(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True)
    added_on = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()


class Base_legale(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()
    contenu = models.TextField(blank=True)
    link = models.CharField(max_length=255, blank=True)
    page_number = models.IntegerField(null=True, blank=True)
    added_on = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()

class Categorie_acte(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    added_on = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()

class Type_de_centre(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True)
    added_on = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()

class Source_des_donnees(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    link = models.CharField(max_length=255, blank=True)
    description = models.CharField(max_length=255, blank=True)
    added_on = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()

class Acte(models.Model):
    id = models.AutoField(primary_key=True)
    domaine_id = models.ForeignKey(Domaine, on_delete=models.CASCADE, null=True)    
    categorie_acte_id = models.ForeignKey(Categorie_acte, on_delete=models.CASCADE)
    source_des_donnees_id = models.ForeignKey(Source_des_donnees, on_delete=models.CASCADE)
    page_number = models.IntegerField(null=True, blank=True)
    base_legale_id = models.ForeignKey(Base_legale, on_delete=models.CASCADE)
    types_de_centre = models.ManyToManyField(Type_de_centre)
    name = models.TextField()
    description = models.TextField()
    finalite = models.TextField()
    dossier = models.TextField()
    cout = models.CharField(max_length=255)
    cout_minimum = models.CharField(max_length=255, null=True, blank=True)
    cout_maximum = models.CharField(max_length=255, null=True, blank=True)
    precision_cout = models.TextField(null=True, blank=True)
    validite = models.CharField(max_length=255, null=True, blank=True)
    delai_de_delivrance = models.CharField(max_length=255, null=True, blank=True)
    lieu_de_retrait = models.CharField(max_length=255, null=True, blank=True)
    quittance_recu_timbre = models.CharField(max_length=255)
    added_on = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()
    
class Type_preoccupation(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255,  null=True, blank=True)
    added_on = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()

class Preoccupation(models.Model):
    id = models.AutoField(primary_key=True)
    nom_et_prenoms = models.CharField(max_length=255)
    telephone = models.CharField(max_length=255, null=True, blank=True)
    email = models.CharField(max_length=255, null=True, blank=True)
    actes_concernes = models.ManyToManyField(Acte, blank=True)
    lieu = models.CharField(max_length=255, null=True, blank=True)
    titre = models.CharField(max_length=255, null=True, blank=True)
    types_preoccupation = models.ManyToManyField(Type_preoccupation, blank=True)
    commentaire = models.TextField()
    added_on = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()