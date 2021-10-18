//5690452bfc344ad89892e60028a74914
fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5690452bfc344ad89892e60028a74914").then(function(res){
    return res.json();
})
.then(function (res){
    console.log(res);
    shownews(res.articles);
   
})
let parent=document.getElementById("news-homepage");
function shownews(news){
    news.forEach((el)=>{
        let div =document.createElement("div");

        div.style.display="flex";
        div.style.flexBasis="30%";
        div.style.gap="10px";

        let div_1 =document.createElement("div");
        let div_2 =document.createElement("div");
        let div_3 =document.createElement("div");

        let p1 =document.createElement("h3");
        let p2 =document.createElement("h4");

        p1.textContent=el.description;
        p2.textContent=el.author;

        div_1.append(p1,p2);

        let p3 =document.createElement("p");

        p3.textContent=el.content;

        div_2.append(p3);





        let img=document.createElement("img");

        img.src=el.urlToImage;

        div_3.append(img);

        img.style.width="60%";

        div.style.height="300px";

        

        
        
        div.append(div_1,div_2,div_3,);
        parent.append(div);
        

    });

}



