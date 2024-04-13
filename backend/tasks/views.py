from django.shortcuts import render
from django.http import JsonResponse
import json
from django.contrib.auth import authenticate,login
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt

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





        

