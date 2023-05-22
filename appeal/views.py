from django.shortcuts import render, redirect
from .models import Appeal


def appeal(request):
    if request.method == 'POST':
        phone_number = request.POST.get('phone_number')
        name = request.POST.get('name')
        if phone_number and name:
            Appeal.objects.get_or_create(phone_number=phone_number, name=name)
        return redirect('appeal')
    return render(request, 'index.html')