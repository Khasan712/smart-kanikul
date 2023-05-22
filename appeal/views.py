from django.shortcuts import render, redirect
from .models import Appeal


def appeal(request):
    if request.method == 'POST':
        phone_number = request.POST.get('phone')
        name = request.POST.get('name')
        if phone_number and name:
            phone_number = phone_number.replace("+", "")
            obj = Appeal.objects.filter(phone_number=phone_number)
            if not obj:
                Appeal.objects.create(phone_number=phone_number, name=name)
        return redirect('appeal')
    return render(request, 'index.html')