from django.db import models

# Create your models here.


class Student(models.Model):
    name = models.CharField(max_length=150)
    school = models.CharField(max_length=150)
    gender = models.CharField(max_length=8, choices=(
        ('male', 'Male'), ('female', 'Female'), ('other', 'Other')
    ))
    skill = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name
