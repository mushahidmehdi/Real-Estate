from django.db import models
from realtors.models import Realtor
from django.utils.timezone import now


class Listing(models.Model):
    realtors = models.ForeignKey(Realtor, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    slug = models.SlugField(max_length=300, unique=True)
    address = models.CharField(max_length=220)
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    sqft = models.IntegerField()
    rent_price = models.IntegerField()
    adat = models.IntegerField()
    is_publish = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now, blank=True)
    main_image = models.ImageField(upload_to='Images/%Y/%m/%d')
    photo_1 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_2 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_3 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_4 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_5 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_6 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_7 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_8 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_9 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_10 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_11 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_12 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_13 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_14 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_15 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_16 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_17 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_18 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_19 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)
    photo_20 = models.ImageField(upload_to='Imags/%Y/%m/%d', blank=True)

    def __str__(self):
        return self.title
