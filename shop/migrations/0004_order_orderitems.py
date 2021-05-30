# Generated by Django 3.2.2 on 2021-05-30 12:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('shop', '0003_shopitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='shop.shopitem')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=200)),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('company', models.CharField(blank=True, max_length=200)),
                ('address', models.CharField(max_length=200)),
                ('apartment', models.CharField(blank=True, max_length=200)),
                ('city', models.CharField(max_length=200)),
                ('post_code', models.CharField(max_length=200)),
                ('phone', models.CharField(max_length=200)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('items', models.ManyToManyField(to='shop.OrderItems')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='orders', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
