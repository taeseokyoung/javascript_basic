$(function () {

    //fullpage 
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
        // navigation: true,
        afterLoad: function (page, num) {
            $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(page);
            $('.this_bg').css({
                backgroundPositionY: - 100 * (num - 1) + "px"
            });
            $('.this_pic img').attr({ src: `./assets/images/lesedilarona0${num}.jpg` });
            // img 'src' 'alt' 이런것들을 attr라고 부른다.(객체, property)
            $('.this_tp').css({
                backgroundImage: `url(./assets/images/lesedilarona0${num}.jpg)`
                // background 가져올 때 축약형으로 쓰지 말자.
            })
        },
    });
})