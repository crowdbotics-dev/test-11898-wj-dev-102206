# Generated by Django 2.2.28 on 2023-07-18 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_home'),
    ]

    operations = [
        migrations.CreateModel(
            name='Trial',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fasf', models.BigIntegerField()),
                ('faefa', models.BigIntegerField()),
                ('geg', models.BigIntegerField()),
                ('hrthrhg', models.BigIntegerField()),
                ('hrth', models.BigIntegerField()),
                ('hrh', models.BigIntegerField()),
                ('rhrhjt', models.BigIntegerField()),
                ('hree', models.BigIntegerField()),
                ('rgee', models.BigIntegerField()),
                ('jtyj', models.BigIntegerField()),
            ],
        ),
    ]
