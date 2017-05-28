let store = {
  state:{
    isColorClass: true,
    isFired: false,
    delta: 0,
    uintDelta: 0,
    timeStamp: 0,
    sleep: 300,
    cTime: Date.now(),
    cDelta: 0,
    position: 0,
    translate: 'translateY(0vh)',
    location: 1
  },
  setIsColor(){
    if(this.state.location > 1){
      this.state.isColorClass = false;
    } else {
      this.state.isColorClass = true;
    }
  },
  URLController(){
    switch (this.state.position){
      case 0:
        history.replaceState('','','/');
        break;
      case 1:
        history.replaceState('','','/about');
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
    document.getElementsByClassName('content-wrapper')[0].style.transition = "all 0.5s ease-in-out 0s";
    this.state.translate = 'translateY(' + (this.state.position * -100) + 'vh)';
    this.setIsColor();
    this.URLController();
    setTimeout(() => {
      document.getElementsByClassName('content-wrapper')[0].style.transition = "";
    },500);
  },
  scrollMain(e){
    e.preventDefault();
    this.state.delta = e.deltaY ? -(e.deltaY) : 0;
    if (!this.state.delta) {
      return;
    }
    this.state.uintDelta = Math.abs(this.state.delta);
    if (this.state.uintDelta - this.state.cDelta > 0) {
      this.state.timeStamp = e.timeStamp;
      if (!this.state.isFired && this.state.timeStamp - this.state.cTime > this.state.sleep) {
        if(this.state.delta < 0){
          this.scrollEvent(true);
        } else {
          this.scrollEvent(false);
        }
        this.state.isFired = true;
      }
      this.state.cTime = this.state.timeStamp;
    } else {
      this.state.isFired = false;
    }
    this.state.cDelta = this.state.uintDelta;
  }
}

export default store;