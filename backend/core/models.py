from django.db import models

# Create your models here.


class Student(models.Model):
    name = models.CharField(max_length=150)
    school = models.CharField(max_length=150)
    gender = models.CharField(max_length=8, choices=(
        ('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')
    ), blank=True, null=True)
    skill = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self) -> str:
        return self.name
