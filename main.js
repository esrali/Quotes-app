var autherName=["― J.K. Rowling, Harry Potter and the Goblet of Fire",
                "― Mahatma Gandhi",
                "― Mae West",
                "― Dr. Seuss",
                "― William W. Purkey",
                "― Bernard M. Baruch" ,
                "― Marcus Tullius Cicero",
                "― Frank Zappa" ,
                "― Albert Einstein",
                "― Marilyn Monroe",
                "― Oscar Wilde"];

var capContent=["“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
                "“You only live once, but if you do it right, once is enough.”",
                "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
                "“To live is the rarest thing in the world. Most people exist, that is all.”",
                "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
                "“A room without books is like a body without a soul.”",
                "“So many books, so little time.”",
                "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
                "“Always forgive your enemies; nothing annoys them so much.”",
                "“Be yourself; everyone else is already taken.”",
                "“It is better to be hated for what you are than to be loved for what you are not.”"];

var nIndex;

function display()
{
    nIndex=Math.floor(Math.random()*autherName.length);
    document.getElementById("caption").innerHTML=capContent[nIndex];
    document.getElementById("auther").innerHTML=autherName[nIndex];
}