from django.db import models

# Create your models here.


class Realtors(models.Model):
    name = models.CharField(max_length=120)
    photo = models.ImageField(upload_to='Realtors/%Y/%m/%d/')
    description = models.TextField(null=True)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=120)
    date_hired = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
