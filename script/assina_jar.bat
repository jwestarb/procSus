cd C:\ProjetosMovel\procSus\

md C:\ProjetosMovel\procSus\build\%1
cd C:\ProjetosMovel\procSus\build\%1
copy C:\ProjetosMovel\procSus\platforms\android\ant-build\CordovaApp-release-unsigned.apk C:\ProjetosMovel\procSus\build\%1
pause

"C:\Program Files\Java\jdk1.7.0_55\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore C:\ProjetosMovel\procSus\script\procSus.keystore CordovaApp-release-unsigned.apk procSusKey
pause

C:\dev\android\sdk\build-tools\android-4.4W\zipalign.exe -v 4 CordovaApp-release-unsigned.apk ProcSus.apk
pause
