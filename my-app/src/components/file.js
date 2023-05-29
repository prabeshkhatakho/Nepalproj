image_question_indexes = config["images"].keys()   //// value will be [0,2]

image_path = {}

for key, value in config["images"]:
    download image from value url and update the path in image_path
    image_path.append({key,path})


for index, (question, answer)  in enumerate(zip(questions, answers)):
    
    body = body + "\n<h1>{}</h1>\n<p>{}</p>".format(question, answer)
    if index in image_question_indexes:
        body = body + <html for image>
Write to Bibek Khatakho

[
   
    {
        "name":"Bhaktapur",  
        "title":"Bhaktapur",
        "questions"🙁"tell me about bhaktapur", "what are the 5 biggest newari festivals?", "best newari food"],
        "images"  : {0 : "url1", 2 : "url2"}
    },
    {
        "name":"Kathmandu",  
        "title":"Kathmandu",
        "questions"🙁"tell me about kathmandu"]
    }
]