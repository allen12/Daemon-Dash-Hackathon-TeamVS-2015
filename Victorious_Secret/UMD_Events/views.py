from django.shortcuts import render, render_to_response


# Create your views here.

def index(request):
  return render_to_response('main_index.html')

def calendar(request):
  u = request.POST.get("usernameInput")
  print("bruh")
  print(request.POST)
  return render_to_response('cal_index.html')
