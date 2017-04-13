(function () {
    tinymce.PluginManager.add('srizon_responsive_youtube_button', function (editor, url) {

        editor.addButton('srizon_responsive_youtube_button', {
            icon: 'icon dashicons-media-video',
            title: 'Srizon Youtube Responsive Embed',
            onclick: function () {
                editor.windowManager.open({
                    title: 'Enter Youtube Video URL',
                    body: [
                        {
                            type: 'textbox',
                            name: 'youtube_url',
                            label: 'Video URL:'
                        }
                    ],
                    onsubmit: function (e) {
                        var content = srzGetYoutubeCode(e.data.youtube_url);
                        editor.insertContent(content);
                    }
                });
            }
        });
    });
})();

function srzGetYoutubeCode(youtube_url) {
    var video_id = youtube_url.split('v=')[1];
    if (video_id) {
        var ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        var str = '<table style="margin: 0 auto;width: 100%; height: auto;">\
            <tbody>\
            <tr>\
            <td>\
            <div style="position:relative;padding-bottom: 56.25%;padding-top: 30px;height: 0;overflow: hidden;max-width: 1920px;margin: 0 auto;">\
            <iframe class="youtube-player" type="text/html" width="1920" height="1200"\
        src="//www.youtube.com/embed/' + video_id + '?fs=1&rel=0&wmode=transparent&autoplay=0"\
        frameborder="0" allowfullscreen=""\
        style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;"></iframe>\
            </div>\
            </td>\
            </tr>\
            </tbody>\
            </table>\
            ';
        return str;
    } else {
        return 'invalid url';
    }
}