# Generated by Django 2.2.28 on 2023-07-21 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_auto_20230721_0908'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reads',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pub_date', models.DateField()),
                ('front_page', models.ImageField(upload_to='Reads/front_page/images/')),
            ],
        ),
        migrations.RemoveField(
            model_name='country',
            name='map',
        ),
    ]
