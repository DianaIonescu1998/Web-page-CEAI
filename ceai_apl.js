window.onload=function(){
    introducere();
    schimbare_background();
    preluare_storage();
    butoane();
    terminare();
    fericire();
    reseteaza();
    input_textarea();
    var x=localStorage.setItem("costCos", "0");
   // selecteaza_div();
   select_calculare();
    //selecteaza_div();
    cauta();
    interval();
    move();
    sel_f();

    var imag=document.createElement("img");
    imag.src="pisicaCeai.png";
    imag.id="pisica";
    imag.style.position="absolute";
    imag.style.width="300px";
    imag.style.height="200px";
    imag.style.top="0px";
    imag.style.left="0px";
    document.body.appendChild(imag);
    document.onmousemove=coord;
}

function schimbare_background(){
    var div_back=document.createElement("div");
    div_back.id="div_background";
    var culori=["rgb(0, 208, 208)", "whitesmoke", "rgb(230, 153, 255)"];
    var nume_culori=["nuanta de albastru", "nuanta de gri", "nuanta de violet"];
    for(let i=0; i<3; i++){
    var r=document.createElement("input");
    r.type="radio";
    r.name="background_color";
    r.value=culori[i];
    if(i==0) {r.checked=true;
        document.body.style.backgroundColor=r.value;}
    r.addEventListener("click", function(){
        document.body.style.backgroundColor=this.value;
    })
    var l=document.createElement("label");
    var txtl=document.createTextNode(nume_culori[i]);
    l.appendChild(txtl);
    l.appendChild(r);
   
    div_back.appendChild(l);
  
    }
    document.body.appendChild(div_back);

    setTimeout(function(){
        var d=document.getElementById("div_background");
        d.parentNode.removeChild(d);
    }, 6000);
}

function introducere(){
    var persoana=localStorage.getItem("nume");
    if(persoana==null){
     persoana=prompt("Buna ziua! Bine ati venit pe site-ul nostru! Numele tau este: ", "nume" );
    localStorage.setItem("nume",persoana);}
}

function preluare_storage(){
    var p=document.createElement("p");
    p.innerHTML="Bine ai venit pe pagina noastra, "+localStorage.getItem("nume")+". Ne bucuram sa te avem aici, sa te poti bucura de produsele noastre.";
    document.body.appendChild(p);
}

function butoane(){
    var btn=document.createElement("button");
    var text=document.createTextNode("Afiseaza produsele");
    btn.appendChild(text);
    btn.setAttribute("id","afisare_ceaiuri");
    document.body.appendChild(btn);
 var x=document.getElementById("afisare_ceaiuri");
    x.addEventListener("mousedown", function(){
        //alert(12222);
        var verif=document.getElementById("container_ceaiuri");
        if(verif==null){
        var d_container=document.createElement("div");
        d_container.setAttribute("id", "container_ceaiuri");
 
    for(let i=0; i<tipuri_ceaiuri.length; i++){
          ///  alert(i);
      d_container.appendChild(tipuri_ceaiuri[i].div_parametri());
      /*
        var d=document.createElement("div");
       // d.style.width="30vw";
        //d.style.height="30vh";
        d.style.backgroundColor="rgb(128,128,128)";
        d.style.color="white";
        d.style.border="1px solid white";
        d.style.display="inline";
        //alert(tipuri_ceaiuri[i].price);
        
        var l=document.createElement("label");
        txl=document.createTextNode(" cu pliculete ");
        l.appendChild(txl);
        l.setAttribute("for", "pliculete");
        var check_box=document.createElement("input");
        check_box.type="checkbox";
        check_box.name="pliculete";
        var vr=Math.floor(Math.random() * 2);
        if(vr==0) check_box.checked=false;
        else check_box.checked=true;
        l.appendChild(check_box);

        var tx=document.createTextNode(tipuri_ceaiuri[i].product+' <br /> '+tipuri_ceaiuri[i].price+" lei "+tipuri_ceaiuri[i].gram+" grame"+"<br>"+tipuri_ceaiuri[i].description);
        d.appendChild(tx);
        d.appendChild(l);
        d_container.appendChild(d);
*/
    }
    document.body.appendChild(d_container);
    //alert(d_container.id);
    var t=this.nextSibling;
    document.body.insertBefore(d_container, t);

   // alert(t);
}
selecteaza_div();
    }); 


    var btn1=document.createElement("button");
    var text1=document.createTextNode("Sorteaza produsele");
    btn1.appendChild(text1);
    btn1.setAttribute("id","sortare_produse");
    document.body.appendChild(btn1);
    var x1=document.getElementById("sortare_produse");
    x1.addEventListener("mouseup", function(){var d_cont=document.getElementById("container_ceaiuri");
    if(d_cont==null){
        var dv=document.createElement("div");
        dv.setAttribute("id","container_ceaiuri");
        document.body.appendChild(dv);
    }
    var d_cont=document.getElementById("container_ceaiuri");
    var divuri=d_cont.querySelectorAll("div");
    var v=Array.prototype.slice.call(divuri);
    v.sort(function(a,b){
        return a.innerHTML.localeCompare(b.innerHTML);
    });
    for(let i=0; i<divuri.length; i++)
    d_cont.appendChild(v[i]);
    /*
    alert(divuri.length);
    for(i=0; i<divuri.length; i++)
    for(j=0; j<divuri.length; j++){
        if(divuri[i].innerHTML[0]>divuri[j].innerHTML[0]){
            divuri[i].parentNode.insertBefore(divuri[j], divuri[i]);
        }

    }
    */
    /*
    var v=[];
    for(i=0; i<tipuri_ceaiuri.length; i++)
            v.push(tipuri_ceaiuri[i]);
           // for(i=0; i<tipuri_ceaiuri.length; i++)
            alert(v[0].lit_1());
            //for(i=0; i<tipuri_ceaiuri.length; i++)
            alert(tipuri_ceaiuri[0].lit_1()>tipuri_ceaiuri[1].lit_1());
    for(i=0; i<v.length; i++)
        for(j=i; j<v.length; i++)  {
           //alert(v);
            if(tipuri_ceaiuri[i].lit_1() > tipuri_ceaiuri[j].lit_1()){
                //alert("aici[j].parentNode.insertBefore(d_cont[j], d_cont[i]);
                var aux;
                aux=v[i];
                v[i]=v[j];
                v[j]=aux;
            }
        }
      */            
    });
    


}
function terminare(){
    var p=document.createElement("p");
    p.innerHTML="Inainte sa pleci, "+localStorage.getItem("nume")+", te rugam sa ne spui cat de multumit(a) ai fost de pagina noastra, dandu-ne o nota de la 1 la 10.";
    document.body.appendChild(p);
    var inp_range=document.createElement("input");
    inp_range.setAttribute("type","range");
    inp_range.min="1";
    inp_range.max="10";
    inp_range.defaultValue="5";
    inp_range.setAttribute("id","inp_range");
    document.body.appendChild(inp_range);
}

function fericire()
{
    var irange=document.getElementById("inp_range");
    irange.addEventListener("change",function(){
    if(this.value<"5")
    alert("Ne pare rau ca te-am dezamagit!");
    else
    {
        var text="Wow, "+this.value+ "! Iti multumim!";
    alert(text);}
});
}


class Produs{
    constructor(denumire, pret, gramaj, descriere) {
    this.product = denumire;
    this.price = pret;
    this.description=descriere;
    this.gram=gramaj;
}
    lit_1(){return this.product[0];}
    descriere_produs(){return this.description;}
    pret_produs(){return this.price;}
    div_parametri (){
        var dv= document.createElement("div");
        dv.style.backgroundColor="rgb(128,128,128)";
        dv.style.color="white";
        dv.style.width="20vw";
        dv.style.height="20vh";
        dv.style.border="1px solid white";
        dv.style.display="inline-grid";
        dv.innerHTML=this.product+"<br>"+this.price+" lei; "+this.gram+"g <br>"+this.description+"<br>";
        
        var l=document.createElement("label");
        var txl=document.createTextNode(" cu pliculete ");
        l.appendChild(txl);
        l.setAttribute("for", "pliculete");
        var check_box=document.createElement("input");
        check_box.type="checkbox";
        check_box.name="pliculete";
        var vr=Math.floor(Math.random() * 2);
        if(vr==0) check_box.checked=false;
        else check_box.checked=true;
        l.appendChild(check_box);
        dv.appendChild(l);
        return dv;
    }

  }

var tipuri_ceaiuri=[
new Produs("Tei", "10", "100", "calmant, reduce febra"),
new Produs("Menta","5", "40", "revigorant"),
new Produs("Sunatoare", "6", "8", "dureri stomacale"),
new Produs("Ghimbir", "12", "60", "artrita, digestie"),
new Produs("Ceai negru", "15",  "70", "reduce oboseala"),
new Produs("Valeriana", "13", "30", "inlatura insomniile"),
new Produs("Cuisoare","17", "50", "dureri stomacale"),
new Produs("Scortisoara","9", "39", "calmant, stimuleaza circulatia sangvina"),
new Produs("Lemongrass","20", "55", "calmant, inlatura efectele indigestiei"),
new Produs("Patrunjel","5", "30", "diuretic"),
new Produs("Ginseng","29", "70", "stimuleaza vitalitatea organismului"),
new Produs("Salvia","11", "60", "calmeaza starile nervoase"),
new Produs("Cimbru","8", "30", "intareste sistemul imunitar, tinlatura tusea"),
new Produs("Rozmarin","7", "20", "alina simptomele de raceala, inlatura durerile de cap"),
new Produs("Zmeura","18", "60", "inlatura durerile menstruale"),
new Produs("Urzica","7", "47", "calmeaza tusea, curata sangele")
];

/*
function produse(){
    alert(1);
    /* ////////
   // var btn=document.getElementById("afisare_ceaiuri");
    //btn.addEventListener("mousedown", function(){
    var d_container=document.createElement("div");
 
    for(let i=0; i<tipuri_ceaiuri.length; i++){
alert(i);
      
        var d=document.createElement("div");
        //alert(tipuri_ceaiuri[i].price);
        var tx=document.createTextNode(tipuri_ceaiuri[i].product);
        d.appendChild(tx);
        d_container.appendChild(d);

    }
    document.body.appendChild(d_container);
    
//});   
} 
*/
////////onkeydown  (R)=> sterge itemul din local storage 
function reseteaza(){
    
   window.addEventListener("keypress", function(event){
       
       if(event.key=="r" || event.key=="R"){
       localStorage.removeItem("nume");
    }
   })
}


function input_textarea(){
    var br=document.createElement("br");
    document.body.appendChild(br);
    var tx=document.createElement("textarea");
    var text=document.createTextNode("Scrie-ne sugestiile tale.");
    tx.appendChild(text);
    var btn=document.createElement("button");
    btn.innerHTML="Submit";
    tx.appendChild(btn);
    tx.setAttribute("id","textarea");
    document.body.appendChild(tx);
    var b=document.createElement("button");
    b.innerHTML="Submit";
    b.addEventListener("mouseover",function(){
        var tx=document.getElementById("textarea");
        var v=tx.childNodes;
       // alert(v.length);
        tx.removeChild(v[0]);
        tx.innerHTML="Multumim!";
       // var text=document.createTextNode("Iti multumim pentru sugestii!");
         //   tx.appendChild(text);
    } );
    document.body.appendChild(b);

   
}


function selecteaza_div(){
    var x=document.getElementById("container_ceaiuri");
   // alert(x);
    var vx=x.querySelectorAll("div");
    for(let i=0; i<vx.length; i++){
        vx[i].addEventListener("click", function(){
           // alert(parseInt(tipuri_ceaiuri[i].pret_produs()));
           this.style.backgroundColor="white";
           this.style.color="grey";
            cost=parseInt(localStorage.getItem("costCos"));
            cost+=parseInt(tipuri_ceaiuri[i].pret_produs());
            localStorage.setItem("costCos", cost);
            //alert(cost);
        });
       // alert(cost);
}
}
/*
function select_calculare(){
    alert(1);
    var f=document.createElement("div");
    f.id="form";
    var sel=document.createElement("select");
    var v1=document.createElement("option");
    v1.id="reseteaza";
    v1.value="reseteaza";
    v1.addEventListener("change", function(){
        if(this.value=="reseteaza"){
        localStorage.setItem("costCos","0");}
    });
    v1.innerHTML="reseteaza";
    sel.appendChild(v1);
    var v2=document.createElement("option");
    v2.id="calculeaza";
    v2.value="calculeaza";
    v2.innerHTML="calculeaza";
    v2.addEventListener("change", function(){
        if(this.value=="calculeaza"){
        cost=localStorage.getItem("costCos");
        alert(cost);
        var p=document.createElement("p");
        p.innerHTML="Costul este "+cost;

        //document.getElementById("form").parentNode.insertBefore(p, document.getElementById("form").nextSibling);
       // document.getElementById("form").parentNode.appendChild(p);}
       document.body.appendChild(p);}
    });
    sel.appendChild(v2);
    f.appendChild(sel);
    document.body.appendChild(f);
}
*/
function select_calculare(){
    //alert(1);
    var f=document.createElement("div");
    f.id="form";
   var v1=document.createElement("button");
    //var v1=document.createElement("option");
   // v1.id="reseteaza";
    v1.innerHTML="reseteaza";
    v1.addEventListener("mousedown", function(){
       var p=document.getElementById("paragraf");
       if(p!=null) p.parentNode.removeChild(p);
        localStorage.setItem("costCos","0"); //}
    });
    v1.innerHTML="reseteaza";
    f.appendChild(v1);
    var v2=document.createElement("button");
    v2.id="calculeaza";
    v2.innerHTML="calculeaza";
    v2.addEventListener("mousedown", function(){
       // if(this.value=="calculeaza"){
        cost=localStorage.getItem("costCos");
        //alert(cost);

        var p=document.createElement("p");
        p.id="paragraf";
        p.innerHTML="Costul este "+cost;

        document.getElementById("form").parentNode.insertBefore(p, document.getElementById("form").nextSibling);
       // document.getElementById("form").parentNode.appendChild(p);}
       //document.body.appendChild(p); //}
    });
    f.appendChild(v2);
    //f.appendChild(sel);
    document.body.appendChild(f);
}

function interval(){

   var d=document.createElement("div");
   d.style.height="20px";
        d.style.width="20px";
        d.style.borderRadius="50%";
        d.style.backgroundColor="grey";
        d.style.display="inline-block";
        d.style.position="absolute";
        d.style.top="0px";
        d.style.left="0px";
        document.body.appendChild(d);
   d.id="div_interval";
   
  }
  
  function move() {
    var elem = document.getElementById("div_interval"); 
    elem.style.top = "0px";
    var x=0;
    var id = setInterval(f, 10);
    function f() {
      if (x == 1000) {
        clearInterval(id);
      } else {
        x++; 
        elem.style.top = x + "px"; 
      }
    }
   /*
    var xi=setInterval(function(event){
        var x =event.clientX;
        var y=event.clientY;
        alert(x);
        /*
        var d=document.createElement("div");
        

    d.style.top="0 px";
    d.style.left="0 px";
*/
  //  }, 6000 );
  //  document.body.appendChild(dv);

    //var d=document.getElementById("div_interval");
    //alert(d);
    //clearInterval(d);
}

function cauta(){
    var text=document.createElement("input");
    text.type="text";
    text.id="text_input";
    var b=document.createElement("button");
    b.innerHTML="Cauta";
    b.addEventListener("click", function(){
        var d=document.createElement("div");
        var t=document.getElementById("text_input");
        for(let i=0; i<tipuri_ceaiuri.length; i++){
        if(tipuri_ceaiuri[i].descriere_produs().includes(t.value))
                d.appendChild(tipuri_ceaiuri[i].div_parametri());}
        document.body.appendChild(d);

    })

    document.body.appendChild(text);
    document.body.appendChild(b);
}


function coord(event){
   //alert(1);
    var x=event.clientX+5;
    var y=event.clientY+5;

    var imag=document.getElementById("pisica");
    imag.style.top=y+"px";
    imag.style.left=x+"px";
    
    //alert(x);
}

function animatie() {
    var elem = document.getElementById("anim"); 
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

function sel_f(){
    var dv=document.createElement("div");
    var sel=document.createElement("select");
    var v1=document.createElement("option");
    v1.id="cu pisica";
    v1.value="cu pisica";
    v1.innerHTML="cu pisica";
    /*
    v1.addEventListener("onchange", function(){
        if(this.value=="cu pisica"){
        var pis=document.getElementById("pisica");
        pis.style.visibility="visible";}
    })
    */
    sel.appendChild(v1);
    var v2=document.createElement("option");
    v2.id="fara pisica";
    v2.value="fara pisica";
    v2.innerHTML="fara pisica";
    /*
    v2.addEventListener("onchange", function(){
        if(this.value=="fara pisica"){
        var pis=document.getElementById("dpisica");
        pis.style.visibility="hidden";
    }
    })
    */
    sel.appendChild(v2);
    sel.addEventListener("change", function(){
        if(this.value=="fara pisica"){
        var pis=document.getElementById("pisica");
        pis.style.visibility="hidden";
    }
    if(this.value=="cu pisica"){
        var pis=document.getElementById("pisica");
        pis.style.visibility="visible";}
    });
    dv.appendChild(sel);
    
    document.body.appendChild(dv);


}