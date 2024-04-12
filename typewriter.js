var app = document.getElementById('content');
var typewriter = new Typewriter(app, {
    loop: false,
    delay: 50
});

var text = `
<font color="19ff00">root@localhost</font><font color="#ffffff">:</font><font color="#00ffff">~</font><font color="#ffffff">$ cd website/about_me</font><br/>
<font color="19ff00">root@localhost</font><font color="#ffffff">:</font><font color="#00ffff">~</font><font color="#ffffff">$ cat introduction.txt</font><br/><br/>
>name: lucas<br/> >age: 21<br/> >gender: male<br/> >hobbys: gym<br/> >occupation: sysadmin<br/><br/>
>see also: <a href="https://github.com/sacul-xyz" class="blink-animation">github</a> <a href="mailto:contact@sacul.xyz" class="blink-animation">e-mail</a>`;
