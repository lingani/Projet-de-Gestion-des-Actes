# Generated by Django 3.2.12 on 2022-03-10 04:21

from django.db import migrations, models
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('AppGestionDesActes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Preoccupation',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nom_et_prenoms', models.CharField(max_length=255)),
                ('telephone', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.CharField(blank=True, max_length=255, null=True)),
                ('lieu', models.CharField(blank=True, max_length=255, null=True)),
                ('titre', models.CharField(blank=True, max_length=255, null=True)),
                ('types_preoccupation', multiselectfield.db.fields.MultiSelectField(choices=[('1', 'Dysfonctionnement'), ('2', 'Coûts irreguliers'), ('3', 'Supçon de corruption'), ('4', 'Qualité du service'), ('5', 'Problème lié au personnel'), ('6', 'Problème lié aux infrastructures')], max_length=11)),
                ('commentaire', models.CharField(max_length=255)),
                ('actes_concernes', models.ManyToManyField(blank=True, to='AppGestionDesActes.Acte')),
            ],
        ),
    ]
