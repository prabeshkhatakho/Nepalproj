import requests 

response = requests.get('https://randomuser.me/api')
print(response.status_code)


gender = response.json()['results'][0]['location']
print(gender)