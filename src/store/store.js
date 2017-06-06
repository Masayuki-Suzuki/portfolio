var store = {
  state: {
    //Class Toggle
    isColorClass: true,
    isHidden: false,
    isFired: false,
    isRight: false,
    //Transition Style
    translate: 'translateY(0vh)',
    //Location Control
    position: 0,
    location: 1,
    //For Scroll Controller
    sleep: 800,
    save: 0,
    clock: 0,
    isScroll: null,
    //Animation Toggle
    rtl: false,
    ltr: false
  },
  setIsColor(){
    if(this.state.location > 1){
      this.state.isColorClass = false;
    } else {
      this.state.isColorClass = true;
    }
  },
  ScrollAction(){
    const tag = document.getElementsByClassName('content-wrapper')[0];
    tag.style.transition = "all 0.5s cubic-bezier(.69,.06,.34,.99) 0s";
    this.state.translate = 'translateY(' + (this.state.position * -100) + '%)';
    setTimeout(() => {
      tag.style.transition = "";
    },500);
  },
  scrollEvent(direction, e){
    switch (this.state.position){
      case 0:
        if(direction){
          this.state.position++;
          this.state.location++;
          this.ScrollAction();
          this.setIsColor();
          history.replaceState('','','/about');
        }
        break;
      case 1:
        if(direction){
          history.replaceState('','','/works');
          this.state.isHidden = true;
          this.state.rtl = true;
          setTimeout( () => {
            this.state.position++;
            this.state.location++;
            this.state.isRight = true;
          },310);
          setTimeout( () => {
            this.state.isHidden = false;
            this.state.rtl = false;
          },500);
          setTimeout( () => {
            this.state.isHidden = false;
          },900);
        } else {
          history.replaceState('','','/');
          this.state.position--;
          this.state.location--;
          this.ScrollAction();
          this.setIsColor();
        }
        break;
      case 2:
        if(direction){
          history.replaceState('','','/blogs');
          this.state.isHidden = true;
          this.state.ltr = true;
          setTimeout( () => {
            this.state.position++;
            this.state.location++;
            this.state.isRight = false;
          },310);
          setTimeout( () => {
            this.state.ltr = false;
          },500);
          setTimeout( () => {
            this.state.isHidden = false;
          },800);
        } else {
          history.replaceState('','','/about');
          this.state.isHidden = true;
          this.state.ltr = true;
          setTimeout( () => {
            this.state.position--;
            this.state.location--;
            this.state.isRight = false;
          },310);
          setTimeout( () => {
            this.state.ltr = false;
          },500);
          setTimeout( () => {
            this.state.isHidden = false;
          },800);
        }
        break;
      case 3:
        if(direction){
          history.replaceState('','','/contact');
          this.state.isHidden = true;
          this.state.rtl = true;
          setTimeout( () => {
            this.state.position++;
            this.state.location++;
            this.state.isRight = true;
          },310);
          setTimeout( () => {
            this.state.isHidden = false;
            this.state.rtl = false;
          },500);
          setTimeout( () => {
            this.state.isHidden = false;
          },900);
        } else {
          history.replaceState('','','/works');
          this.state.isHidden = true;
          this.state.rtl = true;
          setTimeout( () => {
            this.state.position--;
            this.state.location--;
            this.state.isRight = true;
          },310);
          setTimeout( () => {
            this.state.isHidden = false;
            this.state.rtl = false;
          },500);
          setTimeout( () => {
            this.state.isHidden = false;
          },900);
        }
        break;
      case 4:
        if(!direction){
          history.replaceState('','','/blogs');
          this.state.isHidden = true;
          this.state.ltr = true;
          setTimeout( () => {
            this.state.position--;
            this.state.location--;
            this.state.isRight = false;
          },310);
          setTimeout( () => {
            this.state.ltr = false;
          },500);
          setTimeout( () => {
            this.state.isHidden = false;
          },800);
        }
        break;
      default:
        break;
    }
  },
  scrollMain(e){
    e.preventDefault();
    this.state.clock = e.timeStamp - this.state.save;
    this.state.save = e.timeStamp;
    // if(this.state.clock > 50){
    //   console.log("time stamp: " + e.timeStamp);
    //   console.log("clock: " + this.state.clock);
    //   console.log("save: " + this.state.save);
    //   console.log("isFired: " + this.state.isFired);
    //   console.log("isScroll: " + this.state.isScroll);
    // }
    this.state.delta = e.deltaY ? -(e.deltaY) : 0;
    if (!this.state.delta) {
      return;
    }
    if(!this.state.isFired && this.state.clock > 100){
      this.state.isFired = true;
      if(this.state.delta < 0){
        this.scrollEvent(true, e);
      } else {
        this.scrollEvent(false, e);
      }
      this.state.isScroll = setTimeout( () => {
        this.state.isFired = false;
      }, this.state.sleep);
    } else {
      return;
    }
  }
}

export default store;