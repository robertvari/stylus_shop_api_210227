from django.contrib import admin
from allauth.account.views import confirm_email
from rest_auth.views import PasswordResetConfirmView
from django.urls import path, include, re_path

from django.conf import settings
from django.conf.urls.static import static

from react.views import ReactView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('auth/', include('rest_auth.urls')),
    path('auth/registration/account-confirm-email/', confirm_email, name="account_email_verification_sent"),
    path('auth/registration/account-confirm-email/<key>/', confirm_email),
    path('auth/registration/', include('rest_auth.registration.urls')),
    path('password-reset-form/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),

    path('api/common/', include("common.urls")),
    path('api/shop/', include("shop.urls")),
    path('api/users/', include("users.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    re_path(r'', ReactView.as_view())
]