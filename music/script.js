function show_warning(){
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    const wrn = document.createElement("div");
    wrn.id = "wrn";
    overlay.appendChild(wrn);
    const close = document.createElement('p');
    close.textContent = 'X';
    close.id = 'close';
    close.onclick = function(){
      document.body.removeChild(overlay);
      document.body.style.overflow = "";
    };
    wrn.appendChild(close);
    const wrn_title = document.createElement("p");
    wrn_title.id = "wrn_title";
    wrn_title.textContent = "تحذير";
    wrn.appendChild(wrn_title);
    const wrn_content = document.createElement("p");
    wrn_content.textContent = "قد تحتوي هذه الأغاني على ألفاظ بذيئة, عنف لفظي, الجهر بالمخدرات والأسلحة, العنف الجسدي ... لذا نطلب منكم التفكير مليا قبل الإسمتاع";
    wrn_content.id = "wrn_content";
    wrn.appendChild(wrn_content);
    acpt = document.createElement("button");
    acpt.id = "acpt";
    acpt.textContent = "متابعة";
    acpt.onclick = () =>{
      window.open("bad_music","_self");
    };
    wrn.appendChild(acpt);


}
