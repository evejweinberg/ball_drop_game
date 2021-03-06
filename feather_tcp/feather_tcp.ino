/*
 *  Simple HTTP get webclient test
 */

#include <ESP8266WiFi.h>

const char* ssid     = "itpsandbox";
const char* password = "NYU+s0a!+P?";
int buttonState = 0; 
int buttonState2 = 0; 
const int buttonPin = 14;
const int buttonPin2 = 12;



const char* host = "172.22.151.124";
//long sendInterval = 20;

long lastTimeSent = 0; 

void setup() {
  Serial.begin(115200);
  delay(500);

   pinMode(buttonPin, OUTPUT);
// pinMode(15, OUTPUT);

  // We start by connecting to a WiFi network 
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");  
  Serial.println("IP address: ");
//  Serial.println(WiFi.localIP());
}

int value = 0;

int pot = analogRead(A0);



boolean clientStared = false;

WiFiClient client;

void loop() {
  char message = 0;
  delay(1000);
  long now = millis();



  


  //how many times have I tried to connect?
  ++value;

  Serial.print("Connecting to ");
  Serial.println(ssid);
  Serial.print("connecting to ");
  Serial.println(host);
  
  // Use WiFiClient class to create TCP connections

  if( clientStared == false ){
    
    const int httpPort = 8080;

    Serial.print("I have not opening port, this is my ");
//    Serial.print(value);
    Serial.println(" try");
    
    
    if (!client.connect(host, httpPort)) {
      Serial.println("connection failed");
      return;
    }

    clientStared = true;   

    delay(500);
    
    //print a name
    client.print("n=E + M\n");
    client.print("i");

  }
  else{
     Serial.println("I started the port");
     // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);
    buttonState2 = digitalRead(buttonPin2);

  // check if the pushbutton is pressed.
  // if it is, the buttonState is HIGH:

    if (buttonState2 == HIGH) {
  
        client.print("\r\n");
      Serial.println("right");
     
  }
  if (buttonState == HIGH) {

        client.print("\l");
    Serial.println("left");
    
  }
   


  }

  

  
  // Read all the lines of the reply from server and print them to Serial
  while(client.available()){
    String line = client.readStringUntil('\r');
//    Serial.print(line);
  }

}
