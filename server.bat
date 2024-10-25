@echo off
echo PC'de Node.js olup olmadigi kontrol ediliyor...
where node >nul 2>nul

if %errorlevel% neq 0 (
    echo Bilgisayarinizda Node.js yüklü olmadigi icin uygulama baslatilamadi.
    exit /b
)

cd /d "%~dp0"
npm start

rem npm start komutunun çalışıp çalışmadığını kontrol et
if %errorlevel% equ 0 (
    echo Uygulama basariyla baslatildi, http://localhost:9985/anasayfa'ya gidiliyor...
    start "" "http://localhost:9985/anasayfa"
) else (
    echo Uygulama baslatilirken bir hata olustu.
)
