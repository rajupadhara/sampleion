copy zipalign exe to app folder location



keytool -genkey -v -keystore huthacode.keystore -alias hutahcode -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore hutahcode.keystore app-release-unsigned.apk hutahcode

.\zipalign -v 4 app-release-unsigned.apk NavratriStaus.apk