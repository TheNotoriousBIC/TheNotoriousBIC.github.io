Twitch.init({
    clientId: 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
}, function(error, status) {

});

$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/thenotoriousbic',
    headers: {
        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
    },
    success: function(data) {
        console.log(data);
        if (data["stream"] == null) {
            $("#bicText").empty().append("Currently Offline");
            $("#bicText").removeClass("live").addClass("notLive");
            $("")
        }
        else {
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/channels/thenotoriousbic',
            headers: {
                'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
            },
            success: function(data) {
                $('#offline').empty();
                $("#bicText").empty().append("<br>< strong style='color: #00FF00; font-size: 48px; padding-top: -70%;'>LIVE NOW!</strong></br><br><strong style='color: #26B5EB' id='playing'>Playing</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.game + "</span>");
                $.ajax({
                    type: 'GET',
                    url: 'https://api.twitch.tv/kraken/streams/thenotoriousbic',
                    headers: {
                        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
                    },
                    success: function(data) {
                        $("#bicText").append("<br><strong style='color: #26B5EB' id='playing'>Viewers</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.stream.viewers + "</span>");
                    }
                });
            }
        });
      }
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/catahstrophic',
    headers: {
        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
    },
    success: function(data) {
        console.log(data);
        if (data["stream"] == null) {
            $("#catahText").empty().append("Currently Offline");
            $("#catah").css("color", "#FE8F01")
        }
        else {
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/channels/catahstrophic',
            headers: {
                'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
            },
            success: function(data) {
              $("#catah").css("color", "#00FF00")
                $("#catahText").empty().append("<br><strong style='color: #00FF00; text-align: center; font-size: 48px; padding-top: -70%;'>LIVE NOW!</strong></br><br><strong style='color: #00FF00' id='playing'>Playing</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.game + "</span>");
                $.ajax({
                    type: 'GET',
                    url: 'https://api.twitch.tv/kraken/streams/catahstrophic',
                    headers: {
                        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
                    },
                    success: function(data) {
                        $("#catahText").append("<br><strong style='color: #00FF00' id='playing'>Viewers</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.stream.viewers + "</span>");
                    }
                });
            }
        });
      }
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/thefrozenglaceon',
    headers: {
        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
    },
    success: function(data) {
        console.log(data);
        if (data["stream"] == null) {
            $("#frozenText").empty().append("Currently Offline");
            $("#frozen").css("color", "#FE8F01");
        }
        else {
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/channels/thefrozenglaceon',
            headers: {
                'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
            },
            success: function(data) {
              $("#frozen").css("color", "#00FF00");
                $("#frozenText").empty().append("<br /><strong style='color: #00FF00; text-align: center;' id='playing'>Playing</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.game + "</span>");
                $.ajax({
                    type: 'GET',
                    url: 'https://api.twitch.tv/kraken/streams/thefrozenglaceon',
                    headers: {
                        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
                    },
                    success: function(data) {
                        $("#frozenText").append("<br><strong style='color: #00FF00' id='playing'>Viewers</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.stream.viewers + "</span>");
                    }
                });
            }
        });
      }
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/kinggothalion',
    headers: {
        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
    },
    success: function(data) {
        console.log(data);
        if (data["stream"] == null) {
            $("#gothText").empty().append("Currently Offline");
            $("#goth").css("color", "#FE8F01");
        }
        else {
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/channels/kinggothalion',
            headers: {
                'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
            },
            success: function(data) {
                $("#goth").css("color", "#00FF00");
                $("#gothText").empty().append("<br><strong style='color: #00FF00; text-align: center;' id='playing'>Playing</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.game + "</span>");
                $.ajax({
                    type: 'GET',
                    url: 'https://api.twitch.tv/kraken/streams/kinggothalion',
                    headers: {
                        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
                    },
                    success: function(data) {
                        $("#gothText").append("<br><strong style='color: #00FF00; text-align: center;' id='playing'>Viewers</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.stream.viewers + "</span>");
                    }
                });
            }
        });
      }
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/timthetatman',
    headers: {
        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
    },
    success: function(data) {
        console.log(data);
        if (data["stream"] == null) {
            $("#timTheTextman").empty().append("Currently Offline");
            $("#tim").css("color", "#FE8F01");
        }
        else {
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/channels/timthetatman',
            headers: {
                'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
            },
            success: function(data) {
                $("#tim").css("color", "#00FF00");
                $("#timTheTextman").empty().append("<br /><strong style='color: #00FF00; text-align: center;' id='playing'>Playing</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.game + "</span>");
                $.ajax({
                    type: 'GET',
                    url: 'https://api.twitch.tv/kraken/streams/timthetatman',
                    headers: {
                        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
                    },
                    success: function(data) {
                        $("#timTheTextman").append("<br /><strong style='color: #00FF00; text-align: center;' id='playing'>Viewers</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.stream.viewers + "</span>");
                    }
                });
            }
        });
      }
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/moonmoon_ow',
    headers: {
        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
    },
    success: function(data) {
        console.log(data);
        if (data["stream"] == null) {
            $("#moonText").empty().append("Currently Offline");
            $("#moon").css("color", "#FE8F01");
        }
        else {
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/channels/moonmoon_ow',
            headers: {
                'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
            },
            success: function(data) {
                $("#moon").css("color", "#00FF00");
                $("#moonText").empty().append("<br /><strong style='color: #00FF00; text-align: center;' id='playing'>Playing</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.game + "</span>");
                $.ajax({
                    type: 'GET',
                    url: 'https://api.twitch.tv/kraken/streams/moonmoon_ow',
                    headers: {
                        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
                    },
                    success: function(data) {
                        $("#moonText").append("<br /><strong style='color: #00FF00; text-align: center;' id='playing'>Viewers</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.stream.viewers + "</span>");
                    }
                });
            }
        });
      }
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/s2crim',
    headers: {
        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
    },
    success: function(data) {
        console.log(data);
        if (data["stream"] == null) {
            $("#krippText").empty().append("Currently Offline");
            $("#kripp").css("color", "#FE8F01");
        }
        else {
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/channels/s2crim',
            headers: {
                'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
            },
            success: function(data) {
                $("#kripp").css("color", "#00FF00");
                $("#krippText").empty().append("<br><strong style='color: #00FF00; text-align: center;' id='playing'>Playing</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.game + "</span>");
                $.ajax({
                    type: 'GET',
                    url: 'https://api.twitch.tv/kraken/streams/s2crim',
                    headers: {
                        'Client-ID': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o'
                    },
                    success: function(data) {
                        $("#krippText").append("<br><strong style='color: #00FF00; text-align: center;' id='playing'>Viewers</strong> " + "<span style='color: #FFFFFF' id='game'>" + data.stream.viewers + "</span>");
                    }
                });
            }
        });
      }
    }
});

$(function () {
     $('.broadcasterLogo').hover(function (evt) {
         document.getElementById('livePreview').src = 'https://player.twitch.tv/?channel=' + this.id;
         if (this.id == "catahstrophic") {
             $("#livePreview").css("top", "0px");
             $("#livePreview").css("left", "0px");
         } else if (this.id == "thefrozenglaceon") {
             $("#livePreview").css("top", "0px");
             $("#livePreview").css("left", "100%");
         } else if (this.id == "kinggothalion") {
             $("#livePreview").css("top", "100%");
             $("#livePreview").css("left", "0px");
         } else if (this.id == "timthetatman") {
             $("#livePreview").css("top", "100%");
             $("#livePreview").css("left", "100%");
         } else if (this.id == "moonmoon_ow") {
             $("#livePreview").css("top", "200%");
             $("#livePreview").css("left", "0px");
         } else if (this.id == "nl_kripp") {
             $("#livePreview").css("top", "200%");
             $("#livePreview").css("left", "100%");
         }
         $('#livePreview').fadeIn();
     }, function () {
         $('iframe').prop("volume", 0);
         $('#livePreview').fadeOut();
     });
 });

var url = $('#livePreview').attr('src');
 $(function () {
    $('#livePreview').hover(function () {
        $('#livePreview').stop(true, true).fadeIn();
    }, function () {
        //First get theiframe URL
        $('#livePreview').attr('src', '');
        $('#livePreview').fadeOut();
    });
});
