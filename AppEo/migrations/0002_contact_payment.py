# Generated by Django 5.1.3 on 2024-12-31 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AppEo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('gcash_number', models.CharField(max_length=20)),
                ('amountpay', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]
