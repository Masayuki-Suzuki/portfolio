var store = {
  state: {
    isColorClass: true,
    isFired: false,
    delta: 0,
    uintDelta: 0,
    timeStamp: 0,
    sleep: 500,
    cTime: Date.now(),
    cDelta: 0,
    position: 0,
    translate: 'translateY(0vh)',
    location: 1,
    save: 0, // test property
    clock: 0, // test property
    isScroll: null
  },
  setIsColor(){
    if(this.state.location > 1){
      this.state.isColorClass = false;
    } else {
      this.state.isColorClass = true;
    }
  },
  ScrollAction(){
    document.getElementsByClassName('content-wrapper')[0].style.transition = "all 0.5s cubic-bezier(.69,.06,.34,.99) 0s";
    this.state.translate = 'translateY(' + (this.state.position * -100) + '%)';
    setTimeout(() => {
      document.getElementsByClassName('content-wrapper')[0].style.transition = "";
    },500);
  },
  scrollEvent(direction){
    switch (this.state.position){
      case 0:
        history.replaceState('','','/');
        if(direction){
          this.state.position++;
          this.state.location++;
          this.ScrollAction();
          this.setIsColor();
        }
        break;
      case 1:
        history.replaceState('','','/about');
        if(direction){
          this.state.position++;
          this.state.location++;
        } else {
          this.state.position--;
          this.state.location--;
          this.ScrollAction();
          this.setIsColor();
        }
        break;
      case 2:
        history.replaceState('','','/works');
        break;
      case 3:
        history.replaceState('','','/blogs');
        break;
      case 4:
        history.replaceState('','','/contact');
        break;
      default:
        break;
    }
  },
  scrollEvent(direction){
    if(direction && this.state.position < 4){
      this.state.position++;
      this.state.location++;
    } else {
      if(this.state.position > 0) {
        this.state.position--;
        this.state.location--;
      }
    }
    document.getElementsByClassName('content-wrapper')[0].style.transition = "all 0.5s cubic-bezier(.69,.06,.34,.99) 0s";
    this.state.translate = 'translateY(' + (this.state.position * -100) + 'vh)';
    this.setIsColor();
    setTimeout(function(){
      document.getElementsByClassName('content-wrapper')[0].style.transition = "";
    },500);
  },
  scrollMain(e){
    e.preventDefault();
    this.state.clock = e.timeStamp - this.state.save;
    this.state.save = e.timeStamp;
    if(this.state.clock > 50){
      console.log("time stamp: " + e.timeStamp);
      console.log("clock: " + this.state.clock);
      console.log("save: " + this.state.save);
      console.log("isFired: " + this.state.isFired);
    }
    this.state.delta = e.deltaY ? -(e.deltaY) : 0;
    if (!this.state.delta) {
      return;
    }
    if(!this.state.isFired && this.state.clock > 50){
      this.state.isFired = true;
      if(this.state.delta < 0){
        this.scrollEvent(true);
      } else {
        this.scrollEvent(false);
      }
      setTimeout( () => {
        this.state.isFired = false;
      }, 800);
    } else {
      return;
    }
    // this.state.uintDelta = Math.abs(this.state.delta);
    // console.log(this.state.timeStamp);
    // if (this.state.uintDelta - this.state.cDelta > 0) {
    //   this.state.timeStamp = e.timeStamp;
    //   console.log(this.state.timeStamp - this.state.cTime)
    //   if (!this.state.isFired && this.state.timeStamp - this.state.cTime > this.state.sleep) {
    //     this.state.isFired = true;
    //     if(this.state.delta < 0){
    //       this.scrollEvent(true);
    //     } else {
    //       this.scrollEvent(false);
    //     }
    //   }
    //   this.state.cTime = this.state.timeStamp;
    // } else {
    //   setTimeout(() => {
    //     this.state.isFired = false;
    //   }, 1000);
    // }
    // this.state.cDelta = this.state.uintDelta;
  }
}

export default store;