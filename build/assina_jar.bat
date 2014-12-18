copy C:\ProjetosMovel\procSus\platforms\android\ant-build\CordovaApp-release-unsigned.apk C:\ProjetosMovel\procSus\build\
pause
"C:\Program Files\Java\jdk1.7.0_55\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore procSus.keystore CordovaApp-release-unsigned.apk procSusKey
pause
C:\dev\android\sdk\build-tools\android-4.4W\zipalign.exe -v 4 CordovaApp-release-unsigned.apk ProcSus.apk
pause