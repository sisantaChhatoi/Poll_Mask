from django.db import models

# Create your models here.

class Voter(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.IntegerField()
    address = models.TextField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    class Meta:
        verbose_name = 'Voter'
        verbose_name_plural = 'Voters'



