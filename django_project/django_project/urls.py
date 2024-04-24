from django.contrib import admin
from django.urls import path, include
<<<<<<< HEAD
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
=======
>>>>>>> 5c100b10978ac34cad152d9f5ad50b48efb55758

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('InBang.urls')),
<<<<<<< HEAD
     path('', TemplateView.as_view(template_name='build/index.html'), name='home'),
    # path('api/products/', include('base.urls.product_urls')),
    # path('api/users/', include('base.urls.user_urls')),
    # path('api/orders/', include('base.urls.order_urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
=======
]
>>>>>>> 5c100b10978ac34cad152d9f5ad50b48efb55758
