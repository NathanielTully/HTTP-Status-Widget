class TrafficLight {
  constructor( colour ) {

    this.baseClass = 'light';
    this.colorClass = this.baseClass + '-' +colour;
    this.onClass = this.baseClass + '-on';
    this.offClass = this.baseClass + '-off';
    this.blinkClass = this.baseClass + '-blink';

    this.element = document.createElement( 'div' )

    $( this.element ).addClass( this.baseClass )
                     .addClass( this.colorClass )
                     .addClass( this.offClass );

    return this.element;

  }

  turnOn() {

    $( this.element ).removeClass( this.offClass )
                     .removeClass( this.blinkClass )
                     .addClass( this.onClass );

  }

  turnOff() {
    $( this.element ).removeClass( this.onClass )
                     .removeClass( this.blinkClass )
                     .addClass( this.offClass );
  }

  blink() {

    $( this.element ).removeClass( this.offClass )
                     .removeClass( this.onClass )
                     .addClass( this.blinkClass );

  }

}



class TrafficLightWidget {

    constructor( containerElementID ) {

      this.container = $( '#'+containerElementID );

      $( this.container ).addClass( 'light-container' );

      this.redLight = new TrafficLight( 'red' );
      this.greenLight = new TrafficLight( 'green' );

      $( this.container ).append( this.redLight );
      $( this.container ).append( this.greenLight );

    }

}
