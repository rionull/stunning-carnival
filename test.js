<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.22/vue.min.js"></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

html,
body {
margin: 0;
font-family: Source Sans Pro, sans-serif;
}

.title-container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.title {
font-family: Source Sans Pro, sans-serif;
font-size: 30pt;
font-weight: bold;
}

.project-title {
font-size: 10pt;
padding: 10px;
margin-top: 50px;
}

a:link {
color: black;
text-decoration: none;
}

a:visited {
color: grey;
text-decoration: none;
}

a:hover {
color: #f5365c;
text-decoration: none;
}

a:active {
text-decoration: none;
}

.filter {
font-family: Source Sans Pro, sans-serif;
padding: 6px 6px;
margin: 5px;
cursor: pointer;
border-radius: 3px;
transition: all 0.35s;
border: none;
}

.filter:focus {
box-shadow: 0px 1px 1px 0px #00000026;
outline: none;
background: #f5365c;
}

.filter.focus-visible {
box-shadow: 0 0 0 2px green;
}

.filter:hover {
background: #f5365c;
}

.projects {
margin-bottom: 50px;
margin-top: 25px;
display: flex;
flex-wrap: wrap;
justify-content: center;
}

.projects-enter {
transform: scale(0.5) translatey(-80px);
opacity: 0;
}

.projects-leave-to {
transform: translatey(30px);
opacity: 0;
}

.projects-leave-active {
position: absolute;
z-index: -1;
}

.project {
transition: all 0.35s ease-in-out;
margin: 10px;
box-shadow: 0px 2px 8px lightgrey;
border-radius: 5px;
width: 190px;
height: 250px;
display: flex;
flex-direction: column;
align-items: center;
text-align: left !important;
}

.project-image-wrapper {
position: relative;
}

.gradient-overlay {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 180px;
opacity: 0.01;
background: linear-gradient(
to bottom,
rgba(0, 210, 247, 0.65) 0%,
rgba(0, 210, 247, 0.64) 1%,
rgba(0, 0, 0, 0) 100%
),
linear-gradient(
to top,
rgba(247, 0, 156, 0.65) 0%,
rgba(247, 0, 156, 0.64) 1%,
rgba(0, 0, 0, 0) 100%
);
border-bottom-left-radius: 0px;
border-bottom-right-radius: 0px;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
}

.project-image {
width: 100%;
height: 180px;
padding-bottom: 5px;
border-bottom-left-radius: ;
border-bottom-right-radius: ;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
}

.search-wrapper {
margin-top: 20px;
position: relative;
}

input {
outline: none;
border-radius: 3px;
font-family: Source Sans Pro, sans-serif;
padding: 4px 12px;
color: rgba(0, 0, 0, 0.7);
border: 1px solid rgba(0, 0, 0, 0.12);
transition: 0.15s all ease-in-out;
background: white;
width: 200px;
}

input:focus {
outline: none;
transform: scale(1.05);
}

input::-webkit-input-placeholder {
font-size: 12px;
color: rgba(0, 0, 0, 0.5);
font-weight: 100;
font-family: Source Sans Pro, sans-serif;
}

input.focus-visible {
box-shadow: 0 0 0 2px green;
}

</style>

<div id="app">
<div class="title-container">
<!--<div>
<h3 class="title">
Artist Listing
</h3>
</div>-->
<div class="filters">
<button class="filter" v-on:click="setFilter('ALL')">ALL</button>
<button class="filter" v-on:click="setFilter('GI')">GENSHIN IMPACT</button>
<button class="filter" v-on:click="setFilter('HSR')">HONKAI STAR RAIL</button>
<button class="filter" v-on:click="setFilter('OG')">ORIGINAL WORKS</button>
<button class="filter" v-on:click="setFilter('ORV')">ORV</button>
<button class="filter" v-on:click="setFilter('HOLOLIVE')">HOLOLIVE</button>
<button class="filter" v-on:click="setFilter('JJK')">JUJUTSU KAISEN</button>
<button class="filter" v-on:click="setFilter('2J3J')">NIJISANJI</button>
<button class="filter" v-on:click="setFilter('CSM')">CHAINSAW MAN</button>
<button class="filter" v-on:click="setFilter('VOCALOID')">VOCALOID</button>
<button class="filter" v-on:click="setFilter('ARKNIGHTS')">ARKNIGHTS</button>
<button class="filter" v-on:click="setFilter('VTUBERS')">VTUBERS</button>
<button class="filter" v-on:click="setFilter('VALORANT')">VALORANT</button>
<button class="filter" v-on:click="setFilter('FFXIV')">FFXIV</button>
<button class="filter" v-on:click="setFilter('SNF')">FRIEREN</button>
<button class="filter" v-on:click="setFilter('PKMN')">POKEMON</button>
<button class="filter" v-on:click="setFilter('SPLATOON')">SPLATOON</button>
<button class="filter" v-on:click="setFilter('NIKKE')">NIKKE</button>
<button class="filter" v-on:click="setFilter('PLAVE')">PLAVE</button>
<button class="filter" v-on:click="setFilter('BLOCK')">BLUE LOCK</button>
<button class="filter" v-on:click="setFilter('TRIGUN')">TRIGUN</button>
<button class="filter" v-on:click="setFilter('KNY')">DEMON SLAYER</button>
<button class="filter" v-on:click="setFilter('BA')">BLUE ARCHIVE</button>
<button class="filter" v-on:click="setFilter('LOZ')">THE LEGEND OF ZELDA</button>
<button class="filter" v-on:click="setFilter('HAIKYU')">HAIKYU!!</button>
<button class="filter" v-on:click="setFilter('R1999')">REVERSE: 1999</button>
<button class="filter" v-on:click="setFilter('OP')">ONE PIECE</button>
<button class="filter" v-on:click="setFilter('BG3')">BALDUR'S GATE 3</button>
<button class="filter" v-on:click="setFilter('GHIBLI')">STUDIO GHIBLI</button>
<button class="filter" v-on:click="setFilter('ONK')">OSHI NO KO</button>
<button class="filter" v-on:click="setFilter('BSD')">BUNGOU STRAY DOGS</button>
<button class="filter" v-on:click="setFilter('BTRK')">BOCCHI</button>
<button class="filter" v-on:click="setFilter('HI3')">HONKAI IMPACT THIRD</button>
<button class="filter" v-on:click="setFilter('HEARTSTEEL')">HEARTSTEEL</button>
<button class="filter" v-on:click="setFilter('PTN')">PATH TO NOWHERE</button>
<button class="filter" v-on:click="setFilter('LINKCLICK')">LINK CLICK</button>
<button class="filter" v-on:click="setFilter('SLAM DUNK')">SLAM DUNK</button>
<button class="filter" v-on:click="setFilter('CASTLEVANIA')">CASTLEVANIA</button>
<button class="filter" v-on:click="setFilter('TWST')">TWISTED WONDERLAND</button>
<button class="filter" v-on:click="setFilter('IDV')">IDENTITY V</button>
<button class="filter" v-on:click="setFilter('SPIDERMAN')">SPIDERMAN</button>
<button class="filter" v-on:click="setFilter('AOT')">ATTACK ON TITAN</button>
<button class="filter" v-on:click="setFilter('NARUTO')">NARUTO</button>
<button class="filter" v-on:click="setFilter('JJBA')">JOJO'S BIZARRE ADVENTURES</button>
<button class="filter" v-on:click="setFilter('GRAVITYFALLS')">GRAVITY FALLS</button>
<button class="filter" v-on:click="setFilter('ADVTIME')">ADVENTURE TIME</button>
<button class="filter" v-on:click="setFilter('OWHOUSE')">THE OWL HOUSE</button>
<button class="filter" v-on:click="setFilter('HXH')">HUNTER X HUNTER</button>
<button class="filter" v-on:click="setFilter('SHXTOU')">SHXTOU</button>
<button class="filter" v-on:click="setFilter('PARADOX LIVE')">PARADOX LIVE</button>
<button class="filter" v-on:click="setFilter('TOT')">TEARS OF THEMIS</button>
<button class="filter" v-on:click="setFilter('OMORI')">OMORI</button>
<button class="filter" v-on:click="setFilter('LCF')">LCF</button>
<button class="filter" v-on:click="setFilter('FURUBA')">FRUITS BASKET</button>
<button class="filter" v-on:click="setFilter('MADOKA')">MADOKA MAGICA</button>
<button class="filter" v-on:click="setFilter('AVATAR')">AVATAR</button>
<button class="filter" v-on:click="setFilter('TADC')">THE AMAZING DIGITAL CIRCUS</button>
<button class="filter" v-on:click="setFilter('S2M')">SASAKI TO MIYANO</button>
<button class="filter" v-on:click="setFilter('MNBIG')">MY NEW BOSS IS GOOFY</button>
<button class="filter" v-on:click="setFilter('KAGEROU')">KAGEROU PROJECT</button>
<button class="filter" v-on:click="setFilter('AC')">ANIMAL CROSSING</button>
<button class="filter" v-on:click="setFilter('RPG')">RPG MAKER GAMES</button>
<button class="filter" v-on:click="setFilter('DCCOMICS')">DC COMICS</button>
<button class="filter" v-on:click="setFilter('RE')">RESIDENT EVIL</button>
<button class="filter" v-on:click="setFilter('LOU')">THE LAST OF US</button>
<button class="filter" v-on:click="setFilter('APEX')">APEX LEGENDS</button>
<button class="filter" v-on:click="setFilter('DGRP')">DANGAN RONPA</button>
<button class="filter" v-on:click="setFilter('AZUR')">AZUR LANE</button>
<button class="filter" v-on:click="setFilter('WHA')">WITCH HAT ATELIER</button>
<button class="filter" v-on:click="setFilter('AA')">ACE ATTORNEY</button>
<button class="filter" v-on:click="setFilter('LOL')">LEAGUE OF LEGENDS</button>
<button class="filter" v-on:click="setFilter('MOUNTHUASECT')">RETURN OF MOUNT HUA SECT</button>
<button class="filter" v-on:click="setFilter('PHINEAS')">PHINEAS AND FERB</button>
<button class="filter" v-on:click="setFilter('DRSTONE')">DR. STONE</button>
<button class="filter" v-on:click="setFilter('HOB')">HEAVEN OFFICIAL'S BLESSING</button>
<button class="filter" v-on:click="setFilter('VNC')">VANITAS NO CARTE</button>
<button class="filter" v-on:click="setFilter('NUCAR')">NU CARNIVAL</button>
<button class="filter" v-on:click="setFilter('SPYX')">SPY X FAMILY</button>
<button class="filter" v-on:click="setFilter('FATE')">FATE SERIES</button>
<button class="filter" v-on:click="setFilter('ENSTARS')">ENSEMBLE STARS</button>
<button class="filter" v-on:click="setFilter('IDOLISH7')">IDOLISH 7</button>
<button class="filter" v-on:click="setFilter('BANGDREAM')">BANG DREAM!</button>
<button class="filter" v-on:click="setFilter('P5')">PERSONA 5</button>
<button class="filter" v-on:click="setFilter('MHA')">MY HERO ACADEMIA</button>
<button class="filter" v-on:click="setFilter('BCLOVER')">BLACK CLOVER</button>
<button class="filter" v-on:click="setFilter('OURAN')">OURAN HIGH SCHOOL</button>
</div>
<div class="search-wrapper">
<input type="text" v-model="search" placeholder="🔍 Search" />
</div>

<transition-group class="projects" name="projects">
<div class="project" v-for="project in filteredAndSearched" v-bind:key="project.title">
<a v-bind:href="project.url" target="_blank" rel="noopener">
<div class="project-image-wrapper">
<img class="project-image" v-bind:src="project.image">
<div class="gradient-overlay"></div>
<span class="project-title">{{project.title}}</span>
</div>
</a>
</div>
</transition-group>
</div>
</div>

<script>
new Vue({
el: "#app",
data: {
search: "",
currentFilter: "ALL",
projects: [
{
title: "(˶‾᷄ ⁻̫ ‾᷅˵)",
url: "#c0a1",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","2J3J", "OMORI", "ORV", "PLAVE", "BLOCK", "NUCAR", "BSD", "TRIGUN", "IDV", "GI", "LCF"]
},
{
title: "Allenerie",
url: "www.allenerie.com",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","GI", "HSR", "FFXIV", "OG"]
},
{
title: "Astrea",
url: "www.instagram.com/astreaa_",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","OG", "GI", "HSR"]
},
{
title: "Babuland",
url: "#c0a2",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","HSR", "GI", "ORV", "TOT"]
},
{
title: "bbluebellies",
url: "https://www.instagram.com/bbluebellies/",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","OP", "GHIBLI", "GI", "JJK", "OG", "KNY", "HXH", "VALORANT", "CSM", "HSR"]
},
{
title: "Brother Ming Games",
url: "https://www.brotherminggames.com/",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","GI", "HSR"]
},
{
title: "Chomon",
url: "https://www.instagram.com/chodan_chomon",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","OP", "GHIBLI", "KNY", "JJK", "AOT", "HXH", "AVATAR", "ORV", "HAIKYU", "MHA", "BCLOVER", "FURUBA", "OURAN", "JJBA"]
},
{
title: "Circus-Usagi",
url: "https://circus-usagi.art/",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","OG", "HEARTSTEEL", "LOZ"]
},
{
title: "clown town down town",
url: "https://clowntowndowntown.carrd.co/",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","GI", "HSR", "JJK", "TRIGUN", "PHINEAS", "GRAVITYFALLS", "ADVTIME", "OWHOUSE"]
},
{
title: "CurryNoodle Art",
url: "https://www.instagram.com/currynoodleart",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","HOLOLIVE", "HSR"]
},
{
title: "DARU",
url: "https://twitter.com/daruo_0",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","GI", "HSR", "P5", "SNF"]
},
{
title: "Daydreamer",
url: "https://www.instagram.com/mandadadadada/",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","GI", "HSR", "JJK"]
},
{
title: "Del lwl",
url: "https://www.instagram.com/mandadadadada/",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","HSR", "ARKNIGHTS", "ORV", "LINKCLICK", "GI", "SNF", "BTRK", "MOUNTHUASECT"]
},
{
title: "Feyi x Seventynone",
url: "#error",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","GI", "KNY", "BLOCK", "SHXTOU", "PARADOX LIVE", "2J3J", "TOT", "VOCALOID", "DRSTONE", "OG", "ONK", "HOB", "VNC", "BSD"]
},
{
title: "heyjonut",
url: "https://www.instagram.com/heyjonut",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","OG", "PKMN", "JJK", "GI", "HSR", "LOZ", "2J3J"]
},
{
title: "SRKORK",
url: "https://www.instagram.com/srkork/",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","JJK", "GI", "SPIDERMAN", "OG", "CSM", "RE", "LOU"]
},
{
title: "Xeph's Artworks",
url: "https://www.pixiv.net/en/users/110174",
image:
"https://drive.google.com/uc?id=1Rpo1BrF5R4eZ-gOfK1sowWUKuUIYdmCy",
category: ["ALL","BA", "SNF", "BTRK", "HSR", "GI"]
}
]
},

computed: {
filteredAndSearched: function () {
return this.projects.filter((project) => {
// optional to have console.log
console.log("this.currentFilter", this.currentFilter);
return (
project.title.toLowerCase().includes(this.search.toLowerCase()) &&
project.category.indexOf(this.currentFilter) !== -1
);
});
}
},

methods: {
setFilter: function (project) {
this.currentFilter = project;
}
}
});

</script>