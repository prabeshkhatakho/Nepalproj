import requests
from PIL import Image
from io import BytesIO
import os


image_url = "https://th.bing.com/th/id/R.d58339de61b5d07fd4db988f8e8a7cdd?rik=SfZdJyKhxDm1VQ&pid=ImgRaw&r=0"
response = requests.get(image_url)
image = Image.open(BytesIO(response.content))
image_path = os.path.join(r"C:\prabeshkhatakho\Nepalprojs\my-app\src\components\images", "image.jpg")
image.save(image_path)
print("Image saved to:", image_path)
