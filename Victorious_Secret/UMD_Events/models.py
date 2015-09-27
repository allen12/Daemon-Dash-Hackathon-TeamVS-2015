from django.db import models

# Create your models here.
class Person(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    uid = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length = 200)
    def __unicode__(self):
      return self.first_name + ' ' + self.last_name + ' - '+self.uid

class Event(models.Model):
    title = models.CharField(max_length=200)
    event_id = models.CharField(max_length=255)
    location = models.CharField(max_length=200)
    datetime = models.DateTimeField('date of event')
    capacity = models.IntegerField(default=0)
    description = models.TextField()
    slug = models.CharField(max_length=200)
    def __unicode__(self):
        return self.title
