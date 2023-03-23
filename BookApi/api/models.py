from django.db import models

# Create your models here.

class BookModel(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    price = models.FloatField()
    image = models.ImageField(upload_to='BookImages/')

    def __str__(self):
        return f"{self.name}    {self.author}   {self.price}"
