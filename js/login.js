// 로그인 반응형 추가제어
var ww = $(window).width()
if (ww <= 450 && ww >= 302) {
    $('.text2 p').eq(1).html('<p><span>다양한 혜택</span>이 준비되어있습니다.</p>')
}
if (ww <= 301) {
    $('.text1').html('<p>비밀번호는 대소문자를 구분합니다.</p>')
    $('.text2').html('<p><span>다양한 혜택</span>이 준비되어있습니다.</p>')
    $('.text3').html('<p>아이디, 비밀번호를 찾으실 수 있습니다.</p>')
}