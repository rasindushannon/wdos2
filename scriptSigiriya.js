function openNav() {
  document.querySelector(".mobile-menu-container").style.transition =
    "2s ease-out";
  document.querySelector(".mobile-menu-container").style.top = "0%";
}

function closeNav() {
  document.querySelector(".mobile-menu-container").style.top = "-150%";
}

i = 0;

x = [
  "The word Sigiriya or the Sinhagiri means the Lion’s Rock where you have to climb up 1200 steps before you reach the Lion Rock Fortress on top of Sigiriya. There are several platforms that break up the steps and allow for a little break if you need it. Today Sigiriya rock fortress is one of the most famous Archeological Treasure and UNESCO named Sigiriya rock as a World Heritage in 1982 under the name “Ancient City of Sigiriya Sri Lanka”. ",
  "This fortified garden city of Sigiriya rock fortress is an exceptional master piece of ancient urban planning / landscape & architecture / construction technology /exceptional hydraulic engineering & management / ancient fine art with unique harmony between nature and human imagination and all these living examples proved that it was a Well Planned City & Palace in 5th Century AD. Sigiriya rock fortress is recognized as one of the best preserved surviving ancient urban sites in Asia from the 1st millennium or simply it’s a Living Museum. Sigiriya World Heritage Site is versatile and many-faceted appeal, and it is one of Sri Lanka’s ancient political capitals and Sri Lanka’s most sensational heritage site.",
  "Historical research carried out at the site has brought to light evidence to show that the origins of Sigiriya date back to pre-historic times. Situated at the base of the Sigiriya rock of its eastern side, is a monadnock named Aligala (Elephant Rock). In a cave underneath this, excavation have revealed remains of pre-historic human settlements that existed here around 5,500 years B.P. In addition, there is evidence of human habitation in this area, as far back in history as the 9th — 10th centuries B.C. ",
];
y = [
  "In the 3rd century B.C. a Buddhist monastery had been established at Sigiriya rock fortress. Thirty cave-shelters with drip-ledges, which accommodate monks, have been identified at the base of the great rock so far. In eight of them, details of donations of cave shelters have been inscribed in Brahmi script.",
  "Subsequently however, in the 6th and 7th centuries A.D., Sigiriya ceased to be of political importance and once again became the abode of Buddhist monks. During this period, the cave-shelters with drip-ledges which belonged to the earlier monastic phase were further improved. Additional shrines such as stupa, image house and bodhi tree shrine were constructed. This second phase of the monastic development continued up to the 12th - 13th centuries A.D.",
  "In the centuries that followed, Sigiriya was totally abandoned, until the 19th century, when it was used as n military out-post of the kings of Kandy. Later, it was a British military. officer, Jonathan Forbes in 1832, who once again brought Sigiriya out of its obscurity, back into historical focus. In 1894, under H.C.P. Bell the Archaeological Department commenced archaeological activities in Sigiriya. Nearly a century later, in 1982, the Central Cultural Fund took over the task, which it continues with great success, to date.",
];
z = [
  "The Lion rock Sigiriya has two fortified precincts where the western precinct encompasses 90 hectares, and the eastern precinct covers 40 hectares. The western area was the royal park area, a symmetrically-designed pleasure garden with elaborate water-retaining structures, as well as surface and subsurface hydraulic systems. It is surrounded by three ramparts and two moats, forming a rectangular area whose inner precincts measure about 700 meters from east to west and 500 meters from north to south.",
  "On the other side of the Lion rock Sigiriya, the eastern area appears to have been a ceremonial precinct with a large central pavilion as its only permanent structure. Kasyapa and his royal family lived their lives within these walls. Moving inward from the two precincts in an ever-ascending fashion are a series of boulder gardens and then terraced gardens, leading to the entrance to the Sigiriya rock. Access to the rock is gained via a long passageway that begins on the west side of the terrace gardens, and winds northward along the Mirror Wall to the Lion Platform.",
  "Among the significant features of Sigiriya, the Water Gardens are especially noteworthy. Though outwardly the Water gardens appear to be one garden system in Concept, four distinct parts are clearly discernible in its creation, and at present they are called the Water   Garden Nos. 1, 2 and 3 and the Miniature Water Garden.",
];

function switchtext() {
  i++;
  if (i > 2) {
    i = 0;
  }
}

setInterval(() => {
  document.querySelector(".flash-card-text").style.opacity = 0;
  document.querySelector(".flash-card-text-1").style.opacity = 0;
  document.querySelector(".flash-card-text-2").style.opacity = 0;
  switchtext();
  setTimeout(() => {
    document.querySelector(".flash-card-text").innerHTML = x[i];
    document.querySelector(".flash-card-text").style.opacity = 1;

    document.querySelector(".flash-card-text-1").innerHTML = y[i];
    document.querySelector(".flash-card-text-1").style.opacity = 1;

    document.querySelector(".flash-card-text-2").innerHTML = z[i];
    document.querySelector(".flash-card-text-2").style.opacity = 1;
  }, 1200);
}, 5000);
