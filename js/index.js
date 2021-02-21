$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})
$(".slide_group2").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: false, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

// 슬라이드 멈춤 재생 버튼
var $ibutton;
$('.article1 .plpa').on('click', function(){
    $ibutton = $(this).find('i')
    if ($ibutton.hasClass('fa-pause')) {
        $('.slide_group').slick('slickPause')
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slide_group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})
// 슬라이드 멈춤 재생 버튼 2
var $ibutton2;
$('.article4 .plpa').on('click', function(){
    $ibutton2 = $(this).find('i')
    if ($ibutton2.hasClass('fa-pause')) {
        $('.slide_group2').slick('slickPause')
        $ibutton2.removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slide_group2').slick('slickPlay')
        $ibutton2.removeClass('fa-play').addClass('fa-pause')
    }
})

// prev, next
var ww = $(window).width()
console.log(ww)

var $prev = $('.slide_group .prev')
var $prevAni = $('#section .article1 .prevani')
var $next = $('.slide_group .next')
var $nextAni = $('#section .article1 .nextani')
$prev.hover(
    function(){
        if(!$prevAni.hasClass('on')) {
            $prevAni.addClass('on')
        }
    },
    function(){
        if($prevAni.hasClass('on')) {
            $prevAni.removeClass('on')
        }
    }
)
$next.hover(
    function(){
        if(!$nextAni.hasClass('on')) {
            $nextAni.addClass('on')
        }
    },
    function(){
        if($nextAni.hasClass('on')) {
            $nextAni.removeClass('on')
        }
    }
)

// 스크롤 시 헤더 픽스
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct>=20 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
    } else if (sct<20 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
    }
})

// 탑버튼 부드럽게 스크롤
$('.topbt').on('click', function(e){
    e.preventDefault()
    var sct = $(window).scrollTop()
    if (sct===0) {
         return false
    } else {
        $('html').animate({
            scrollTop:0
        }, 500)
    }    
})

// 열기, 닫기 버튼
$('#header .open').on('click', function(){
    $(this).removeClass('on')
    $(this).next().addClass('on')
    $(this).next().next().addClass('on')
})
$('#header .close').on('click', function(){
    $(this).removeClass('on')
    $(this).prev().removeClass('on')
    $(this).prev().prev().addClass('on')
})