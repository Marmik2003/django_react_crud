# Generated by Django 3.2.6 on 2021-09-24 01:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='gender',
            field=models.CharField(blank=True, choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], max_length=8, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='skill',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]