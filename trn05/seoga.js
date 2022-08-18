$(function () {
    var TXT = ['HOME', '01', '02', '03', '04', 'Tae Portfolio']
    //fullpage 
    $('.main').fullpage({
        // background fixed하는방법
        css3: false,
        loopHorizontal: false,
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
        afterReBuild: function () {
            $('.section').addClass('on');
        },
        afterLoad: function (page, num) {
            $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            // 생자바스크립트
            // document.querySelectorAll('.section').forEach(el => {
            //     document.querySelectorAll('.section').forEach(el =>el.ATTRIBUTE_NODE.ClassList.remove('on'))
            //     el.classList.add('on')
            // })
            $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);
            // num이 1부터 들어왔기 때문에 0으로 만들어주기 위해서

        },
    });
    // 2버전에서의 사용방법을 찾지 못함...(풀페이지가 내려왔다가 왼쪽으로, 내려왔다가 오른쪾으로)
    //     $('.page03').on('wheel', function (e) {
    //         console.log(e.originalEvent.wheelDelta)
    //         fullpage_api.moveSlideLeft();
    //     })


    // https://github.com/aminta/fullPage.js-2.9.6 에서 마우스 휠로 움직일 때 슬라이드를 제어할 수 있는 옵션이 있다.
    $('.page03').on('wheel', function (e) {
        console.log(e.originalEvent.wheelDelta)
        // if (e.originalEvent.wheelDelta / 120 > 0) {
        //     $.fn.fullpage.moveSlideLeft();
        // } else {
        //     $.fn.fullpage.moveSlideRight();
        // }
        if (e.originalEvent.wheelDelta > 0) {
            $.fn.fullpage.moveSlideLeft();
        } else {
            $.fn.fullpage.moveSlideRight();
        }

    })
})