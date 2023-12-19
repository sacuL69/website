var app = document.getElementById('content');
var typewriter = new Typewriter(app, {
    loop: false,
    delay: 50
});

var text = `
<font color="19ff00">root@localhost</font><font color="#ffffff">:</font><font color="#00ffff">~</font><font color="#ffffff">$ cd website/about_me</font><br/>
<font color="19ff00">root@localhost</font><font color="#ffffff">:</font><font color="#00ffff">~</font><font color="#ffffff">$ cat introduction.txt</font><br/><br/>
>name: lucas<br/> >age: 20<br/> >gender: male<br/> >hobbys: gym<br/> >occupation: sysadmin<br/><br/>
>find me on my socials: <a href="https://github.com/sacuL69" class="blink-animation">github</a>`;
