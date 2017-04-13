mkdir srizon-responsive-youtube-editor-button
xcopy .\admin .\srizon-responsive-youtube-editor-button\admin\ /E
xcopy .\resources .\srizon-responsive-youtube-editor-button\resources\ /E

xcopy .\index.php .\srizon-responsive-youtube-editor-button\
xcopy .\readme.txt .\srizon-responsive-youtube-editor-button\

7za a -tzip srizon-responsive-youtube-editor-button.1.0.zip srizon-responsive-youtube-editor-button

rmdir /S /Q .\srizon-responsive-youtube-editor-button
