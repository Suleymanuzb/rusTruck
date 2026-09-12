import remontImg1 from "../assets/images/remont/remon1.jpg";
import remontImg2 from "../assets/images/remont/remont2.jpg";

import before1 from "../assets/images/remont/beforeAfter/before1.jpg";
import after1 from "../assets/images/remont/beforeAfter/after1.jpg";
import before2 from "../assets/images/remont/beforeAfter/before2.jpg";
import after2 from "../assets/images/remont/beforeAfter/after2.jpg";

import repairShop from "../assets/images/remont/fullImg/proizvodstvo_3.jpg";

import repairShopInterior1 from "../assets/images/remont/interior/proizvodstvo_1.png";
import repairShopInterior2 from "../assets/images/remont/interior/proizvodstvo_2.png";
import repairShopInterior3 from "../assets/images/remont/interior/proizvodstvo_4.jpg";

export const remontImg = {
    part1: [
        {
            img: remontImg1,

            alt: "afterContainerRepair",
        },
        {
            img: remontImg2,
            alt: "beforeContainerRepair",
        },
    ],

    beforeAfter: [
        {
            before: before1,
            after: after1,
            alt: "Trailer repair set 1",
        },
        {
            before: before2,
            after: after2,
            alt: "Trailer repair set 2",
        },
    ],
    repairShop: {
        img: repairShop,
        alt: "full image of repair shop",
    },

    repairShopInterior: [
        {
            img: repairShopInterior1,
            alt: "image of repair shop interior where trucks are repaired",
        },
        {
            img: repairShopInterior2,
            alt: "image of repair shop interior where trucks are repaired",
        },
        {
            img: repairShopInterior3,
            alt: "image of repair shop interior where trucks are repaired",
        },
    ],
};
