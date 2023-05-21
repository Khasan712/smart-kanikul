from django.contrib import admin
from .models import User, Appeal
from import_export.admin import ImportExportModelAdmin
from import_export import resources


class AppealResource(resources.ModelResource):
    class Meta:
        model = Appeal
        fields = ('phone_number',)

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone_number', 'created_at')


@admin.register(Appeal)
class AppealAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = AppealResource
    list_display = ('id', 'name', 'phone_number', 'created_at')