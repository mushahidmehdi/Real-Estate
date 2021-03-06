# Generated by Django 4.0.2 on 2022-03-01 10:50

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('realtors', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('slug', models.SlugField(max_length=300, unique=True)),
                ('address', models.CharField(max_length=220)),
                ('bedrooms', models.IntegerField()),
                ('bathrooms', models.IntegerField()),
                ('sqft', models.IntegerField()),
                ('rent_price', models.IntegerField()),
                ('adat', models.IntegerField()),
                ('is_publish', models.BooleanField(default=True)),
                ('list_date', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('main_image', models.ImageField(upload_to='Images/%Y/%m/%d')),
                ('photo_1', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_2', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_3', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_4', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_5', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_6', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_7', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_8', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_9', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_10', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_11', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_12', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_13', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_14', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_15', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_16', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_17', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_18', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_19', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('photo_20', models.ImageField(blank=True, upload_to='Imags/%Y/%m/%d')),
                ('realtors', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='realtors.realtors')),
            ],
        ),
    ]
