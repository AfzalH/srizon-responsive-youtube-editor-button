#!/usr/bin/env bash
mkdir srizon-responsive-youtube-editor-button
cp -R ./admin ./srizon-responsive-youtube-editor-button/
cp -R ./resources ./srizon-responsive-youtube-editor-button/

cp ./readme.txt ./srizon-responsive-youtube-editor-button/
cp ./index.php ./srizon-responsive-youtube-editor-button/


zip -r srizon-responsive-youtube-editor-button.1.0.zip srizon-responsive-youtube-editor-button

rm -R srizon-responsive-youtube-editor-button