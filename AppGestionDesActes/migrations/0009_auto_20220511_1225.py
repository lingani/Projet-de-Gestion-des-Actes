# Generated by Django 3.2.12 on 2022-05-11 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AppGestionDesActes', '0008_auto_20220511_1210'),
    ]

    operations = [
        migrations.AlterField(
            model_name='acte',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='acte',
            name='dossier',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='acte',
            name='finalite',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='acte',
            name='name',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='preoccupation',
            name='commentaire',
            field=models.TextField(),
        ),
    ]
