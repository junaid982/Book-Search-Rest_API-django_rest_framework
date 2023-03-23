from django.shortcuts import render
from rest_framework.decorators import api_view 
from rest_framework.response import Response


from .models import BookModel
from .serializers import BookSerializer

from django.db.models import Min,Max 
# Create your views here.

def home_view(request):
    min_price = BookModel.objects.aggregate(Min('price'))
    max_price = BookModel.objects.aggregate(Max('price'))

    context = {
        'min_price':min_price,
        'max_price':max_price
    }
    return render(request , 'home.html' , context)


@api_view(['GET'])
def api_view(request):
    
    books = BookModel.objects.all()

    price = request.GET.get('price')
    if price:
        books = books.filter(price__lte = price)

    name = request.GET.get('name')
    if name:
        books = books.filter(name__contains = name)

    serializer = BookSerializer(books , many = True)
    

    return Response(serializer.data)



