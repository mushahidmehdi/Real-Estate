from django.db import models

# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=120)
    subject = models.CharField(max_length=120)
    message = models.TextField(blank=True, null=True)
    contact_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
