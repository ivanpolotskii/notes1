const addbutt = document.querySelector(".addbutt");
const add1 = document.querySelector(".add");
const over = document.querySelector(".over");
const noteContainer = document.querySelector(".noteContainer");
const cont1 = document.querySelector(".cont1");
const over2 = document.querySelector(".over2");
const okbutt = document.querySelector(".okbutt");
const idi = document.querySelector(".idi");


over.style.display = "none";
over2.style.display = "none";

if (!localStorage.getItem('count')) {
  localStorage.setItem('count', 1);
}

over2.addEventListener('click', function (e) {
  if (e.target === over2) {
    over2.style.display = "none";
  }
})
okbutt.addEventListener('click', function () {
  let zagol2 = document.querySelector('.zagol2');
  let text2 = document.querySelector('.text2');
  let el = document.getElementById(`${idi.innerHTML}`);
  if (el.innerHTML != zagol2.value) {
    localStorage.setItem(idi.innerHTML, zagol2.value);

    localStorage.setItem(zagol2.value, text2.value);
    el.innerHTML = zagol2.value;
  }



  over2.style.display = "none";
})

let count = +localStorage.getItem('count');
let c = 0;
while (c++ < +localStorage.getItem('count') - 1) {
  cont1.insertAdjacentHTML('afterend', `
        <div class='chapter-item' id="over${c}">
          <div class = "note-item" id = "${c}" onclick = "
          over2.style.display='flex';
          document.querySelector('.zagol2').value=localStorage.getItem(this.id+'');
          document.querySelector('.text2').value=localStorage.getItem(document.querySelector('.zagol2').value); idi.innerHTML=this.id+'';
          ">
              ${localStorage.getItem(c + '')}
          </div>
          <div class="peregorod"></div>
          <i class="fas fa-trash" id="ico${c}"></i>
        </div>
    `);
  document.querySelector('.fa-trash').addEventListener('click', function (e) {
    let thisidi=parseInt((e.target.id).match(/\d+/));
    localStorage.removeItem(localStorage.getItem(thisidi));
    localStorage.removeItem(thisidi);
    document.getElementById(`over${thisidi}`).remove();
    count--;
    localStorage.setItem('count', count);
  });
};


addbutt.addEventListener("click", function () {
  let zagol = document.querySelector(".zagol");
  let text = document.querySelector(".text");
  localStorage.setItem(localStorage.getItem('count'), zagol.value);
  localStorage.setItem(zagol.value, text.value);
  over.style.display = "none";
  add1.style.display = "block";
  noteContainer.style.display = "block";

  cont1.insertAdjacentHTML('afterend', `
      <div class="chapter-item" id="over${count}">
        <div class = "note-item" id = "${count}" onclick = "
        over2.style.display='flex';
        document.querySelector('.zagol2').value=localStorage.getItem(this.id+'');
        document.querySelector('.text2').value=localStorage.getItem(document.querySelector('.zagol2').value); idi.innerHTML=this.id+'';
        ">
            ${zagol.value}
        </div>
        <div class="peregorod"></div>
        <i class="fas fa-trash" id="ico${count}"></i>
      </div>
    `);
  localStorage.setItem('count', +(localStorage.getItem('count')) + 1);

  document.querySelector('.fa-trash').addEventListener('click', function (e) {
    let thisidi=parseInt((e.target.id).match(/\d+/));
    localStorage.removeItem(localStorage.getItem(thisidi));
    localStorage.removeItem(thisidi);
    document.getElementById(`over${thisidi}`).remove();
    count--;
    localStorage.setItem('count', count);
  });

  count += 1;
});


add1.addEventListener("click", function () {
  let zagol = document.querySelector(".zagol");
  let text = document.querySelector(".text");
  zagol.value = '';
  text.value = '';
  over.style.display = "flex";
  // add1.style.display = "none";
  // noteContainer.style.display = "none";
});
