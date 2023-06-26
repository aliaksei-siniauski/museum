// Places images

import royalPlace from "../images/mobile/virtual-tour/tour-1.jpg";
import denonWing from "../images/mobile/virtual-tour/tour-2.jpg";
import сolonnadePerrault from "../images/mobile/virtual-tour/tour-3.jpg";
import greekHall from "../images/mobile/virtual-tour/tour-4.jpg";
import monaLisa from "../images/mobile/virtual-tour/tour-5.jpg";
import nightPlace from "../images/mobile/virtual-tour/tour-6.jpg";

// Tour 1

const royalPlaceImg = new Image();
royalPlaceImg.src = royalPlace;
const royalPlaceItem = document.querySelector(".place-item--first");
royalPlaceItem.insertBefore(royalPlaceImg, royalPlaceItem.children[0]);

//  Tour 2
const denonWingImg = new Image();
denonWingImg.src = denonWing;
const denonWingItem = document.querySelector(".place-item--second");
denonWingItem.insertBefore(denonWingImg, denonWingItem.children[0]);

// Tour 3

const сolonnadePerraultImg = new Image();
сolonnadePerraultImg.src = сolonnadePerrault;
const сolonnadePerraultItem = document.querySelector(".place-item--third");
сolonnadePerraultItem.insertBefore(
  сolonnadePerraultImg,
  сolonnadePerraultItem.children[0]
);

// Tour 4

const greekHallImg = new Image();
greekHallImg.src = greekHall;
const greekHallItem = document.querySelector(".place-item--forth");
greekHallItem.insertBefore(greekHallImg, greekHallItem.children[0]);

// Tour 5

const monaLisaImg = new Image();
monaLisaImg.src = monaLisa;
const monaLisaItem = document.querySelector(".place-item--fives");
monaLisaItem.insertBefore(monaLisaImg, monaLisaItem.children[0]);

// Tour 6

const nightPlaceImg = new Image();
nightPlaceImg.src = nightPlace;
const nightPlaceItem = document.querySelector(".place-item--six");
nightPlaceItem.insertBefore(nightPlaceImg, nightPlaceItem.children[0]);
