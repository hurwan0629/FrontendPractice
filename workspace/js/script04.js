const form=document.querySelector("#character-search");

form.addEventListener("submit", function(e){
  e.preventDefault();


  const input=document.querySelector("#search-bar")
  const keyword=input.value.trim();

  console.log("keyword : " + keyword);
  if(keyword==="세트"){
    document.querySelector("#introduce-sett").scrollIntoView({behavior: "smooth"});
  } 
  if(keyword==="그웬"){
    document.querySelector("#introduce-gwen").scrollIntoView({behavior: "smooth"});
  }
  if(keyword==="킨드레드"){
    document.querySelector("#introduce-kindred").scrollIntoView({behavior: "smooth"});
  }
  input.value="";
});