cd C:\Projetos\procSus\

md C:\Projetos\procSus\build\%1
cd C:\Projetos\procSus\build\%1
copy C:\Projetos\procSus\platforms\android\ant-build\CordovaApp-release-unsigned.apk C:\Projetos\procSus\build\%1
pause

"C:\Program Files\Java\jdk1.7.0_55\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore C:\Projetos\procSus\script\procSus.keystore CordovaApp-release-unsigned.apk procSusKey
pause

C:\dev\android\sdk\build-tools\android-4.4W\zipalign.exe -v 4 CordovaApp-release-unsigned.apk ProcSus.apk
pause
