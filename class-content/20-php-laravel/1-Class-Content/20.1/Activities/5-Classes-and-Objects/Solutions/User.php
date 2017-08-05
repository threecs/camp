<?php

class User {
  
  public $firstName;

  private $lastName;

  private $emailAddress;

  // Why does $last have to come . . . Well, last?
  public function __construct ($email, $first, $last = "") {
    $this->firstName = $first;
    $this->lastName = $last;
    $this->emailAddress = $email;
  }

  public function fullName() {
    return $this->firstName . " " . $this->lastName;
  } 

  public function setImageUrl($url) {
    $this->imageUrl = $url;
  }

}

$user = new User('email@email.com', 'Bob', 'the Builder');
$user->setImageUrl('http://imagehere.com/image.png');
var_export($user);
