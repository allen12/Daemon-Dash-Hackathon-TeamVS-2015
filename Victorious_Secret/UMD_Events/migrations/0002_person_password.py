# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('UMD_Events', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='password',
            field=models.CharField(default=datetime.datetime(2015, 9, 27, 7, 14, 17, 381683, tzinfo=utc), max_length=200),
            preserve_default=False,
        ),
    ]
