import Rx from "rxjs/Rx";

class Gama {
  constructor() {
    console.log(Rx.Observable.of(1, 2, 3));
  }

  getGama() {
    let btn = document.getElementById('but');
    let div = document.getElementById('ddiv');
    // btn.addEventListener('click', () => console.log('Clicked!'));

    Rx.Observable.fromEvent(btn, 'click').subscribe(() => { console.log('subscribe!'); this.changeBg('#ffffff'); });
    Rx.Observable.fromEvent(div, 'dblclick').subscribe(() => { console.log('dblclick!'); this.changeBg('#CDDC39'); });
  }

  changeBg(color) {
    let div = document.getElementById('ddiv');
    div.style.backgroundColor = color;
  }
}

var p = new Gama();
p.getGama();