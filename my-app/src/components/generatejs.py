import json
import openai
import os
from pathlib import Path
import requests

api_key = os.environ.get('OPENAI_API_KEY')

image_path = []


file = open("my-app/src/components/config.json", "r")
os.chdir("my-app/src/components")
datas = json.load(file)
   
links = []

for data in datas:
  
  title = data['title']
  questions = data['questions']
  image_question_indexes = data["images"].keys()
  images = data['images']
  answers = []
  
  body = ""
  name = data['name']
  links.append(f'<Link to=\'{name}\'>{name}</Link>')

  print(image_question_indexes)

  for question in questions:

    openai.api_key = api_key

    prompt = f"{question}"
    response = openai.Completion.create(
    engine="text-davinci-002",
    prompt=prompt,
    max_tokens=1000,
    n=1,
    stop=None,
    temperature=0.5,
    )

    message = response.choices[0].text.strip()
    
    if len(response.choices[0].text.strip()) >= 4096:
    
      message = message[:4096]

    answers.append(message)
    

  for key, value in data["images"].items():
    image_urls = value
    print(image_urls)
    if image_urls.startswith('http'):
        response = requests.get(image_urls)
        if response.status_code == 200:
            filename = f"{key}.jpg"
            save_path = "C:/prabeshkhatakho/Nepalprojs/my-app/src/components/images/" + filename
            with open(save_path, "wb") as f:
                f.write(response.content)
                image_path.append({key: save_path})
        else:
            print(f"Failed to download image with key: {key}")
    else:
        print(f"Invalid URL for key: {key}")
    
  
     
  for index, (question, answer)  in enumerate(zip(questions, answers)):
    
    body += "\n<h1>{}</h1>\n<p>{}</p>".format(question, answer)
    if index in image_question_indexes:
      
      image_url = image_urls[index]  # Get the corresponding image URL
      body += '\n<img src="{}" alt="Image">'.format(image_url)




  file_path = f"{name}.js"
  
  
  if os.path.exists(file_path):
      os.remove(file_path)
      print(f"File '{file_path}' already exists and has been deleted.")

  js_code = '''
  import React from 'react'
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'

  function {1}() {{
    return (
      <div>
        <Navbar />
        <Sidebar />
        {0}
      </div>
    )
  }}

  export default {1};

  '''.format(body,name)

  file = Path(file_path)
  file.write_text(js_code, encoding='utf-8')
  print(f"File '{file_path}' has been created with the JavaScript code.")

  #this is a break line

  home_path = f"home.js"

  links_code = "\n" .join(links)

    
    
  if os.path.exists(home_path):
    os.remove(home_path)
    print(f"File '{home_path}' already exists and has been deleted.")

  home_js_code = '''
    import React from 'react'
    import {{Link}} from 'react-router-dom'

    function Home() {{
      return (
        <div>
          
          {0}
        </div>
      )
    }}
    export default Home;
    '''.format(links_code)

  file = Path(home_path)
  file.write_text(home_js_code, encoding='utf-8')
  print(f"File '{home_path}' has been created with the JavaScript code.")

    

    
    
  

    

    
  

    