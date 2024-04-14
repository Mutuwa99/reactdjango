from django.shortcuts import render
from django.http import JsonResponse
import json
from django.contrib.auth import authenticate,login
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from .models import Task 

@csrf_exempt
def welcome(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')

            user = authenticate(username=username, password=password)

            if user is not None:
                login(request,user)
                
                token, _ = Token.objects.get_or_create(user=user)

                user_data = {
                    'username': user.username,
                    'email': user.email,
                    'token': token.key,  
                }
                return JsonResponse({'success': True, 'user': user_data})
            else:
                return JsonResponse({'success': False, 'error': 'Invalid credentials'})

        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)},status=400)

    else:
            return JsonResponse({'success': False , 'error': 'method not allowed'})



@csrf_exempt
def dashboard_data(request):

    if request.method == 'POST':

        try:
            data = Task.objects.all()
            cleaned_data = list(data.values)

            completed = Task.objects.filter(status = 'Completed').count()
            inprogress = Task.objects.filter(status = 'InProgress').count()
            assigned = Task.objects.filter(status = 'Assigned').count()

            stats = {
                'completed': completed,
                'inprogress': inprogress,
                'assigned': assigned

            }

            return JavaScript({"success": True, "data": cleaned_data, 'stats':stats})

        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)},status=400)
    else:
        return JsonResponse({'success': False , 'error': 'method not allowed'})

@csrf_exempt
def fetch_completed(request):
    if request.method == 'POST':

        try:
            completed = Task.objects.filter(status = 'Completed')
            cleaned_data = list(completed.values)

            return JsonResponse({'sucess': True, 'completed': cleaned_data})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)},status=400)
    else:
        return JsonResponse({'success': False , 'error': 'method not allowed'})


@csrf_exempt
def fetch_assigned(request):
    if request.method == 'POST':

        try:
            assigned = Task.objects.filter(status = 'Assigned')
            cleaned_data = list(assigned.values)

            return JsonResponse({'sucess': True, 'assigned': cleaned_data})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)},status=400)
    else:
        return JsonResponse({'success': False , 'error': 'method not allowed'})

@csrf_exempt
def fetch_inprogress(request):
    if request.method == 'POST':

        try:
            inprogress = Task.objects.filter(status = 'InProgress')
            cleaned_data = list(inprogress.values)

            return JsonResponse({'sucess': True, 'inprogress': cleaned_data})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)},status=400)
    else:
        return JsonResponse({'success': False , 'error': 'method not allowed'})





            















        

