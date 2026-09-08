let riddles={
    GTFO : {
        0 :["schaeffurs","schaeffur.webp","plural"],
        1 :["bataldo3rb","200px-Bataldo_Revolver.webp","the real name"],
        2 :["188","thelogs.webp","the amount"],
        3 :["gtfo","gettingout.jpg","he was like 'get the fuck out of here' "],
        4 :["r3b2","gugugaga.webp","first appearance"],
        5 :["dauda","Daudanew.webp","nigerian prince of gtfo"],
        6 :["poop","bucket.webp","whats inside the bucket"],
        7 :["admin_temp_override","command.png","answer you seek lies in the many terminals which aid your survival"],
        8 :["r8e2","r8e2.png","binary->hexadecimal->binary"],
        9 :["birther","MotherFace.webp","common alias for this enemy"],
    },

      biggie : {
        0 :["fatchud","fatch.png","common stereotypes combined into one word"],
        1 :["zuckerberg","mark.webp","mark"],
        2 :["real","realfact.png","real or fake"],
        3 :["blackchair","black chair.jpg","the chair of the black variety"],
        4 :["Duck","nokia.jpg","rare being"],
        5 :["35","goldegg.png","how many buffs will be accumulated "],
        6 :["happywheel","wheel.png","not plural"],
        7 :["steveharvey","steven.webp","take a closer look"],
        8 :["andiamevil","evil.png","finish the quote"],
        9 :["littlechineseboy","chinaboy.jpg","little-sized asian males"],
    },

    zombies : {
        0 :["wens","mahjongtiles.png","指南针将揭示真相。鹅先出发。"],
        1 :["lormaruja","voidbow1.png","ignore the results section. only the first letters matter"],
        2 :["nut","nut.png","3 letter word"],
        3 :["gugugaga","morse.png","get morse coding or think like a baby"],
        4 :["uranus","uranuium.jpg","in the solar system"],
        5 :["3","solution.png","filled are positive, blank are negative"],
        6 :["16","math.png","30 degree rule "],
        7 :["openteetheclipse","wordgrid.png","just match"],
        8 :["ballsitch","jojo2.jpg","pizza cipher"],
        9 :["136357246","purplestaff.png","row1+row2+row3"],

    }
};

const categories = Object.values(riddles);


const date = new Date();

const dateNumber =
    date.getFullYear() * 10000 +
    (date.getMonth() + 1) * 100 +
    date.getDate();


const categoryIndex = dateNumber % categories.length;
const category = categories[categoryIndex];

const availableRiddles = Object.values(category).filter(riddle => riddle[0] !== "");

const riddleIndex = dateNumber % availableRiddles.length;
const today = availableRiddles[riddleIndex];

document.querySelector(".imagehint").src = today[1];
document.querySelector(".riddlehint").textContent = today[2];