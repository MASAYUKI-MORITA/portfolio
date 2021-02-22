/* トグルボタン */
var headA = document.getElementsByClassName("headA")[0];
var headB = document.getElementsByClassName("headB")[0];
headB.addEventListener("click", function(){
    if(headA.style.display != "none"){
        headA.style.display = "none";
    } else {
        headA.style.display = "block";
    }
});

/* スムーススクロール */
/* ヘッダー */
var smoothScrollTrigger = document.querySelector("header").querySelectorAll("a");
for(var i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener("click", smoothScroll);
}

/* フッター */
smoothScrollTrigger = document.querySelector("footer").querySelectorAll("a")[0];
smoothScrollTrigger.addEventListener("click", smoothScroll);

function smoothScroll(e){
    e.preventDefault();
    var href = e.target.getAttribute("href");
    var targetElement = document.getElementById(href.replace("#", ""));
    var rect = targetElement.getBoundingClientRect().top;
    var offset = window.pageYOffset;
    var gap = 80;
    var target = rect + offset - gap;
    window.scrollTo({
        top: target,
        behavior: "smooth",
    });
    
    if(headA.style.display != "none"){headA.style.display = "none";}
}