from django.contrib import admin
from .models import Carousel
from .models import Category
from .models import Product
from .models import UserProfile
from .models import Cart
from .models import Booking
from .models import Feedback

# Register your models here.
admin.site.register(Carousel)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(UserProfile)
admin.site.register(Cart)
admin.site.register(Booking)
admin.site.register(Feedback)
