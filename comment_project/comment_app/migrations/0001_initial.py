# Generated by Django 3.2.25 on 2024-04-16 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('author', models.CharField(max_length=100)),
                ('date', models.DateTimeField()),
                ('likes', models.IntegerField()),
                ('image_url', models.URLField(blank=True)),
            ],
        ),
    ]