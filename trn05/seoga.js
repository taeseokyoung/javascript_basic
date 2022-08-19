$(function () {
    var TXT = ['HOME', '01', '02', '03', '04', 'Tae Portfolio']

    $('.main').fullpage({

        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'footer'],
        css3: false,
        // afterReBuild: function () {
        //     $('.section').addClass('on');
        // },
        afterLoad: function (page, num) {
            setTimeout(function () {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
                $('.navBar li').eq(num - 1).addClass('on').siblings().removeClass('on');
                $('.this_page').text(TXT[num - 1]);

                // if (num !== 1) { $('.Header').addClass('on') } else { $('.Header').removeClass('on') }
                num !== 1
                    ? $('.Header').addClass('on')
                    : $('.Header').removeClass('on')

            })

        },
    });

    $('.basicSlider').slick({
        arrows: false,
        asNavFor: ".basicSlider"
    });

})