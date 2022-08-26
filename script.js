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
  "Polonnaruwa Kingdom or the Ancient city of Polonnaruwa was the second capital of Sri Lanka for three centuries between the 11th to 13th century after the destruction of Anuradhapura Kingdom in 993. It is located in north central province of Sri Lanka. Due to its archeological prominence and the ancient technological superiority UNESCO declared Polonnaruwa as a World Heritage in 1982 under the name of Ancient City of Polonnaruwa.",
  "Polonnaruwa was the first declared capital city by King Vijayabahu, who defeated Chola invaders in 1070 to reunite the nation once more under a local leader. During the time of the great King Parakramabahu who led the country between the times of 1153 – 1186 sustained such heroic scales in rice cultivation by constructing the massive irrigation network with reservoirs that look like natural in land seas.",
  "The time of King Parakramabahu was considered as the Golden Age of Polonnaruwa. Trade and agriculture flourished under the patronage of the king, who was so adamant that no drop of water falling from the heavens was to be wasted and each was to be used toward the development of the land.",
];

y = [
  "'I couldn't help but compare the style and layout here to sites like Angkor. Interestingly, there are some links between the sites, in terms of architecture an diplomacy.'",
  "'However, while the Cambodian temples are enormous and often defined by their height and land area, the structures of Polonnaruwa show their significance in their artistic details. The way they fit together into an urban design and the relationship to nature are also part of the wonder.'",
  "'Like any city, there are different ways to get around Polonnaruwa to see the different temples and buildings. Bicycle is popular, tuk tuk or bus tour another, and it would even be possible to walk if you're feeling fit.'",
];

z = [
  "'As mentioned before, Polonnaruwa is a top whs in Sri Lanka. I visited the city on a 3 day tour to the cultural triangle that also included Dambulla, Sigiriya and Anuradhapura. A round ticket is a must, as it covers all sites (except Dambulla) for 50 USD. Single entry would be 25 USD for each site (foreigners pay about 20 times more than locals for most sites in Sri Lanka). Don't miss the quadrangle with its beautiful buildings. The site is extensive and there is a lot to see. You need private transport to cover the whole site in one day.'",
  "'Polonnaruwa, the second capital city of Sinhalese for three centuries, is one of the most interesting places in Sri Lanka with many well preserved ruins of palace and monasteries which easily can make every tourist to impress. After Anuradhapura was attacked by many invasions from India, Sinhalese decided to move their capital to this area for good reason. Although Polonnaruwa does not has long history as Anuradhapura has, but in this short period the zenith of Sinhalese art glory has reached.'",
  "'Polonnaruwa historical core area is divided into three complexes; royal palace, Quadrangle, and crematory collage. Each complex has its own uniqueness and deserves time to visit. The royal palace complex has big ruins of seven stories palace and audience hall with lion throne. The Quadrangle is believed to be the royal chapel with many fascinating buildings; the main attractions are the sophisticated round shape Vatadage and Polonnaruwa's temple of the Tooth, Hatadage; however do not forget to admire the small but beautiful Latha Mandapaya, its pillars is the real gems and one of my favorite.'",
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
