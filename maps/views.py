from django.shortcuts import render
from django.http import JsonResponse
import requests

def show_map(request):
    return render(request, 'maps/show_map.html')

def get_current_location(request):
    google_api_key = "AIzaSyACo0iKPc60tkUdMDH7h1s4LFo_B1yCoq8"  
    url = f"https://www.googleapis.com/geolocation/v1/geolocate?key={google_api_key}"

    try:
        response = requests.post(url, headers={"Content-Type": "application/json"})
        response_data = response.json()

        if 'location' in response_data:
            data = {
                'latitude': response_data['location']['lat'],
                'longitude': response_data['location']['lng']
            }
            return JsonResponse(data)
        else:
            return JsonResponse({'error': 'Unable to retrieve location from Google API'}, status=400)
    except requests.RequestException as e:
        return JsonResponse({'error': str(e)}, status=500)
