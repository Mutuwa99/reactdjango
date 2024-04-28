from django.shortcuts import render
from django.http import JsonResponse
import json
from django.contrib.auth import authenticate,login
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from .models import Task 
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import cache_page


@cache_page(60 * 15)  # Cache for 15 minutes
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


@cache_page(60 * 15)  # Cache for 15 minutes
@csrf_exempt
def dashboard_data(request):

    if request.method == 'POST':

        try:
            data = Task.objects.all()
            cleaned_data = list(data.values())

            completed = Task.objects.filter(status = 'Complete').count()
            inprogress = Task.objects.filter(status = 'InProgress').count()
            assigned = Task.objects.filter(status = 'Assigned').count()

            stats = {
                'completed': completed,
                'inprogress': inprogress,
                'assigned': assigned

            }

            return JsonResponse({"success": True, "data": cleaned_data, 'stats':stats})

        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)},status=400)
    else:
        return JsonResponse({'success': False , 'error': 'method not allowed'})

@cache_page(60 * 15)  # Cache for 15 minutes
@csrf_exempt
def fetch_completed(request):
    if request.method == 'POST':

        try:
            completed = Task.objects.filter(status = 'Completed')
            cleaned_data = list(completed.values())

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
            cleaned_data = list(assigned.values())

            return JsonResponse({'sucess': True, 'assigned': cleaned_data})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)},status=400)
    else:
        return JsonResponse({'success': False , 'error': 'method not allowed'})
        
@cache_page(60 * 15)  # Cache for 15 minutes
@csrf_exempt
def fetch_inprogress(request):
    if request.method == 'POST':

        try:
            inprogress = Task.objects.filter(status = 'InProgress')
            cleaned_data = list(inprogress.values())

            return JsonResponse({'sucess': True, 'inprogress': cleaned_data})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)},status=400)
    else:
        return JsonResponse({'success': False , 'error': 'method not allowed'})

# @login_required
@csrf_exempt
def create_tasks(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            task = Task.objects.create(
                name=data.get('name'),
                description=data.get('description'),
                storypoint=data.get('storypoint'),
                status=data.get('status')
            )

            return JsonResponse({'success': True, 'task_id': task.id})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=400)
    else:

        return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)


@csrf_exempt
def save_edit_task(request, id ):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            info = Task.objects.get(id = id)

      
            info.name=data.get('name'),
            info.description=data.get('description'),
            info.storypoint=data.get('storypoint'),
            info.status=data.get('status')

            info.save()

            return JsonResponse({'success': True, 'task_id': task.id})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=400)
    else:

        return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)

    
@cache_page(60 * 15)  # Cache for 15 minutes
@csrf_exempt
def view_task(request, id):
    if request.method =='POST':
        try:

            task = Task.objects.get(id = id)

            task_data = {
                'id': task.id,
                'name': task.name,
                'description': task.description,
                'storypoint': task.storypoint,
                'status': task.status,
                'created_at': task.created_at,
                'updated_at': task.updated_at
            }

            return JsonResponse({'sucess': True, 'task':task_data})

        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=400)
    else:
        return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)

@cache_page(60 * 15)  # Cache for 15 minutes           
@csrf_exempt
def delete_task(request, id ):

    if request.method =='POST':

        try:

            task  = Task.objects.get(id=id)
            task.delete()

            return JsonResponse({'success': True, 'task_id': task.id})

        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=400)
    else:
        return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)

        

            















        

