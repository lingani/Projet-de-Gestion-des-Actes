# Generated by Django 3.2.12 on 2022-03-18 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AppGestionDesActes', '0003_auto_20220310_1246'),
    ]

    operations = [
        migrations.CreateModel(
            name='Domaine',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('Description', models.CharField(blank=True, max_length=255)),
                ('added_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
