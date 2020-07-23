let map, centerMarker;
const DEFAULT_ZOOM = 7;
const DEFAULT_CENTER = {
    lat: 1.2921,
    lng: 36.8219
}

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM
    });

    centerMarker = new google.maps.Marker({
        position: DEFAULT_CENTER,
        map: map
    })

    //Call the function after the map has loaded
    getDeviceLocation()

    addMarkersWithClusters()

}

/**
 * Updates the current location of the map
 * @param {google.maps.LatLng} position 
 */
function updateMapCenter(position) {
    //Log the position
    console.log(position)

    //Change the center of the map
    map.setCenter(position)

    //Update the maps center marker
    centerMarker.setPosition(position)

}

/**
 * Get the current location of the device
 */
function getDeviceLocation() {

    navigator.geolocation.getCurrentPosition(

        position => {

            let currentLocationCoords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }

            //Update the center of the map based on returned coordinates
            updateMapCenter(currentLocationCoords)

        }, error => {

            console.log(error.message)

        }, {
            maximumAge: 600000
        }
    )

}

/**
 * Add maps with clusters to a google map
 */
function addMarkersWithClusters() {

    //Setting the clusters
    let markers = properties.map((property, i) => {

        const {
            lat,
            lng
        } = property

        return new google.maps.Marker({
            position: {
                lat,
                lng
            },
            label: `${i}`,
            icon: '/img/marker.svg'
        })
    })

    //Add Marker Cluster to manage markers
    let markersCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    })
}

const properties = [{
        "id": 390,
        "category": "for sale",
        "name": "Mansions for sale in a gated community along ngong kiserian road",
        "price": 20000000,
        "period": "forever",
        "location": "Kiserian, Kenya",
        "lat": -1.4237144399978883,
        "lng": 36.69412939932208,
        "file": "/storage/uploads/files/izq7fAMWiGCOne7b7FOwK0NOgMJhTsu3obbM6dzy.jpeg"
    },
    {
        "id": 389,
        "category": "for sale",
        "name": "5 bedroom mansion for sale in Juja",
        "price": 15000000,
        "period": "forever",
        "location": "Juja, Kenya",
        "lat": -1.1022867206439106,
        "lng": 37.01721058971848,
        "file": "/storage/uploads/files/FDmhbDyHpq7PlV9HKfhc3EWq0W4Jh2SjkCX6qsxk.jpeg"
    },
    {
        "id": 388,
        "category": "for sale",
        "name": "Apartments for sale in Kitisuru",
        "price": 10500000,
        "period": "forever",
        "location": "Kitisuru, Nairobi, Kenya",
        "lat": -1.2168562232154865,
        "lng": 36.80277827660381,
        "file": "/storage/uploads/files/z7WyDCunihR9lAvOuBbfEgoPDEd09GUWTsdcPyB7.jpeg"
    },
    {
        "id": 387,
        "category": "for sale",
        "name": "4 bedroom mansion for sale in Runda",
        "price": 30000000,
        "period": "forever",
        "location": "Runda Estate, Nairobi, Kenya",
        "lat": -1.2137745863425076,
        "lng": 36.81576712957991,
        "file": "/storage/uploads/files/wbNz1sNTKCD2noWkkiKul94MDDqNDaxXJ8dPfOkI.jpeg"
    },
    {
        "id": 386,
        "category": "for sale",
        "name": "4 bedroom mansion for rent in Kiambu Road",
        "price": 200000,
        "period": "month",
        "location": "Kiambu Road, Kenya",
        "lat": -1.2175506415421862,
        "lng": 36.83712853798074,
        "file": "/storage/uploads/files/t31kI3yhhykxDIyUujZYmaq0VpQBD6xuXE3CC0UB.jpeg"
    },
    {
        "id": 385,
        "category": "for sale",
        "name": "4 bedroom bungalow to rent in Runda",
        "price": 200000,
        "period": "month",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2137991057643054,
        "lng": 36.81611045233382,
        "file": "/storage/uploads/files/MGtj7urdRSstab34nfxzXPmDW2fkaPZMgUsBqlAk.jpeg"
    },
    {
        "id": 384,
        "category": "for sale",
        "name": "3 bedroom mansion for rent in Runda",
        "price": 200000,
        "period": "month",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2142894548720924,
        "lng": 36.816036884107746,
        "file": "/storage/uploads/files/UH2hIc8PP8OF1fHo7xSCoA7UMsr0k43kefqA61iy.jpeg"
    },
    {
        "id": 383,
        "category": "for sale",
        "name": "4 bedroom house incomplete in Kangundo road",
        "price": 5500000,
        "period": "forever",
        "location": "Kangundo Road, Kenya",
        "lat": -1.2692861046177293,
        "lng": 36.899533299528464,
        "file": "/storage/uploads/files/quXdnIlxx56XfXJ1vIEbjNsijl8Q4PftxUjV6TMC.jpeg"
    },
    {
        "id": 382,
        "category": "for sale",
        "name": "5 bedroom mansion for sale in Karen Hardy",
        "price": 90000000,
        "period": "forever",
        "location": "Karen Hardy, Nairobi, Kenya",
        "lat": -1.3611965707654616,
        "lng": 36.73317698427851,
        "file": "/storage/uploads/files/2G8mWr1Tm3D4BK3NH3MWUJiLFh8FhN5Vgdtl0Gf2.jpeg"
    },
    {
        "id": 381,
        "category": "for sale",
        "name": "Villa for sale in Malindi",
        "price": 35000000,
        "period": "forever",
        "location": "Malindi, Kenya",
        "lat": -3.218083072418145,
        "lng": 40.115750277393744,
        "file": "/storage/uploads/files/5w5a4T6Qmk6pIHuD6VpxJKBHFaIxXQuddI03lqrL.jpeg"
    },
    {
        "id": 380,
        "category": "for sale",
        "name": "4 bedroom mansion for sale in Diani",
        "price": 45000000,
        "period": "forever",
        "location": "Diani Beach Road, Kenya",
        "lat": -4.386308731434044,
        "lng": 39.55040927488133,
        "file": "/storage/uploads/files/y3Zht65avispfkLOvJLeiIFLwChHOHCWN2uansFf.jpeg"
    },
    {
        "id": 379,
        "category": "for sale",
        "name": "Maisonnettes in a gated community for sale in Karen",
        "price": 65000000,
        "period": "forever",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3145844262243553,
        "lng": 36.69102780661961,
        "file": "/storage/uploads/files/n8nPn39CdyAetoL54M0iaPpGlEpi40JGjLiprzaI.jpeg"
    },
    {
        "id": 378,
        "category": "for rent",
        "name": "Two bedroom for rent at brookside",
        "price": 90000,
        "period": "month",
        "location": "Brookside Drive, Nairobi, Kenya",
        "lat": -1.2572012056464972,
        "lng": 36.79379916803222,
        "file": "/storage/uploads/files/2rQWyb88G5bgPHfNK1pM9IqGWtly1BbRnL2l3FAk.jpeg"
    },
    {
        "id": 377,
        "category": "for rent",
        "name": "Unfurnished contemporary space in Riverside Westlands",
        "price": 95000,
        "period": "month",
        "location": "Riverside Drive, Nairobi, Kenya",
        "lat": -1.2719430502799471,
        "lng": 36.794797237980745,
        "file": "/storage/uploads/files/skVI2sPjbS20hiZNMG2kGmTA36meeifsJMkGcRKn.jpeg"
    },
    {
        "id": 376,
        "category": "for rent",
        "name": "Office to let in Ngong",
        "price": 140000,
        "period": "month",
        "location": "Ngong Road, Nairobi, Kenya",
        "lat": -1.2959285550591195,
        "lng": 36.790035538564304,
        "file": "/storage/uploads/files/puCteXjdqFveMfJjUhicpMFHfQPFzYivAW2YlANq.jpeg"
    },
    {
        "id": 375,
        "category": "for sale",
        "name": "Furnished apartments to let in Westlands",
        "price": 145000,
        "period": "month",
        "location": "Westlands, Nairobi, Kenya",
        "lat": -1.2664198183213242,
        "lng": 36.81085715443345,
        "file": "/storage/uploads/files/JqbsrcPBNv3LZ1ODav8Wm5diu7qFR4vcUvbS0XlP.jpeg"
    },
    {
        "id": 374,
        "category": "for sale",
        "name": "4 bedroom house in hurlingham",
        "price": 26000000,
        "period": "forever",
        "location": "Hurlingham Estate, Nairobi, Kenya",
        "lat": -1.2909559732444464,
        "lng": 36.79776191711426,
        "file": "/storage/uploads/files/t9QajP5AUbgSsabXAJY9YxNMSSBpR9o0Dx49SJ8C.jpeg"
    },
    {
        "id": 373,
        "category": "for sale",
        "name": "Kahawa West flat for sale",
        "price": 11500000,
        "period": "forever",
        "location": "Kahawa West, Githurai, Kenya",
        "lat": -1.1861538627841393,
        "lng": 36.90162068138655,
        "file": "/storage/uploads/files/fDL87C73rJxPRhcjHgxrziLggFDfA7dauQMUKtKm.jpeg"
    },
    {
        "id": 372,
        "category": "for sale",
        "name": "Beautiful house for sale in Muthaiga",
        "price": 350000000,
        "period": "forever",
        "location": "Muthaiga, Nairobi, Kenya",
        "lat": -1.2485387835618775,
        "lng": 36.82221599095686,
        "file": "/storage/uploads/files/Fqw4YOuGEth0G4iielterFUc2slm5JzvGiESREfG.jpeg"
    },
    {
        "id": 371,
        "category": "for sale",
        "name": "Prime plot for sale in Kiserian",
        "price": 26000000,
        "period": "forever",
        "location": "Kiserian, Kenya",
        "lat": -1.4277840061763865,
        "lng": 36.69388416840938,
        "file": "/storage/uploads/files/koDs9alUrPbdUKVA8Nh8WLwuloN15LD1OeqEMMMx.jpeg"
    },
    {
        "id": 370,
        "category": "for sale",
        "name": "Prime plot for sale in Ridgeways Nairobi",
        "price": 22000000,
        "period": "forever",
        "location": "Ridgeways, Nairobi, Kenya",
        "lat": -1.2316666658862685,
        "lng": 36.85019123818713,
        "file": "/storage/uploads/files/uXvU9iMOdHDpE2zyu2JQzWWbtc7UnNiU9y7sN4Dt.jpeg"
    },
    {
        "id": 369,
        "category": "for sale",
        "name": "Maisonnette for sale in Membley estate",
        "price": 36000000,
        "period": "forever",
        "location": "Membley Estate, Ruiru, Kenya",
        "lat": -1.1612129363087222,
        "lng": 36.929678999564096,
        "file": "/storage/uploads/files/w2M5CIdfBz4sgQKnbOTeJbi1nokup64sKOgrmEdD.jpeg"
    },
    {
        "id": 368,
        "category": "for sale",
        "name": "Brand new 2 bedroom apartment for sale in Kiliamni",
        "price": 8600000,
        "period": "forever",
        "location": "Kilimani, Nairobi, Kenya",
        "lat": -1.2885905969582887,
        "lng": 36.78880711329799,
        "file": "/storage/uploads/files/UUGsno4eE4Bry0gMrDakkEvF1uISQ1gAqHwtpKcF.jpeg"
    },
    {
        "id": 367,
        "category": "for sale",
        "name": "5 bedroomed townhouse for sale in Lavington Kileleshwa",
        "price": 65000000,
        "period": "forever",
        "location": "Lavington, Kileleshwa, Nairobi, Kenya",
        "lat": -1.2792296722267087,
        "lng": 36.78112127384935,
        "file": "/storage/uploads/files/yj1E3Lqtq6DW9eG1VaJU128myJpsYDCYYqre2gNQ.jpeg"
    },
    {
        "id": 366,
        "category": "for sale",
        "name": "5 bedroom house for sale in Ruiru Bamboo Gardens",
        "price": 22000000,
        "period": "forever",
        "location": "Bamboo Street, Ruiru, Kenya",
        "lat": -1.1627621408936202,
        "lng": 36.96350874713588,
        "file": "/storage/uploads/files/wPaoqraMGpkyKkGPkcXvphaANFFbTxcxwShTh11r.jpeg"
    },
    {
        "id": 365,
        "category": "for sale",
        "name": "Runda mansions for sale off Kiambu road",
        "price": 55000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2140687971299062,
        "lng": 36.81640472916712,
        "file": "/storage/uploads/files/lD9qtpjbw765QpO2ArwOjtRnnKIUcKuuQ6iz7rBC.jpeg"
    },
    {
        "id": 364,
        "category": "for sale",
        "name": "4 bedroom standalone houses for sale in Karen Mtwitu",
        "price": 80000000,
        "period": "forever",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3146334592356788,
        "lng": 36.69029211584603,
        "file": "/storage/uploads/files/hUTpnFWC8Lj4rm9wK5AaXHHXIDPwM2b5OcuE3z3J.jpeg"
    },
    {
        "id": 363,
        "category": "for sale",
        "name": "Godowns for sale in Kitengela",
        "price": 10000000,
        "period": "forever",
        "location": "Kitengela, Athi River, Kenya",
        "lat": -1.473767643537386,
        "lng": 36.96339595212743,
        "file": "/storage/uploads/files/1HKjRvTaDY8zvSFDHdfWo4ral4ZgA0oy7kHCN11a.jpeg"
    },
    {
        "id": 362,
        "category": "for sale",
        "name": "A contemporary 5 bedroom house for sale in Runda Mimosa",
        "price": 140000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.214240419965311,
        "lng": 36.81606140641321,
        "file": "/storage/uploads/files/AdQoYdriKUVv6vgRzbFMUO5R9wUwSZDCC3EJYOLO.jpeg"
    },
    {
        "id": 361,
        "category": "for sale",
        "name": "Studios,1 and 2 bedroom apartment for sale in Kilimani",
        "price": 3800000,
        "period": "forever",
        "location": "Kilimani, Nairobi, Kenya",
        "lat": -1.287438303150364,
        "lng": 36.78745834524267,
        "file": "/storage/uploads/files/SoTZFR2edKVoUxAzaYA6Y9mvapAEmyiP37sRV445.jpeg"
    },
    {
        "id": 360,
        "category": "for sale",
        "name": "4 bedroom all ensuite mansion for sale in Runda",
        "price": 69000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2139952441087132,
        "lng": 36.81625759075047,
        "file": "/storage/uploads/files/E4ZCVpCX4pduBK3PXfy7t4ixBBhJc52LXEe2GebF.jpeg"
    },
    {
        "id": 359,
        "category": "for sale",
        "name": "4 bedroom master ensuite mansion for sale in Membley estate",
        "price": 19000000,
        "period": "forever",
        "location": "Membley Estate, Ruiru, Kenya",
        "lat": -1.1616052243758832,
        "lng": 36.9297035225244,
        "file": "/storage/uploads/files/VpL8qrErerOvUB3she8tspzX0rpAaklHyKDECCyp.jpeg"
    },
    {
        "id": 358,
        "category": "for sale",
        "name": "Maisonnette for sale in Syokimau",
        "price": 18000000,
        "period": "forever",
        "location": "Syokimau, Nairobi, Kenya",
        "lat": -1.3598852349769068,
        "lng": 36.94035097643303,
        "file": "/storage/uploads/files/WOZ6CModVpjlGO6saCHpSK4vR0K9xlalGK2KPrHa.jpeg"
    },
    {
        "id": 357,
        "category": "for sale",
        "name": "Townhouse for sale in HoneySuckle estates behind Imara Daima estate",
        "price": 13000000,
        "period": "forever",
        "location": "Imara Daima Estate, Nairobi, Kenya",
        "lat": -1.3234773376506135,
        "lng": 36.88702583312988,
        "file": "/storage/uploads/files/SWB64GuFslG72lqUCp4XrbU9GSsJtXlfu5XjjJ09.jpeg"
    },
    {
        "id": 356,
        "category": "for sale",
        "name": "Contemporary six bedroom townhouse for sale in Lavington",
        "price": 75000000,
        "period": "forever",
        "location": "Lavington, Nairobi, Kenya",
        "lat": -1.277660585593658,
        "lng": 36.778227554056286,
        "file": "/storage/uploads/files/yY4ohkhZpJlqAw8xWT7wlAxlEbJ0zaV8apzduylr.jpeg"
    },
    {
        "id": 355,
        "category": "for sale",
        "name": "Contemporary Ruaka apartment for sale",
        "price": 165000000,
        "period": "forever",
        "location": "Ruaka, Kenya",
        "lat": -1.2040827760517647,
        "lng": 36.78013364524266,
        "file": "/storage/uploads/files/fPKNGIBFFbUVH9Ps7EVPSzE8zWOWZvy0Ghnh7CjZ.jpeg"
    },
    {
        "id": 354,
        "category": "for sale",
        "name": "A contemporary 6 bedroom mansion for sale in Lavington",
        "price": 90000000,
        "period": "forever",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.2810806056829183,
        "lng": 36.784003827893095,
        "file": "/storage/uploads/files/MpIcX2nKudZuYB1PKMik3SyQctB8Fkeo6DuBLFqV.jpeg"
    },
    {
        "id": 353,
        "category": "for sale",
        "name": "675 acres for sale in Thika and Muranga",
        "price": 6500000,
        "period": "forever",
        "location": "Muranga, Kenya",
        "lat": -0.7834606718921324,
        "lng": 37.037986224588344,
        "file": "/storage/uploads/files/1KvrcWmymMokJUq4GLtE5PEs3PrE9xavH1t56Auc.jpeg"
    },
    {
        "id": 352,
        "category": "for sale",
        "name": "Contemporary 3 bedroom mansion in ngong  kerarapon",
        "price": 40000000,
        "period": "forever",
        "location": "Kerarapon Drive, Nairobi, Kenya",
        "lat": -1.3255441378929302,
        "lng": 36.67079451371077,
        "file": "/storage/uploads/files/SNpHVlHNvuOLdQaaJwE8L5dJ99K4OrgOCSh2UqUj.jpeg"
    },
    {
        "id": 351,
        "category": "for sale",
        "name": "Contemporary fully furnished apartments in Kilimani",
        "price": 15000000,
        "period": "forever",
        "location": "Kilimani, Nairobi, Kenya",
        "lat": -1.2878550914747124,
        "lng": 36.78875806803222,
        "file": "/storage/uploads/files/pJl75bjJ1gAAkrjSOWIf6yUAOc0X7rxumEmNYgNy.jpeg"
    },
    {
        "id": 350,
        "category": "for sale",
        "name": "Contemporary apartment complex in  Adams Arcade",
        "price": 150000000,
        "period": "forever",
        "location": "Ngong Road, Nairobi, Kenya",
        "lat": -1.3035287443458372,
        "lng": 36.790820277223,
        "file": "/storage/uploads/files/GFoCKhfG2nDkO4QFqEvLeXT8O7gvExvH8sZ9T8Cf.jpeg"
    },
    {
        "id": 349,
        "category": "for sale",
        "name": "6 bedroom apartment for sale in Kileleshwa",
        "price": 28000000,
        "period": "forever",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.2804676828781543,
        "lng": 36.784935704313604,
        "file": "/storage/uploads/files/5ovbcLZOnzDmlz6mpGQuhI3oAqcmwD93f9G1scjc.jpeg"
    },
    {
        "id": 347,
        "category": "for sale",
        "name": "Nanyuki Greens",
        "price": 299999,
        "period": "month",
        "location": "Nanyuki-Rumuruti Road, Kenya",
        "lat": 0.2407767,
        "lng": 36.5508779,
        "file": "/storage/uploads/files/gIoofDWYUDWXCjNHkvTtCSRKtwjIVlSIVw21gN9i.jpeg"
    },
    {
        "id": 344,
        "category": "for sale",
        "name": "6 bedroom mansion for sale in Runda",
        "price": 160000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2134803755230996,
        "lng": 36.81638020686165,
        "file": "/storage/uploads/files/Tp8zNgI4U0UuHJCAjrEOzlpyms1H6pw0clZSjwqk.jpeg"
    },
    {
        "id": 343,
        "category": "for sale",
        "name": "4 bedroom Maisonnette for sale in Salama estate thika",
        "price": 13000000,
        "period": "forever",
        "location": "Salama House, Mama Ngina Drive, Thika, Kenya",
        "lat": -1.031378549725484,
        "lng": 37.07516282937355,
        "file": "/storage/uploads/files/8ACKjByByP7orNUvo4P9pc2M4Q7PWdBpVQ8n20n0.jpeg"
    },
    {
        "id": 342,
        "category": "for sale",
        "name": "Apartment block for sale in Lavington",
        "price": 1900000000,
        "period": "forever",
        "location": "Lavington, Nairobi, Kenya",
        "lat": -1.2809948938691902,
        "lng": 36.77827659997689,
        "file": "/storage/uploads/files/nNDMxVLpO2NLusfuDfOAVDsCnu7iFpvCh29LMTya.jpeg"
    },
    {
        "id": 341,
        "category": "for sale",
        "name": "Gated community for sale in Runda",
        "price": 50000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2136765165093908,
        "lng": 36.816233067790165,
        "file": "/storage/uploads/files/4LxdgmSsxaFuZT33z7wKuLmQ5R17TofTkz3U6pGE.jpeg"
    },
    {
        "id": 340,
        "category": "for sale",
        "name": "4 bedroom house for sale in Membley estate",
        "price": 16500000,
        "period": "forever",
        "location": "Membley Estate, Ruiru, Kenya",
        "lat": -1.1633950392185226,
        "lng": 36.931395612023955,
        "file": "/storage/uploads/files/QC4haIvfS3AAlEqdCcWfbZzzkT5ljQTq2hfNFZi7.jpeg"
    },
    {
        "id": 339,
        "category": "for sale",
        "name": "Houses for sale in Muthaiga",
        "price": 450000000,
        "period": "forever",
        "location": "Muthaiga, Nairobi, Kenya",
        "lat": -1.2487594371411628,
        "lng": 36.82260836094105,
        "file": "/storage/uploads/files/vyjGlh0KZjJlTFa6cGF13uV2ex2cobjlXxSRE1dO.jpeg"
    },
    {
        "id": 338,
        "category": "for sale",
        "name": "House for sale in Embakasi Tassia",
        "price": 13000000,
        "period": "forever",
        "location": "Tassia, Embakasi, Nairobi, Kenya",
        "lat": -1.3071922839230643,
        "lng": 36.8965842274803,
        "file": "/storage/uploads/files/IrY2Ny7sonbxJvlkt3ZTigOwPErHpwqpZ5wYMtH4.jpeg"
    },
    {
        "id": 337,
        "category": "for sale",
        "name": "Half an acre land for sale in Karen",
        "price": 40000000,
        "period": "forever",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3151728249154435,
        "lng": 36.68994879309212,
        "file": "/storage/uploads/files/6JWpWJsp3GRj7PSHDDREVTwhQi1wiXyCuybLqELn.jpeg"
    },
    {
        "id": 336,
        "category": "for sale",
        "name": "2 bedroom Imara Daima apartment for sale",
        "price": 7500000,
        "period": "forever",
        "location": "Imara Daima, Nairobi, Kenya",
        "lat": -1.325541522399283,
        "lng": 36.87867579346929,
        "file": "/storage/uploads/files/pYmfRHEvNvmlLeipdxICZIgMuWjzdw4IK1KuRnU4.jpeg"
    },
    {
        "id": 335,
        "category": "for rent",
        "name": "4 bedroom own compound house for sale",
        "price": 450000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2138971742835987,
        "lng": 36.81679709784163,
        "file": "/storage/uploads/files/7UG9iBDcQexF2JGCKYcfGJGTAl3pjNulhYeLmoUW.jpeg"
    },
    {
        "id": 333,
        "category": "for sale",
        "name": "4 bedroom mansion for sale in Kangundo road",
        "price": 5500000,
        "period": "forever",
        "location": "Kangundo Road, Kenya",
        "lat": -1.2705242122361449,
        "lng": 36.89950264533696,
        "file": "/storage/uploads/files/YjcyNJEi6mwDN4tiikMH62tTymQc2CmgYxkB33JS.jpeg"
    },
    {
        "id": 332,
        "category": "for sale",
        "name": "3 bedroom apartment for rent in Kilimani near Yaya centre",
        "price": 145000,
        "period": "month",
        "location": "Kilimani, Nairobi, Kenya",
        "lat": -1.2904293617018006,
        "lng": 36.789101391440965,
        "file": "/storage/uploads/files/BKkXBZsJdEmtdDgvYZqWNSw1fhE2IGOa4MIkIpGB.jpeg"
    },
    {
        "id": 331,
        "category": "for sale",
        "name": "4 bedroom mansion for sale in Ruai stage 26",
        "price": 8500000,
        "period": "forever",
        "location": "Ruai, Kenya",
        "lat": -1.2590615169228812,
        "lng": 37.017593040080385,
        "file": "/storage/uploads/files/RrVtO8Egva5ixssvxZmGRyA21iLRrHubYG8onxik.jpeg"
    },
    {
        "id": 330,
        "category": "for sale",
        "name": "4 bedroom mansion for sale in Nyari",
        "price": 145000000,
        "period": "forever",
        "location": "Nyari, Nairobi, Kenya",
        "lat": -1.2325944462865552,
        "lng": 36.787883532092316,
        "file": "/storage/uploads/files/dnzjGJRFSRS6S0xz5AT4XVUos3HzFZMY9PWyQCLa.jpeg"
    },
    {
        "id": 329,
        "category": "for sale",
        "name": "5 bedroom mansion for sale in Karen plains",
        "price": 75000000,
        "period": "forever",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3151728249154435,
        "lng": 36.690709006826005,
        "file": "/storage/uploads/files/LxEArqH8QFc0n0ri6Ds5ydVW7oGmE95Q8i2stuw8.jpeg"
    },
    {
        "id": 328,
        "category": "for sale",
        "name": "4 bedroom 2 ensuite house for sale in Runda Bogani estate",
        "price": 110000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2122790151089755,
        "lng": 36.816600913504374,
        "file": "/storage/uploads/files/8KYFIdBZuTE6EnndthyI2dxI0gtS6f6o1xyPjHQ4.jpeg"
    },
    {
        "id": 327,
        "category": "for sale",
        "name": "4 bedroom mansion for sale off Kamiti road kiambu",
        "price": 22000000,
        "period": "forever",
        "location": "Kiambu Kamiti Road, Kenya",
        "lat": -1.1680099410909468,
        "lng": 36.86044386799659,
        "file": "/storage/uploads/files/XmGL1ruZzPMcc5skfWlBAQudcWESIbjGJnFwXsya.jpeg"
    },
    {
        "id": 326,
        "category": "for rent",
        "name": "5 bedroom house for sale in Muthaiga",
        "price": 150000,
        "period": "month",
        "location": "Muthaiga, Nairobi, Kenya",
        "lat": -1.2484407150074965,
        "lng": 36.82025414758431,
        "file": "/storage/uploads/files/TEI5BS5Qh2cm4GcFosbrFz3yJzfGq4rtiZOGdUqF.jpeg"
    },
    {
        "id": 325,
        "category": "for sale",
        "name": "5 bedroom house for sale in Kitengela",
        "price": 10000000,
        "period": "forever",
        "location": "Kitengela, Athi River, Kenya",
        "lat": -1.4743314869391797,
        "lng": 36.96332238390136,
        "file": "/storage/uploads/files/jis3G10Gjq7gq2exYFja08QV7HCjGQ66RwMKCWY1.jpeg"
    },
    {
        "id": 324,
        "category": "for sale",
        "name": "6 bedroom house for sale in RUNDA",
        "price": 210000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2140933165490324,
        "lng": 36.81530119267933,
        "file": "/storage/uploads/files/WbzDY1RGw6pVBd3NttqQy1lf9OStMc5sd9J07cSl.jpeg"
    },
    {
        "id": 323,
        "category": "for sale",
        "name": "5 bedroom apartment for sale in Rosslyn",
        "price": 95000000,
        "period": "forever",
        "location": "Rosslyn, Nairobi, Kenya",
        "lat": -1.2187588314491171,
        "lng": 36.79230632978632,
        "file": "/storage/uploads/files/QZHAUM64hjAxY48izuiprgAtwf6mkjGSOOXFshq8.jpeg"
    },
    {
        "id": 322,
        "category": "for sale",
        "name": "Mansion for sale in Runda Estate",
        "price": 90000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2143630091946538,
        "lng": 36.81596331522684,
        "file": "/storage/uploads/files/7KzaskIj4YE5ln0ot6LLSamTLiGvLwdb1mvtSgri.jpeg"
    },
    {
        "id": 321,
        "category": "for sale",
        "name": "House for sale in old Muthaiga",
        "price": 480000000,
        "period": "forever",
        "location": "Muthaiga, Nairobi, Kenya",
        "lat": -1.2489555768411995,
        "lng": 36.82194623839354,
        "file": "/storage/uploads/files/UMb0if87yLakIzBzZOft9xzRn7J6O6PPAumZjinu.jpeg"
    },
    {
        "id": 320,
        "category": "for rent",
        "name": "Commercial building for rent in Karen Nairobi",
        "price": 400000,
        "period": "month",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3179431964018373,
        "lng": 36.69220491329798,
        "file": "/storage/uploads/files/WXqKL4EzuKPh7HXATkI4ppiVmIKBTVDRIvsZY8nq.jpeg"
    },
    {
        "id": 319,
        "category": "for sale",
        "name": "3 bedroom house for sale in Ongata Rongai",
        "price": 5800000,
        "period": "forever",
        "location": "Ongata Rongai, Kenya",
        "lat": -1.393494329929549,
        "lng": 36.74547611371077,
        "file": "/storage/uploads/files/oNoxqz93iduRDSPRJsOTLCli4wbS6gFD4sKgA86D.jpeg"
    },
    {
        "id": 318,
        "category": "for rent",
        "name": "Petrol station for sale in Ongata rongai",
        "price": 370000,
        "period": "forever",
        "location": "Ongata Rongai, Kenya",
        "lat": -1.3939356165568375,
        "lng": 36.74478946820296,
        "file": "/storage/uploads/files/Tk7Jr2YaatScc6skVDMaM8XHNFQsa9GJtwc6dVUq.jpeg"
    },
    {
        "id": 317,
        "category": "for rent",
        "name": "Petrol station for sale in Outer Ring",
        "price": 330000000,
        "period": "forever",
        "location": "Outer Ring Road, Nairobi, Kenya",
        "lat": -1.2619784103892682,
        "lng": 36.87748282696595,
        "file": "/storage/uploads/files/Yao66aKbjwvBe6hj0QaK03ex9FjsJ4chmD0GNg8E.jpeg"
    },
    {
        "id": 316,
        "category": "for sale",
        "name": "House for sale in Thika Salama",
        "price": 6000000,
        "period": "forever",
        "location": "Salama House, Mama Ngina Drive, Thika, Kenya",
        "lat": -1.0331375227018718,
        "lng": 37.07258022954239,
        "file": "/storage/uploads/files/klyBovOOyu11fHp0QKCkgbozwPpljXQ2Rp90bkjt.jpeg"
    },
    {
        "id": 315,
        "category": "for sale",
        "name": "Plots for sale in Ruiru Kamakis",
        "price": 1700000,
        "period": "forever",
        "location": "Ruiru, Kenya",
        "lat": -1.1432063128632741,
        "lng": 36.95954351976467,
        "file": "/storage/uploads/files/62Yz7YO2VnZ4yk729iKAMF8aRU3yQZIEBseT14Y4.jpeg"
    },
    {
        "id": 313,
        "category": "for sale",
        "name": "Flat for sale in Tena estate Nairobi",
        "price": 24500000,
        "period": "forever",
        "location": "Manyanja Road, Nairobi, Kenya",
        "lat": -1.290721473127518,
        "lng": 36.890260126723625,
        "file": "/storage/uploads/files/13i9TbCtFvKtDXed2FqGDMxkEAdUE9hgkCRs0Nlq.jpeg"
    },
    {
        "id": 312,
        "category": "for sale",
        "name": "House in Thika Salama area",
        "price": 6000000,
        "period": "forever",
        "location": "Salama House, Mama Ngina Drive, Thika, Kenya",
        "lat": -1.0322857580177058,
        "lng": 37.07773775068268,
        "file": "/storage/uploads/files/8xEEbPIJfhVMfuJFNvTgcHH7PhIfqAoBZiDDJYEP.jpeg"
    },
    {
        "id": 311,
        "category": "for rent",
        "name": "Ongata Rongai petrol station for lease",
        "price": 370000,
        "period": "month",
        "location": "Ongata Rongai, Kenya",
        "lat": -1.3932982055681065,
        "lng": 36.74483851543324,
        "file": "/storage/uploads/files/8s5jll3TE14rerPzdlhR0Qp5cF41jvwMRgNHqEGA.jpeg"
    },
    {
        "id": 310,
        "category": "for sale",
        "name": "Kiambu Road Kanunga residential plot for sale",
        "price": 3900000,
        "period": "forever",
        "location": "Kiambu Road, Kenya",
        "lat": -1.2187029621666015,
        "lng": 36.83325389453689,
        "file": "/storage/uploads/files/XPc1MFM1wUqV18zkH198ZQISn6PXR9DykoG3c64e.jpeg"
    },
    {
        "id": 309,
        "category": "for sale",
        "name": "Land on sale at Kilimani Lavington",
        "price": 240000000,
        "period": "forever",
        "location": "Lavington Security House, Denis Pritt Road, Kilimani, Nairobi, Kenya",
        "lat": -1.2874815350109219,
        "lng": 36.78767819267932,
        "file": "/storage/uploads/files/fNqXEA0D8UFR62NFknx1iGYqnit4D9Y2myiGlZY1.jpeg"
    },
    {
        "id": 308,
        "category": "for sale",
        "name": "Parklands flat for sale",
        "price": 200000000,
        "period": "forever",
        "location": "Third Parklands Avenue, Parklands, Kenya",
        "lat": -1.2599397005850783,
        "lng": 36.81583220183446,
        "file": "/storage/uploads/files/PcXX87UqDhsNSwP5FpFCgtQDa7Zmlu21bXiTlFiS.jpeg"
    },
    {
        "id": 307,
        "category": "for sale",
        "name": "Kitisuru 4 bedroom house for sale",
        "price": 100000000,
        "period": "forever",
        "location": "Kitisuru, Nairobi, Kenya",
        "lat": -1.2201415738361319,
        "lng": 36.80017883167954,
        "file": "/storage/uploads/files/wNyMP3zh77WGzOkGePMNLQNGQF96DBF6e66Tjjpc.jpeg"
    },
    {
        "id": 306,
        "category": "for sale",
        "name": "Runda Mumwe Land on quick sale",
        "price": 40000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2181632254061787,
        "lng": 36.81292245636229,
        "file": "/storage/uploads/files/ZFtzU6UYMqjOCHndECYv26KdjDDR8LIkzbQkS3Yg.jpeg"
    },
    {
        "id": 305,
        "category": "for sale",
        "name": "Laren Miotoni 5 bedroom house for sale",
        "price": 130000000,
        "period": "forever",
        "location": "Miotoni Lane, Karen, Nairobi, Kenya",
        "lat": -1.3128222791407793,
        "lng": 36.70799989560454,
        "file": "/storage/uploads/files/nwkbAUQbwFfjhjBxYSYr4eEGGxgMRhO1FycmWm9s.jpeg"
    },
    {
        "id": 304,
        "category": "for rent",
        "name": "7 bedroom house for commercial use in Yaya center",
        "price": 350000,
        "period": "month",
        "location": "Yaya Center, Kenya",
        "lat": -0.22453016512822657,
        "lng": 34.258386690202585,
        "file": "/storage/uploads/files/cVStazcgSPs8jeHflIiLWuo9X0NZNitE1thWHfVJ.jpeg"
    },
    {
        "id": 303,
        "category": "for sale",
        "name": "Flat for sale in Githurai 44",
        "price": 41000000,
        "period": "forever",
        "location": "Githurai 44, Githurai, Kenya",
        "lat": -1.1973480836880257,
        "lng": 36.91044754524266,
        "file": "/storage/uploads/files/Wn09pq7a2iRW0XmtJ4kSIpROb8QL02B4bxLBhsNN.jpeg"
    },
    {
        "id": 302,
        "category": "for sale",
        "name": "Mansion for sale in Fedha stage Tassia 1",
        "price": 22000000,
        "period": "forever",
        "location": "Fedha Estate, Nairobi, Kenya",
        "lat": -1.317299412515386,
        "lng": 36.90000018410774,
        "file": "/storage/uploads/files/qH7OwdMmPKLpU2XaMxoTJyMqOAkJSSNpYKwQ6CP6.jpeg"
    },
    {
        "id": 301,
        "category": "for sale",
        "name": "Utawala jet view flat for sale",
        "price": 35000000,
        "period": "forever",
        "location": "Utawala Crecent, Nairobi, Kenya",
        "lat": -1.2947175430372415,
        "lng": 36.98051133290907,
        "file": "/storage/uploads/files/YDPfMjnD1acO41cxGY7d3rOkKIZRkhuvN7wcarHb.jpeg"
    },
    {
        "id": 300,
        "category": "for sale",
        "name": "Commercial building for sale in Namanga",
        "price": 350000000,
        "period": "forever",
        "location": "Kitengela, Athi River, Kenya",
        "lat": -1.473497976917404,
        "lng": 36.96297906114745,
        "file": "/storage/uploads/files/ZnitBhG6FHeDFAYJ0kZaTPvblkcUx602upVw0Jk5.jpeg"
    },
    {
        "id": 299,
        "category": "for sale",
        "name": "Shauri moyo apartments for sale",
        "price": 1200000000,
        "period": "forever",
        "location": "Shauri Moyo, Nairobi, Kenya",
        "lat": -1.2908124062206354,
        "lng": 36.850390889270074,
        "file": "/storage/uploads/files/NyCmB8WrIXOIJ5w5xOj8Fb9TjJKl10rNtdV5g1BZ.jpeg"
    },
    {
        "id": 298,
        "category": "for sale",
        "name": "Karen Miotoni house for sale",
        "price": 68000000,
        "period": "forever",
        "location": "Miotoni Road, Karen, Nairobi, Kenya",
        "lat": -1.3130445646441227,
        "lng": 36.708579102076484,
        "file": "/storage/uploads/files/shjUDiZLgz8tQEeqE2Y1OCATwFALFdyq8WY66aIk.jpeg"
    },
    {
        "id": 297,
        "category": "for sale",
        "name": "House for sale in Muthaiga",
        "price": 250000000,
        "period": "forever",
        "location": "Muthaiga, Nairobi, Kenya",
        "lat": -1.2508924369343113,
        "lng": 36.82113697677454,
        "file": "/storage/uploads/files/QyQH9UEuTw0GATDNvPGHoQAZHrdXhTKzAMgEk2SI.jpeg"
    },
    {
        "id": 296,
        "category": "for sale",
        "name": "7 acrelandforsale at Thika Gatuanyaga",
        "price": 27000000,
        "period": "forever",
        "location": "Gatuanyaga, Kenya",
        "lat": -1.063664988117726,
        "lng": 37.22321081522684,
        "file": "/storage/uploads/files/H3wlYM1DISbWCvdF1zFtjCoyPjcJO75gx1pL76XJ.jpeg"
    },
    {
        "id": 295,
        "category": "for sale",
        "name": "Mansion for sale in Ruiru Kamakis",
        "price": 18000000,
        "period": "forever",
        "location": "Ruiru, Kenya",
        "lat": -1.1502099160808568,
        "lng": 36.958454770509,
        "file": "/storage/uploads/files/kgTR0SJfy8P6VfK0VHxvJK0gwBJiJzemUimaLIgp.jpeg"
    },
    {
        "id": 294,
        "category": "for sale",
        "name": "Flat for sale in Kahawa Sukari",
        "price": 50000000,
        "period": "forever",
        "location": "Kahawa Sukari, Kenya",
        "lat": -1.1974890066009578,
        "lng": 36.94845128427851,
        "file": "/storage/uploads/files/MzrnhM447W5zi4pjS6PPfjlBfJPSMqPFyL4SruLj.jpeg"
    },
    {
        "id": 293,
        "category": "for sale",
        "name": "3 bedroom house for sale in ruiru",
        "price": 5500000,
        "period": "forever",
        "location": "Ruiru, Kenya",
        "lat": -1.1490575669889247,
        "lng": 36.95965640014767,
        "file": "/storage/uploads/files/5SXH5O8y9Dlkalf4MEmBHUMVgcuLww4rcAyPa4Wf.jpeg"
    },
    {
        "id": 292,
        "category": "for sale",
        "name": "6 bedroom villa for sale in Lavington",
        "price": 90000000,
        "period": "forever",
        "location": "Lavington, Nairobi, Kenya",
        "lat": -1.2771702482792533,
        "lng": 36.77724663171517,
        "file": "/storage/uploads/files/H75Y2iF0ru2FS4cvkOFnhDDJyMDGctU5prHot9rB.jpeg"
    },
    {
        "id": 291,
        "category": "for sale",
        "name": "3 bedroom apartment for sale in Kilimani off Kindaruma road",
        "price": 14500000,
        "period": "forever",
        "location": "Kindaruma Road, Kilimani, Nairobi, Kenya",
        "lat": -1.2962023935121973,
        "lng": 36.789952593262875,
        "file": "/storage/uploads/files/dzaTWjwdUrFiSXdzL5jYGSRHKbSFi9Hr0jE9TTx2.jpeg"
    },
    {
        "id": 290,
        "category": "for sale",
        "name": "3 bedroom house for sale in ngong",
        "price": 6200000,
        "period": "forever",
        "location": "Ngong, Kenya",
        "lat": -1.354592198384294,
        "lng": 36.66957602273081,
        "file": "/storage/uploads/files/4jl42FBZGv2cCdadNOLmLXuS5ECfHndr2TKtpgvg.jpeg"
    },
    {
        "id": 289,
        "category": "for sale",
        "name": "House for sale in Kamukuru distress sale",
        "price": 5500000,
        "period": "forever",
        "location": "Kamukuru Road, Kenya",
        "lat": -1.402634559038384,
        "lng": 36.68627882273079,
        "file": "/storage/uploads/files/QEbjHfhVYQ6dvcJ2mclr4feEiS2XOSjjvZouDgsn.jpeg"
    },
    {
        "id": 288,
        "category": "for sale",
        "name": "Commercial building for sale in Umoja 1 near Egesa Villa",
        "price": 10000000,
        "period": "forever",
        "location": "Umoja Phase 1, Nairobi, Kenya",
        "lat": -1.2819213812681627,
        "lng": 36.89005344507191,
        "file": "/storage/uploads/files/uUtjVqcNMysCyOWHMpwGnywixI9um71grem43IIa.jpeg"
    },
    {
        "id": 287,
        "category": "for sale",
        "name": "Palmy apartments for sale in Villa Franca off Mombasa road",
        "price": 66000000,
        "period": "forever",
        "location": "Mombasa Road, Nairobi, Kenya",
        "lat": -1.3449489829938994,
        "lng": 36.90836075278107,
        "file": "/storage/uploads/files/6Tp2GGHBMsqCtfqVScSE6DE89WpBN3OuCUhglXp6.jpeg"
    },
    {
        "id": 286,
        "category": "for sale",
        "name": "Gated community in Kitengela Acacia",
        "price": 6500000,
        "period": "forever",
        "location": "Kitengela, Athi River, Kenya",
        "lat": -1.474650179208061,
        "lng": 36.962709306619615,
        "file": "/storage/uploads/files/Q2o823Ie9VrbJvYPWsWKRBUoiaAly2VwumcD6kI1.jpeg"
    },
    {
        "id": 285,
        "category": "for sale",
        "name": "Westlands Nairobi 10 bedroom modern commercial house for sale",
        "price": 490000000,
        "period": "forever",
        "location": "Westlands, Nairobi, Kenya",
        "lat": -1.2664198183213242,
        "lng": 36.81379992211163,
        "file": "/storage/uploads/files/g57OmDO7DQtqsMDpAasXx80EKhMl0IIoYpyvgRhF.jpeg"
    },
    {
        "id": 284,
        "category": "for sale",
        "name": "Westlands commercial building for sale",
        "price": 600000000,
        "period": "forever",
        "location": "Westlands, Nairobi, Kenya",
        "lat": -1.268185044810615,
        "lng": 36.8089443569815,
        "file": "/storage/uploads/files/qPRnl43d0kasiJmdgqx4kUaf3EhCbOFFlmI3iPvZ.jpeg"
    },
    {
        "id": 283,
        "category": "for sale",
        "name": "2 story flat in fedha estate for sale",
        "price": 30000000,
        "period": "forever",
        "location": "Fedha Estate, Nairobi, Kenya",
        "lat": -1.3171768333895841,
        "lng": 36.901177291440945,
        "file": "/storage/uploads/files/SvG6QqRTeZQZTCBd52RfxooJoPhEepEc2czOS7lS.jpeg"
    },
    {
        "id": 282,
        "category": "for sale",
        "name": "Nasra 6 bedroom Maisonnette for sale",
        "price": 14500000,
        "period": "forever",
        "location": "Nasra Garden Estate, Nairobi, Kenya",
        "lat": -1.276106518554105,
        "lng": 36.90163449288573,
        "file": "/storage/uploads/files/iEkOzOawBZLJy6PNoYC74BvjU9UhPyfeYgwNqmhn.jpeg"
    },
    {
        "id": 281,
        "category": "for sale",
        "name": "Utawala 5 bedroom house for sale",
        "price": 10000000,
        "period": "forever",
        "location": "Utawala Complex, Eastern Bypass, Nairobi, Kenya",
        "lat": -1.2784099969332656,
        "lng": 36.963612115397595,
        "file": "/storage/uploads/files/gkVObom7SNnirahv2fKGUQOAzArlCA1o7VF9wWbG.jpeg"
    },
    {
        "id": 280,
        "category": "for sale",
        "name": "Kirarapon 4 bedroom house for sale",
        "price": 26000000,
        "period": "forever",
        "location": "Kerarapon Drive, Nairobi, Kenya",
        "lat": -1.3264267319858911,
        "lng": 36.66905337698093,
        "file": "/storage/uploads/files/N7f3OzpLAFpxL37cmZlAl0mkR16P7Tnj0we1G0LY.jpeg"
    },
    {
        "id": 279,
        "category": "for sale",
        "name": "4 bedroom Maisonnette for sale in Syokimau",
        "price": 17000000,
        "period": "forever",
        "location": "Syokimau, Nairobi, Kenya",
        "lat": -1.359103086501464,
        "lng": 36.941528082456564,
        "file": "/storage/uploads/files/9gGqHCD3baKoYLiZpXZLg46WimySo01FTdaQMTZl.jpeg"
    },
    {
        "id": 278,
        "category": "for sale",
        "name": "Runda waters 8 standalone executive house for sale",
        "price": 180000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2138984340943106,
        "lng": 36.81445598602295,
        "file": "/storage/uploads/files/sM30azVOBSlmKqlVoFHgNKdtvYcpucPNU2hXUBzH.jpeg"
    },
    {
        "id": 277,
        "category": "for sale",
        "name": "Kericho1 acre land with 4 bedroom house for sale for",
        "price": 70000000,
        "period": "forever",
        "location": "Kericho, Kenya",
        "lat": -0.36916491468323226,
        "lng": 35.2892410274803,
        "file": "/storage/uploads/files/pmVEl6mzdffgTpxGvSAqO364QpqNyjHZxfrkh1fl.jpeg"
    },
    {
        "id": 276,
        "category": "for sale",
        "name": "Mlolongo godowns for sale",
        "price": 400000000,
        "period": "forever",
        "location": "Mlolongo, Kenya",
        "lat": -1.3922573851657911,
        "lng": 36.93987480014763,
        "file": "/storage/uploads/files/Sbu9ciZUDVA03IGuR3USWRfaTEYdKdmvbQm3jBoB.jpeg"
    },
    {
        "id": 275,
        "category": "for sale",
        "name": "Ongata Rongai 3 bedroom house for sale",
        "price": 10000000,
        "period": "forever",
        "location": "Ongata Rongai, Kenya",
        "lat": -1.3931265949381821,
        "lng": 36.744691377016586,
        "file": "/storage/uploads/files/4CGG7xzYaBRtWdvL61WrNs8AAvQET8Ig0yh7RENn.jpeg"
    },
    {
        "id": 274,
        "category": "for sale",
        "name": "Old Muthaiga 5 bedroom house for sale",
        "price": 170000000,
        "period": "forever",
        "location": "Muthaiga, Nairobi, Kenya",
        "lat": -1.249029126278887,
        "lng": 36.821186022695144,
        "file": "/storage/uploads/files/xpVJp5XMGz9c9pvdXafHVErvTaZNsUs1DsnPMcXD.jpeg"
    },
    {
        "id": 273,
        "category": "for sale",
        "name": "Kitengela Muigai estate 3 bedroom bungalow  for sale",
        "price": 9000000,
        "period": "forever",
        "location": "Kitengela, Athi River, Kenya",
        "lat": -1.4735224937323301,
        "lng": 36.96253764524266,
        "file": "/storage/uploads/files/lEq0Rw56RyRcdx59pFSe5QxvYmnokWTBNciTYAKG.jpeg"
    },
    {
        "id": 272,
        "category": "for sale",
        "name": "Kitisuru 4 bedroom house in a gated community",
        "price": 55000000,
        "period": "forever",
        "location": "Kitisuru, Nairobi, Kenya",
        "lat": -1.2197492927894473,
        "lng": 36.799860031885935,
        "file": "/storage/uploads/files/6FQ7glOmOWbC7mKNpREtUU9i21YbD3bol4W4IEPW.jpeg"
    },
    {
        "id": 271,
        "category": "for sale",
        "name": "Utawala embakasi 4 bedroom executive house for sale",
        "price": 25000000,
        "period": "forever",
        "location": "Road to Utawala Academy, Embakasi, Nairobi, Kenya",
        "lat": -1.302463945197013,
        "lng": 36.9417610124724,
        "file": "/storage/uploads/files/kkLAEeLMYAQSivA9OUENg90a3lN85TN7hYdR90oF.jpeg"
    },
    {
        "id": 270,
        "category": "for sale",
        "name": "Ridgeways Kiambu Road 5 bedroom house for sale",
        "price": 90000000,
        "period": "forever",
        "location": "Ridgeways, Nairobi, Kenya",
        "lat": -1.2306875,
        "lng": 36.8492471,
        "file": "/storage/uploads/files/FuKLErFM2QrW4gmmTQrMc8hUVzfEwGefR1erhvIY.jpeg"
    },
    {
        "id": 269,
        "category": "for sale",
        "name": "Parklands apartment block for sale",
        "price": 370000000,
        "period": "forever",
        "location": "Parklands, Nairobi, Kenya",
        "lat": -1.2592432218734662,
        "lng": 36.81743812290154,
        "file": "/storage/uploads/files/qL1IZeoV5HYWeJ1sQucD9kyzvzs7B2TUYBgVUM9x.jpeg"
    },
    {
        "id": 268,
        "category": "for sale",
        "name": "Brookview 2 estate",
        "price": 5500000,
        "period": "year",
        "location": "Kenyatta Road, Kenya",
        "lat": -1.1243691,
        "lng": 37.00446710000001,
        "file": "/storage/uploads/files/N5DAVd4XxmkFKEldSu41Dv6uKo2hToUgpwaOi3sG.jpeg"
    },
    {
        "id": 267,
        "category": "for sale",
        "name": "Murera estate",
        "price": 7000000,
        "period": "week",
        "location": "Ruiru, Kenya",
        "lat": -1.14825,
        "lng": 36.96045340000001,
        "file": "/storage/uploads/files/J5e9gDhtMtSMsoIbDZJjmOkgbzWRUa3uRpQRYsQq.jpeg"
    },
    {
        "id": 266,
        "category": "for sale",
        "name": "Bungalow for sale in ongata rongai",
        "price": 13000000,
        "period": "forever",
        "location": "Ongata Rongai, Kenya",
        "lat": -1.3935188476011766,
        "lng": 36.74174860933841,
        "file": "/storage/uploads/files/pEOUrzbeGCnCSBG34K0Z2df46YosEaJdtKOyNEwk.jpeg"
    },
    {
        "id": 265,
        "category": "for rent",
        "name": "2 bedroom house for rent in Kihara gachie",
        "price": 30000,
        "period": "month",
        "location": "Gachie, Kenya",
        "lat": -1.2157290429617957,
        "lng": 36.770678615056106,
        "file": "/storage/uploads/files/Nk6FjeFoy06saxR7kO7bUEfzUodxE0kLFpsXsUbX.jpeg"
    },
    {
        "id": 264,
        "category": "for sale",
        "name": "Kayole apartment building for sale",
        "price": 12000000,
        "period": "forever",
        "location": "Kayole, Nairobi, Kenya",
        "lat": -1.2768287787763564,
        "lng": 36.91823764334945,
        "file": "/storage/uploads/files/2kGMunaDlYRz2zNbUKEhHgiVIeZ04d5cBohKAFBl.jpeg"
    },
    {
        "id": 263,
        "category": "for sale",
        "name": "Karen shopping centre luxurious 4 bedroom house for sale",
        "price": 100000000,
        "period": "forever",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.316866,
        "lng": 36.6903289,
        "file": "/storage/uploads/files/ybS0fZgnOaIba7TdAFOG3KD2JhzkL54iHeNEqZTh.jpeg"
    },
    {
        "id": 262,
        "category": "for sale",
        "name": "Karen office for rent",
        "price": 250000,
        "period": "month",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3152463724507522,
        "lng": 36.68999783835789,
        "file": "/storage/uploads/files/bd43gEL3MFcLbDZe4mFkCiEHKSAWkPUQimKJZSGL.jpeg"
    },
    {
        "id": 261,
        "category": "for sale",
        "name": "Beautiful Maisonnette for sale in thika greens",
        "price": 30000000,
        "period": "forever",
        "location": "Thika, Kenya",
        "lat": -1.0363279824346192,
        "lng": 37.08319137677456,
        "file": "/storage/uploads/files/Qmqb1qjHuOMHczjn6qz8LxrhHjqgABVOxMUr2T9o.jpeg"
    },
    {
        "id": 260,
        "category": "for sale",
        "name": "Serene gated community in Windsor golf club, Kigwa lane, Kiambu Road",
        "price": 22000000,
        "period": "forever",
        "location": "Kiambu Road, Kenya",
        "lat": -1.220122990806521,
        "lng": 36.8600998539953,
        "file": "/storage/uploads/files/TY2GjBMYtyVOx1QE5wwDzDTIqvN2sD4qIYN1tff8.jpeg"
    },
    {
        "id": 259,
        "category": "for sale",
        "name": "Kahawa West apartment for sale",
        "price": 11500000,
        "period": "forever",
        "location": "Kahawa West, Githurai, Kenya",
        "lat": -1.1819367998415775,
        "lng": 36.904072986584495,
        "file": "/storage/uploads/files/JXN48r87OW09CfkoqHKdpZWzTSuIQ9UdqM6aB5MU.jpeg"
    },
    {
        "id": 258,
        "category": "for sale",
        "name": "Whole flat for sale in Kiamumbi",
        "price": 20000000,
        "period": "forever",
        "location": "Kiamumbi, Kenya",
        "lat": -1.1818622489566701,
        "lng": 36.87486887508772,
        "file": "/storage/uploads/files/LyqSmR7rekmdN9OjehFl5wTgeDjpUVU0dCSjVcNZ.jpeg"
    },
    {
        "id": 257,
        "category": "for sale",
        "name": "Githurai block of apartment for sale",
        "price": 26000000,
        "period": "forever",
        "location": "Githurai 44, Githurai, Kenya",
        "lat": -1.1979855439823264,
        "lng": 36.91052111543324,
        "file": "/storage/uploads/files/eq9aTB6AtqEnmCMpEmh7ssd1KLO3t57MQwVuAQu4.jpeg"
    },
    {
        "id": 256,
        "category": "for sale",
        "name": "Donholm whole flat for sale",
        "price": 25000000,
        "period": "forever",
        "location": "Donholm, Nairobi, Kenya",
        "lat": -1.296145599238391,
        "lng": 36.890008224193394,
        "file": "/storage/uploads/files/d9qndn4DGQNnnhMXR2rG9eJwMrDAaktnUSVZlH7p.jpeg"
    },
    {
        "id": 255,
        "category": "for sale",
        "name": "Githurai kimbo flat for sale",
        "price": 5500000,
        "period": "forever",
        "location": "Githurai Kimbo Armoury, Kenya",
        "lat": -1.217821334450589,
        "lng": 36.95469161093985,
        "file": "/storage/uploads/files/OUBQI2eFy81ErdGxuXzArtUhpn7q3uqqeM1pk53z.jpeg"
    },
    {
        "id": 254,
        "category": "for sale",
        "name": "Watamu Beach house for sale",
        "price": 27000000,
        "period": "forever",
        "location": "Watamu, Kenya",
        "lat": -3.341247459695774,
        "lng": 40.029169297841634,
        "file": "/storage/uploads/files/qWc6u3HaMPATUfKKyP2tEMFEmgc22Bb9DFM5J1Bc.jpeg"
    },
    {
        "id": 253,
        "category": "for sale",
        "name": "4 bedroom house for sale in Imara Daima",
        "price": 10500000,
        "period": "forever",
        "location": "Imara Daima Estate, Nairobi, Kenya",
        "lat": -1.3219800468153085,
        "lng": 36.88103922248878,
        "file": "/storage/uploads/files/Lh538HTFDYBvA6AXU2FeJgBtTJcimttg6lZB4vfk.jpeg"
    },
    {
        "id": 252,
        "category": "for sale",
        "name": "Incomplete 3 bedroom apartment for sale in Kangundo road",
        "price": 5500000,
        "period": "forever",
        "location": "Kangundo Road, Kenya",
        "lat": -1.272179111442438,
        "lng": 36.896369825207564,
        "file": "/storage/uploads/files/9Q2LwnpPixNOLiFmIKlU2cRlKLEJmdAd3gzMvPNy.jpeg"
    },
    {
        "id": 251,
        "category": "for sale",
        "name": "Villa for sale in Kiambu Road",
        "price": 28000000,
        "period": "forever",
        "location": "Kiambu Road, Kenya",
        "lat": -1.2141917373678464,
        "lng": 36.837766136258274,
        "file": "/storage/uploads/files/VzLn3k2xzPxO0XKsTdFWgjAHW2cxagOW6xsa73hN.jpeg"
    },
    {
        "id": 250,
        "category": "for sale",
        "name": "Modern and beautiful unfurnished mansion at Runda",
        "price": 100000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2155288506934465,
        "lng": 36.81501388549805,
        "file": "/storage/uploads/files/ev2a5CvCd75zoaaFhypha7AnkG0Z7PAT2FUqFvEF.jpeg"
    },
    {
        "id": 249,
        "category": "for sale",
        "name": "Beautiful house at the heart of Karen",
        "price": 70000000,
        "period": "forever",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3150992747593067,
        "lng": 36.69051282248875,
        "file": "/storage/uploads/files/3iTJqqoswNzxibrYXFgIHtDxJ5SQ6hK8MftdRQkq.jpeg"
    },
    {
        "id": 248,
        "category": "for sale",
        "name": "Beautiful bungalow for sale in Kariobangi South",
        "price": 5500000,
        "period": "forever",
        "location": "Kariobangi South, Nairobi, Kenya",
        "lat": -1.2632192122707446,
        "lng": 36.88640692273079,
        "file": "/storage/uploads/files/hjZSnHKHW1cOVP1iIxofvxTC8NKLTf6E1ovqivQx.jpeg"
    },
    {
        "id": 247,
        "category": "for sale",
        "name": "Beautiful 2 bedroom house for sale in Kiambu Nduota",
        "price": 5500000,
        "period": "forever",
        "location": "Kiambu, Kenya",
        "lat": -1.173975360532001,
        "lng": 36.82931892462402,
        "file": "/storage/uploads/files/BajhKSSnHqDgxpYTf3upGIvBY65IWBcum31luTGT.jpeg"
    },
    {
        "id": 246,
        "category": "for sale",
        "name": "Beautiful 5 bedroom house for sale in Old Muthaiga",
        "price": 165000000,
        "period": "forever",
        "location": "Muthaiga, Nairobi, Kenya",
        "lat": -1.2501324016403297,
        "lng": 36.82403069918695,
        "file": "/storage/uploads/files/bGjm4ZPyoxV5jByI1nNWcCzUT3T0QuwIw2SHKO8w.jpeg"
    },
    {
        "id": 245,
        "category": "for sale",
        "name": "Beautiful 4 bedroom house for sale in old Muthaiga",
        "price": 300000000,
        "period": "forever",
        "location": "Muthaiga, Nairobi, Kenya",
        "lat": -1.2493233331745335,
        "lng": 36.821701006826004,
        "file": "/storage/uploads/files/dCk57iRLma1H5GCcbNJh9jiG6GVv15ElydaAJ4cX.jpeg"
    },
    {
        "id": 244,
        "category": "for sale",
        "name": "4 bedroom mansion for sale in Ruiru membley estate",
        "price": 32000000,
        "period": "forever",
        "location": "Membley Estate, Ruiru, Kenya",
        "lat": -1.163664736816624,
        "lng": 36.9314691815597,
        "file": "/storage/uploads/files/WWpoo8sTQKLjXgKMQod96qV3xpea2Y01eYYePyDg.jpeg"
    },
    {
        "id": 243,
        "category": "for sale",
        "name": "Masionettte for sale in Buruburu phase 4",
        "price": 11000000,
        "period": "forever",
        "location": "Buru-Buru Phase 4, Nairobi, Kenya",
        "lat": -1.2873658482547445,
        "lng": 36.8824792440202,
        "file": "/storage/uploads/files/qOaz6VGlQyxET39gsD0VhwVd02pQnxDWGH0Xnle6.jpeg"
    },
    {
        "id": 242,
        "category": "for sale",
        "name": "Apartment complex for sale in Ruaka",
        "price": 165000000,
        "period": "forever",
        "location": "Ruaka, Kenya",
        "lat": -1.204131811142026,
        "lng": 36.780501490956865,
        "file": "/storage/uploads/files/ZsYYEhRjNw3L0qNeRvEJ0Cg2gyTQ12EKs45pUfaV.jpeg"
    },
    {
        "id": 241,
        "category": "for rent",
        "name": "Apartment for rent and sale in Lavington",
        "price": 180000,
        "period": "month",
        "location": "Lavington, Nairobi, Kenya",
        "lat": -1.2772192820149164,
        "lng": 36.779772506448865,
        "file": "/storage/uploads/files/5MAtmcS8LKRjKFQrDw4MXJ38Upqyl6G6YUgP8MjA.jpeg"
    },
    {
        "id": 240,
        "category": "for sale",
        "name": "Upper hill Nairobi Hotel and Restaurant for sale",
        "price": 280000000,
        "period": "forever",
        "location": "Upper Hill, Nairobi, Kenya",
        "lat": -1.2973492820224009,
        "lng": 36.81120744754865,
        "file": "/storage/uploads/files/m1PPk4M7PDpPIUxlODsq0z3nWGeaQAFj5sHX015H.jpeg"
    },
    {
        "id": 236,
        "category": "for sale",
        "name": "Apartment for sale in Kileleshwa",
        "price": 25000000,
        "period": "forever",
        "location": "Kileleshwa Estate, Nairobi, Kenya",
        "lat": -1.2800272729746185,
        "lng": 36.78769793193636,
        "file": "/storage/uploads/files/630OqjWX49bj1DcLhTcPHhab5mIhFDP6YBkA5htZ.jpeg"
    },
    {
        "id": 235,
        "category": "for sale",
        "name": "Migaa apartments and land for sale",
        "price": 10000000,
        "period": "forever",
        "location": "Migaa Road, Kenya",
        "lat": -1.4372190502646673,
        "lng": 36.68025861560398,
        "file": "/storage/uploads/files/GsrLvUSeKndfLMZ1G2GpbdJOXo3RrEQ8uB7rctcV.jpeg"
    },
    {
        "id": 234,
        "category": "for sale",
        "name": "Mansion for sale in Ruiru Membley estate",
        "price": 20000000,
        "period": "forever",
        "location": "Membley Estate, Ruiru, Kenya",
        "lat": -1.1633950392185226,
        "lng": 36.9314691815597,
        "file": "/storage/uploads/files/LFzNRJa4ERSScB6QKS3DAiDU4XTcaledcPw9uREE.jpeg"
    },
    {
        "id": 233,
        "category": "for sale",
        "name": "Ruiru membley estate mansion for rent or sale",
        "price": 18000000,
        "period": "forever",
        "location": "Membley Estate, Ruiru, Kenya",
        "lat": -1.1633214848475149,
        "lng": 36.93156727340091,
        "file": "/storage/uploads/files/nwjgzf7S2upWBrSNSgH9ZxGIffWrXxLpAKNqACG4.jpeg"
    },
    {
        "id": 232,
        "category": "for sale",
        "name": "3 bedroom bungalow in Matasi off Forest line road",
        "price": 10000000,
        "period": "forever",
        "location": "Forest Line Road, Ngong, Kenya",
        "lat": -1.3667260844503393,
        "lng": 36.651856208227414,
        "file": "/storage/uploads/files/rW0tjmADil2nmmSwQap3YTfwF9RDa4Cci7WA9Xv7.jpeg"
    },
    {
        "id": 231,
        "category": "for sale",
        "name": "Karen Kuwinda off Lang'ata road 3 acre land for sale",
        "price": 58000000,
        "period": "forever",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3146824909367283,
        "lng": 36.68958094737791,
        "file": "/storage/uploads/files/Odw1RdDePT9VUyf8r7JfGmnBkWDiHRgyMTOhoUDO.jpeg"
    },
    {
        "id": 230,
        "category": "for rent",
        "name": "Apartment for rent in Kileleshwa",
        "price": 150000,
        "period": "month",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.280271546868808,
        "lng": 36.78439619918695,
        "file": "/storage/uploads/files/P0cpOF3A3SpifVhOq5tsO8FOpFTlVu1tsMB5ugKJ.jpeg"
    },
    {
        "id": 229,
        "category": "for sale",
        "name": "Waiyaki way 2 & 3 bedroom apartment for sale",
        "price": 11850000,
        "period": "forever",
        "location": "Waiyaki Way, Nairobi, Kenya",
        "lat": -1.2593931208876061,
        "lng": 36.76006222231799,
        "file": "/storage/uploads/files/YoxayxnvpcWYSsF4FTUWA2xxSrwg88lKDsHCRaoL.jpeg"
    },
    {
        "id": 228,
        "category": "for sale",
        "name": "Flat for sale whole block in Ongata Rongai",
        "price": 50000000,
        "period": "forever",
        "location": "Ongata Rongai, Kenya",
        "lat": -1.393592395377368,
        "lng": 36.744961130889585,
        "file": "/storage/uploads/files/BAWJN1C67yYMe5QX9FXZWycY7Iegb7OBx0XJnVPI.jpeg"
    },
    {
        "id": 227,
        "category": "for sale",
        "name": "Syokimau Mansion for sale",
        "price": 24000000,
        "period": "forever",
        "location": "Syokimau, Kenya",
        "lat": -1.3594865459856524,
        "lng": 36.940649302040846,
        "file": "/storage/uploads/files/2u5E4dxw28KdSaGOxH2MGEGgWAFnFLq7soDeRH7n.jpeg"
    },
    {
        "id": 226,
        "category": "for sale",
        "name": "Modern unfurnished mansion in Runda",
        "price": 100000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2142894548720924,
        "lng": 36.8165273452783,
        "file": "/storage/uploads/files/Eh1o7wSEEk42yQLGBUnevUVPq28GQcINxzYSfVFQ.jpeg"
    },
    {
        "id": 225,
        "category": "for sale",
        "name": "Thika Salama estate bungalow for sale",
        "price": 6000000,
        "period": "forever",
        "location": "Salama House, Mama Ngina Drive, Thika, Kenya",
        "lat": -1.03146834186191,
        "lng": 37.07416280700751,
        "file": "/storage/uploads/files/uGZK3QMyYneepCOsI5ygBwnUUXfxdPTfpDUvlbVb.jpeg"
    },
    {
        "id": 224,
        "category": "for sale",
        "name": "Tofina Delta 1 & 2 APARTMENTS",
        "price": 6000000,
        "period": "year",
        "location": "Gem Lane, Nairobi, Kenya",
        "lat": -1.272405085859853,
        "lng": 36.790612590921796,
        "file": null
    },
    {
        "id": 223,
        "category": "for rent",
        "name": "Kitisuru 4 bedroom house for rent",
        "price": 250000,
        "period": "month",
        "location": "Kitisuru, Nairobi, Kenya",
        "lat": -1.2201812835732466,
        "lng": 36.80036763046187,
        "file": "/storage/uploads/files/Zt6AcZgSYlwhcFZMmfGEQpPOmvKObg1la4CmLIf4.jpeg"
    },
    {
        "id": 222,
        "category": "for sale",
        "name": "Runda Mimosa 6 bedroom house for sale",
        "price": 120000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2112247616701068,
        "lng": 36.81807229832572,
        "file": "/storage/uploads/files/57gBdRp61hlEd3zB8oqjcj9IJsmMt9tuenHCXkV6.jpeg"
    },
    {
        "id": 221,
        "category": "for sale",
        "name": "Ruiru Kiambu Kenyatta road off thika road house for sale",
        "price": 5000000,
        "period": "forever",
        "location": "Ruiru, Kiambu Province, Kenya",
        "lat": -1.148052321733092,
        "lng": 36.96053923130241,
        "file": "/storage/uploads/files/ToBrkTxRFx3tYvGaFzGOix40MuGeSRow2kTqXiXA.jpeg"
    },
    {
        "id": 220,
        "category": "for rent",
        "name": "Nyari Kitisuru 4 bedroom house for rent",
        "price": 350000,
        "period": "month",
        "location": "Nyari, Kitisuru, Nairobi, Kenya",
        "lat": -1.2309762996892701,
        "lng": 36.78817780892562,
        "file": "/storage/uploads/files/SxH7KcYOkVdG0H8o9BWhyxsx5ytCmOo4tCEMg2BV.jpeg"
    },
    {
        "id": 219,
        "category": "for sale",
        "name": "Plot for sale 50x100",
        "price": 150000,
        "period": "forever",
        "location": "Matuu Ekalakala Road, Kenya",
        "lat": -1.1431324226109596,
        "lng": 37.55236725379258,
        "file": null
    },
    {
        "id": 218,
        "category": "for sale",
        "name": "Cottages for sale in Diani at galu kinondo",
        "price": 35000000,
        "period": "forever",
        "location": "Diani, Kenya",
        "lat": -4.288618697809976,
        "lng": 39.53766567698096,
        "file": "/storage/uploads/files/wC8g8Cf2RS2e2uNY1DLQI7RSVoBL8nFbLMdUiRWq.jpeg"
    },
    {
        "id": 216,
        "category": "for sale",
        "name": "Exquisite apartments for sale in Lavington Kileleshwa Nairobi",
        "price": 21000000,
        "period": "forever",
        "location": "Lavington, Kileleshwa, Nairobi, Kenya",
        "lat": -1.2808477889478223,
        "lng": 36.77849730661961,
        "file": "/storage/uploads/files/er1vmk0nA74ycwMMMU8i2aCMDUv3i6nijZZbzCfj.jpeg"
    },
    {
        "id": 214,
        "category": "for sale",
        "name": "House and Plot for sale",
        "price": 4000000,
        "period": "forever",
        "location": "Umoja, Nairobi, Kenya",
        "lat": -1.2739228492418868,
        "lng": 36.89887046813965,
        "file": "/storage/uploads/files/cj7myxXNQ7MXZtGgKQpqI9MwNegfg2lFW6eHtrT4.jpeg"
    },
    {
        "id": 213,
        "category": "for sale",
        "name": "Apartments for sale",
        "price": 11,
        "period": "week",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.2807389,
        "lng": 36.78168639999999,
        "file": "/storage/uploads/files/TE93QtqJSiDG5l11Rtf9eg0sXFOVsgBg12CMTPw1.jpeg"
    },
    {
        "id": 212,
        "category": "for sale",
        "name": "Plot near likoni pplice station for sale",
        "price": 155000000,
        "period": "forever",
        "location": "Mombasa, Kenya",
        "lat": -4.044502978610449,
        "lng": 39.66733593126672,
        "file": "/storage/uploads/files/mh12dGqn3XYaoznFIKQQQBw1fB7tlHqjzlcWWNfy.jpeg"
    },
    {
        "id": 211,
        "category": "for sale",
        "name": "Apartment for sale in Mombasa",
        "price": 80000000,
        "period": "forever",
        "location": "Mombasa, Kenya",
        "lat": -4.04203231048647,
        "lng": 39.66645310207649,
        "file": "/storage/uploads/files/UvBzGzsNveWM4HerAQ7xgS97g1SveoyabXD02YqK.jpeg"
    },
    {
        "id": 210,
        "category": "for sale",
        "name": "Commercial building for sale in Mombasa",
        "price": 80000000,
        "period": "forever",
        "location": "Mombasa, Kenya",
        "lat": -4.0441360443355165,
        "lng": 39.6667587810413,
        "file": "/storage/uploads/files/0eUKDglg4FkrhF8qA0VFZcXiDqWgnQDGOu4lxsYC.jpeg"
    },
    {
        "id": 209,
        "category": "for sale",
        "name": "Mombasa Kingorani house for sale",
        "price": 40000000,
        "period": "forever",
        "location": "Mombasa, Kenya",
        "lat": -4.0412739886537175,
        "lng": 39.666428579116186,
        "file": "/storage/uploads/files/FWbwOIqOAcghB94cAZURJznnyAX9DfJj1TGh3RGB.jpeg"
    },
    {
        "id": 208,
        "category": "for sale",
        "name": "Land for sale in Kilifi",
        "price": 35000000,
        "period": "forever",
        "location": "Kilifi, Kenya",
        "lat": -3.508960354849341,
        "lng": 39.905292857600685,
        "file": "/storage/uploads/files/Jur01w8Xp0MpXg9CT5Tjy0SjztovOIvD9hjeFsyv.jpeg"
    },
    {
        "id": 207,
        "category": "for sale",
        "name": "Diani beach hotel for sale",
        "price": 280000000,
        "period": "forever",
        "location": "Diani Beach Road, Diani Beach, Kenya",
        "lat": -4.280276164043912,
        "lng": 39.59376863772338,
        "file": "/storage/uploads/files/sYtAm2tY5W0UJIhBCwWoYfSa3qdrxZz3NalC75YA.jpeg"
    },
    {
        "id": 206,
        "category": "for sale",
        "name": "Cottages for sale",
        "price": 170000000,
        "period": "forever",
        "location": "Mombasa, Kenya",
        "lat": -4.040246578102094,
        "lng": 39.67216697474622,
        "file": "/storage/uploads/files/H8zWfvjogLfpL6rRUXc7oTOA3jUmpC5W6RcB9NLB.jpeg"
    },
    {
        "id": 205,
        "category": "for sale",
        "name": "Mombasa cbd commercial building for sale",
        "price": 450000000,
        "period": "forever",
        "location": "Mombasa, Kenya",
        "lat": -4.04116363858389,
        "lng": 39.66474667519349,
        "file": "/storage/uploads/files/YpYbTnRQzuJphKdb82ekVox0SPIDcL0h6JDiOtrU.jpeg"
    },
    {
        "id": 204,
        "category": "for sale",
        "name": "5 bedroom house for sale in Tassia Nairobi",
        "price": 9000000,
        "period": "forever",
        "location": "Tassia, Nairobi, Kenya",
        "lat": -1.3073393860071483,
        "lng": 36.89626542834153,
        "file": "/storage/uploads/files/WZNFfQwnTgLUm0kTECViwU2oecXO2HZoLglcAw1K.jpeg"
    },
    {
        "id": 203,
        "category": "for sale",
        "name": "Runda mumwe half an acre plot on quick sale",
        "price": 28000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.212891956407062,
        "lng": 36.81721399144095,
        "file": "/storage/uploads/files/wNbXKXSvs2mQRj3SfBtubfrx8HLPJE0IV70KNgLH.jpeg"
    },
    {
        "id": 202,
        "category": "for sale",
        "name": "2 bedroom Apartment for sale in Lavington",
        "price": 11500000,
        "period": "forever",
        "location": "Lavington, Nairobi, Kenya",
        "lat": -1.2800877663597876,
        "lng": 36.7774918613182,
        "file": "/storage/uploads/files/rKt5zSg7sy7912aNhFeRl5A9lnffwWtYFnmHX7Of.jpeg"
    },
    {
        "id": 201,
        "category": "for sale",
        "name": "Ridgeways stunning home for sale",
        "price": 90000000,
        "period": "forever",
        "location": "Ridgeways, Nairobi, Kenya",
        "lat": -1.2329415675099726,
        "lng": 36.85060812916711,
        "file": "/storage/uploads/files/iZadgM8e2oQdLh8mAHS9PHcMBAlXsfYrfpgd2N2E.jpeg"
    },
    {
        "id": 200,
        "category": "for sale",
        "name": "5 bedroom Maisonnette for sale in runda evergreen",
        "price": 150000000,
        "period": "forever",
        "location": "Runda Evergreen, Nairobi, Kenya",
        "lat": -1.2241528799825803,
        "lng": 36.83175086975098,
        "file": "/storage/uploads/files/nredybYEjufeWTSn7jzeswIVo9CsFeVQuPbagVzU.jpeg"
    },
    {
        "id": 199,
        "category": "for sale",
        "name": "Langata house behind sunvalley estate for sale",
        "price": 35000000,
        "period": "forever",
        "location": "Langata, Nairobi, Kenya",
        "lat": -1.3658580261262592,
        "lng": 36.74616657890983,
        "file": "/storage/uploads/files/CCVK4BNxVNtktv8a60VF0RTHMckDUEXBm0Wsjgei.jpeg"
    },
    {
        "id": 198,
        "category": "for rent",
        "name": "3 bedroom Apartments for rent in Lavington Riara road",
        "price": 80000,
        "period": "month",
        "location": "Lavington, Nairobi, Kenya",
        "lat": -1.281215542069992,
        "lng": 36.776584508512826,
        "file": "/storage/uploads/files/bTOx5FVDcPgLI8m6U3LiwYYxEhw4EppxgFSsJSUq.jpeg"
    },
    {
        "id": 197,
        "category": "for rent",
        "name": "2 bedroom apartment for rent in Lavington riara road",
        "price": 65000,
        "period": "month",
        "location": "Lavington, Nairobi, Kenya",
        "lat": -1.2817058812298818,
        "lng": 36.7760450020765,
        "file": "/storage/uploads/files/em6uppQYO8PJEhiQmSgXfpcAdotK2741HBoN2EY7.jpeg"
    },
    {
        "id": 196,
        "category": "for rent",
        "name": "Kileleshwa 2 bedroom apartment for rent",
        "price": 65000,
        "period": "month",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.283949085706408,
        "lng": 36.78209102978631,
        "file": "/storage/uploads/files/maunNe31u2mrPbctkumJ9rOKEgrNeZurPbCrjaHl.jpeg"
    },
    {
        "id": 195,
        "category": "for rent",
        "name": "Kileleshwa 2 bedroom apartment for rent",
        "price": 63500,
        "period": "month",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.2838755320223363,
        "lng": 36.780644169889776,
        "file": "/storage/uploads/files/kSG1PuFmOi9eG9ykc9zmNel4XgPKCHv0CC0m4hge.jpeg"
    },
    {
        "id": 194,
        "category": "for rent",
        "name": "2 bedroom apartment for rent in Kileleshwa",
        "price": 60000,
        "period": "month",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.2831890588016226,
        "lng": 36.78243435384989,
        "file": "/storage/uploads/files/1jvIQhNaPNBsIXKuReST8WP8WAHkHsIAzrdWNGci.jpeg"
    },
    {
        "id": 193,
        "category": "for rent",
        "name": "Kileleshwa 2 bedroom apartment for rent",
        "price": 60000,
        "period": "month",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.284120703977844,
        "lng": 36.78223816820296,
        "file": "/storage/uploads/files/xZAYaIlFyAPnPmRL4I0g1QA4WEsK9so5MrFXM1z8.jpeg"
    },
    {
        "id": 192,
        "category": "for rent",
        "name": "Kileleshwa apartments for rent",
        "price": 65000,
        "period": "month",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.282134832459337,
        "lng": 36.77875589474329,
        "file": "/storage/uploads/files/f7iZHy72KOe4di4zql6XG79tunIjKyIVDc6sJvXd.jpeg"
    },
    {
        "id": 191,
        "category": "for sale",
        "name": "2, 3, and studio apartments for sale in Kileleshwa",
        "price": 7500000,
        "period": "forever",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.2829438913394882,
        "lng": 36.77828995653304,
        "file": "/storage/uploads/files/XLEXYr5HAqPUJE4ROURA7ayGAyExz4FF6gXM7Jhs.jpeg"
    },
    {
        "id": 190,
        "category": "for rent",
        "name": "Apartments for rent in Kileleshwa",
        "price": 90000,
        "period": "month",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.2821103189119727,
        "lng": 36.78157604565545,
        "file": "/storage/uploads/files/b0XyaPoRhfpsmuDg21V4773Bcg13vcu7ZMCk1rf9.jpeg"
    },
    {
        "id": 189,
        "category": "for sale",
        "name": "3 bedroom with sq apartment for sale in kileleshwa",
        "price": 18000000,
        "period": "forever",
        "location": "Kileleshwa, Nairobi, Kenya",
        "lat": -1.283066475400824,
        "lng": 36.781085585794564,
        "file": "/storage/uploads/files/TjlFIKARuh9veDyigDrNIS7FUIvU5vIsWCkCafiV.jpeg"
    },
    {
        "id": 188,
        "category": "for sale",
        "name": "4 bedroom ongata rongai rimpa for sale",
        "price": 17000000,
        "period": "forever",
        "location": "Ongata Rongai, Kenya",
        "lat": -1.3919008024905697,
        "lng": 36.74866411295648,
        "file": "/storage/uploads/files/1MojuDaRSkjMsCJh40NNyHUnj58FYHWVJtP0hsZc.jpeg"
    },
    {
        "id": 187,
        "category": "for sale",
        "name": "House on distress sale in Kiserian",
        "price": 4500000,
        "period": "forever",
        "location": "Kiserian, Kenya",
        "lat": -1.4233957372891033,
        "lng": 36.69378607722301,
        "file": "/storage/uploads/files/UwRh8Cl1BGzHfM7XISaWWkGqoHAYixHnAlrrBvhP.jpeg"
    },
    {
        "id": 186,
        "category": "for sale",
        "name": "Orange land",
        "price": 2000000000,
        "period": "fortnight",
        "location": "Mombasa, Kenya",
        "lat": -3.812100835007102,
        "lng": 39.81972007084766,
        "file": "/storage/uploads/files/Xx6MidPwa7FWbftt7t2cM11xKAXRfi4tCMIdq6nl.jpeg"
    },
    {
        "id": 184,
        "category": "for sale",
        "name": "3 bedroom ongata rongai house for sale",
        "price": 6500000,
        "period": "forever",
        "location": "Ongata Rongai, Kenya",
        "lat": -1.3932246564734478,
        "lng": 36.74613823625828,
        "file": "/storage/uploads/files/hqLwGGY6NUVkMHMTdRD7YQxWQTPOkAZCdvUi3O4q.jpeg"
    },
    {
        "id": 183,
        "category": "for sale",
        "name": "Joska petrol station for sale",
        "price": 150000000,
        "period": "forever",
        "location": "Joska, Kenya",
        "lat": -1.2859786668537156,
        "lng": 37.09723059054408,
        "file": "/storage/uploads/files/IVcUwfKNeNLt0mfYxsSxHgE1V1F2Ra8ePdegigjs.jpeg"
    },
    {
        "id": 182,
        "category": "for sale",
        "name": "Kitengela petrol station for sale",
        "price": 90000000,
        "period": "forever",
        "location": "Kitengela, Athi River, Kenya",
        "lat": -1.4736940963729936,
        "lng": 36.96378832211161,
        "file": "/storage/uploads/files/GfwIwCQns8hNbqTPIoR7jQRJ8cvZK9YLziXWu0g9.jpeg"
    },
    {
        "id": 181,
        "category": "for sale",
        "name": "Petrol station for sale in kayole",
        "price": 70000000,
        "period": "forever",
        "location": "Kayole, Nairobi, Kenya",
        "lat": -1.276583607432813,
        "lng": 36.918703581559704,
        "file": "/storage/uploads/files/KhbPYa2uboVlBh1X6ZJbl8gYrncLknbB01YNspTd.jpeg"
    },
    {
        "id": 180,
        "category": "for sale",
        "name": "Ruaka block of studio apartments for sale",
        "price": 50000000,
        "period": "forever",
        "location": "Ruaka, Kenya",
        "lat": -1.2040092227600083,
        "lng": 36.77986389267933,
        "file": "/storage/uploads/files/zhwpsTX38yUAOJqCjkpIWAQ5neQprnWtJ6cG2KYO.jpeg"
    },
    {
        "id": 179,
        "category": "for sale",
        "name": "4 bedroom house for sale in Karen",
        "price": 145000000,
        "period": "forever",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3153934740615063,
        "lng": 36.69379891161116,
        "file": "/storage/uploads/files/A3hPlEVoKYYT5aY2eYjXNrCoKu0BsceDcZag62ut.jpeg"
    },
    {
        "id": 178,
        "category": "for sale",
        "name": "Ruaka flats and apartments for sale",
        "price": 160000000,
        "period": "forever",
        "location": "Ruaka, Kenya",
        "lat": -1.2030775506147442,
        "lng": 36.78148241329798,
        "file": "/storage/uploads/files/bPUEKK2xfv2XQjSAJV8CGHezIlWWuC0ibk4g59IL.jpeg"
    },
    {
        "id": 177,
        "category": "for sale",
        "name": "Mombasa nyali beach plot with a house for sale",
        "price": 59000000,
        "period": "forever",
        "location": "Nyali, Mombasa, Kenya",
        "lat": -4.05312132692946,
        "lng": 39.70013169877418,
        "file": "/storage/uploads/files/sif5VK9zxzUy3I5qKxxjPXU6QVij8vNEGhiHJE7j.jpeg"
    },
    {
        "id": 176,
        "category": "for sale",
        "name": "Mombasa nyali house for sale",
        "price": 70000000,
        "period": "forever",
        "location": "Nyali, Mombasa, Kenya",
        "lat": -4.052999014212388,
        "lng": 39.70101452665474,
        "file": "/storage/uploads/files/lGsP0Hgeaz32Q8IYMVz9CSOCFgE03nwfJbERPEN1.jpeg"
    },
    {
        "id": 175,
        "category": "for sale",
        "name": "Upper hill commercial land for sale",
        "price": 420000000,
        "period": "forever",
        "location": "Upper Hill, Nairobi, Kenya",
        "lat": -1.294824053517425,
        "lng": 36.808975849648256,
        "file": "/storage/uploads/files/OpnU8BD6LMBywERG0c8QJB1AEnnAr7MJE1PRsmxZ.jpeg"
    },
    {
        "id": 174,
        "category": "for sale",
        "name": "Kilimani Lavington commercial 1 acre land on quick sale",
        "price": 250000000,
        "period": "forever",
        "location": "Lavington, Nairobi, Kenya",
        "lat": -1.27761155186643,
        "lng": 36.777565431508776,
        "file": "/storage/uploads/files/Ab0pKmuH1iOKMD6HwwfEcKzyz9ssglsJ3gEo6hUf.jpeg"
    },
    {
        "id": 173,
        "category": "for sale",
        "name": "Ruiru murera kiambu new 3 bedroom house for sale",
        "price": 5800000,
        "period": "forever",
        "location": "Ruiru, Kenya",
        "lat": -1.1504796201699738,
        "lng": 36.96026947677458,
        "file": "/storage/uploads/files/WAa00hvzdWbtoMFYsvkHo9ga80wt2KBXSSoFG20v.jpeg"
    },
    {
        "id": 172,
        "category": "for sale",
        "name": "Nanyuki town commercial plot for sale",
        "price": 13000000,
        "period": "forever",
        "location": "Nanyuki, Kenya",
        "lat": 0.010336754039115029,
        "lng": 37.071727576980955,
        "file": "/storage/uploads/files/mqDbK5zntpSaxHDeG2tPUTKooXp6yZkjRtSY86rN.jpeg"
    },
    {
        "id": 171,
        "category": "for sale",
        "name": "Ngong Roimen Matasia House for sale",
        "price": 5900000,
        "period": "forever",
        "location": "Ngong, Kenya",
        "lat": -1.35469026542926,
        "lng": 36.670434329615574,
        "file": "/storage/uploads/files/hh1LAILANOrNtxfl5sZEVayzoCcocJ00Y14Z0tmR.jpeg"
    },
    {
        "id": 170,
        "category": "for sale",
        "name": "Imara Daima townhouse for sale",
        "price": 10500000,
        "period": "forever",
        "location": "Imara Daima Estate, Nairobi, Kenya",
        "lat": -1.322617476612288,
        "lng": 36.87794931835846,
        "file": "/storage/uploads/files/aqo9tvRDsN69RTejfj11VN7vo0apuqCj7VzRVbp6.jpeg"
    },
    {
        "id": 169,
        "category": "for sale",
        "name": "Karen house for sale",
        "price": 25000000,
        "period": "forever",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3151728249154435,
        "lng": 36.69014497677454,
        "file": "/storage/uploads/files/QFzMMexEkELxINg2bntIZOyCJ21vC6ZlFKSEfwm6.jpeg"
    },
    {
        "id": 168,
        "category": "for sale",
        "name": "Villa for sale in Lavington",
        "price": 100000000,
        "period": "forever",
        "location": "Lavington, Nairobi, Kenya",
        "lat": -1.2807742404120128,
        "lng": 36.77550549498534,
        "file": "/storage/uploads/files/iIGd4KLt7wQ7t5qLOKACu5xPXCJrj1N0KdmAdk00.jpeg"
    },
    {
        "id": 167,
        "category": "for sale",
        "name": "4 bedrooms Maisonnette for sale in runda",
        "price": 35000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2140197635285008,
        "lng": 36.81535023859993,
        "file": "/storage/uploads/files/Lr73UZsfjypmKIPvFBFoYHUG99UHjOS8C2xMfLWM.jpeg"
    },
    {
        "id": 166,
        "category": "for sale",
        "name": "Emali plots for sale",
        "price": 45000000,
        "period": "forever",
        "location": "Emali, Kenya",
        "lat": -2.078191783187731,
        "lng": 37.4708890914917,
        "file": "/storage/uploads/files/T5HdumYGc0pQKgnqkEkC6vz7RQAB0WrvuEwYU77R.jpeg"
    },
    {
        "id": 165,
        "category": "for sale",
        "name": "Beach plots on Kikambala for sale",
        "price": 140000000,
        "period": "forever",
        "location": "Kikambala, Kenya",
        "lat": -3.8165511640522007,
        "lng": 39.81369659994124,
        "file": "/storage/uploads/files/UdEDsjcxmdUq8Mmqc0BfwYF3ORJzcxFba9qLoJVm.jpeg"
    },
    {
        "id": 163,
        "category": "for sale",
        "name": "Lavington Kilimani 5 bedroom house for sale",
        "price": 62000000,
        "period": "forever",
        "location": "Lavington, Nairobi, Kenya",
        "lat": -1.280136801349047,
        "lng": 36.77506407973539,
        "file": "/storage/uploads/files/8ePxhn8F2Lwcj0seddSWMdiNhoTUrfxNazsaulqy.jpeg"
    },
    {
        "id": 162,
        "category": "for sale",
        "name": "Membley Ruiru 6 bedroom house for sale",
        "price": 20500000,
        "period": "forever",
        "location": "Membley Estate, Ruiru, Kenya",
        "lat": -1.1656261749030894,
        "lng": 36.925044141731526,
        "file": "/storage/uploads/files/JkcBue9qSjSKl5rkpDyYdgmwlsdi8nfsLlAeTA3f.jpeg"
    },
    {
        "id": 161,
        "category": "for sale",
        "name": "Membley estate ruiru northern bypass house for sale",
        "price": 36000000,
        "period": "forever",
        "location": "Membley Estate, Ruiru, Kenya",
        "lat": -1.1662636411687541,
        "lng": 36.92607410933841,
        "file": "/storage/uploads/files/cfd4zsMY2ehTHQzEATzOAR9Ea1DTQj39OTL5qiEG.jpeg"
    },
    {
        "id": 160,
        "category": "for rent",
        "name": "Mugutha Ruiru 4 bedrooms house for rent",
        "price": 40000,
        "period": "month",
        "location": "Ruiru, Kenya",
        "lat": -1.1597872898592037,
        "lng": 36.96136608140488,
        "file": "/storage/uploads/files/L23f8H4csEOFaiNtpOWXJifXIAJMQTiiGPVzNcK5.jpeg"
    },
    {
        "id": 159,
        "category": "for rent",
        "name": "Kilimani Lavington Riara road 3 bedroom apartment for rent",
        "price": 120000,
        "period": "month",
        "location": "Riara Road, Kilimani, Nairobi, Kenya",
        "lat": -1.2992794231586096,
        "lng": 36.76553249359131,
        "file": "/storage/uploads/files/nRcR3LiqoS9EimQPlerlNQ9EbGb3DOzUWE3D4x6M.jpeg"
    },
    {
        "id": 158,
        "category": "for sale",
        "name": "4 bedroom bungalow in Marula for sale",
        "price": 170000000,
        "period": "forever",
        "location": "Marula Lane, Nairobi, Kenya",
        "lat": -1.3355710678196029,
        "lng": 36.71014934334945,
        "file": "/storage/uploads/files/kwcdEqhg82PFCGFgrF164MvEv29pw21RUMJEv1tG.jpeg"
    },
    {
        "id": 157,
        "category": "for sale",
        "name": "Half an acre land for sale at Old Runda",
        "price": 50000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2119602886168805,
        "lng": 36.81324125484622,
        "file": "/storage/uploads/files/yKNqGBoQCGDkPStn6ui6LIe18NtsGmVagRcYeoRx.jpeg"
    },
    {
        "id": 156,
        "category": "for sale",
        "name": "6 bedroom house for sale in runda",
        "price": 200000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.218702609856992,
        "lng": 36.80936661238462,
        "file": "/storage/uploads/files/Yu9wsA3MK3RMi4eRi3NWXEPsEskdpzoulvXUdiSb.jpeg"
    },
    {
        "id": 155,
        "category": "for sale",
        "name": "Acacia Premier villas in Kitengela",
        "price": 8500000,
        "period": "forever",
        "location": "Kitengela, Athi River, Kenya",
        "lat": -1.4718799896045747,
        "lng": 36.96273382957992,
        "file": "/storage/uploads/files/9JjY9LribjhgAdzeAHDJLQSACAXLDHF37IJ3KwwI.jpeg"
    },
    {
        "id": 154,
        "category": "for sale",
        "name": "Fully furnished salon for sale in Utawala Nairobi",
        "price": 4500000,
        "period": "forever",
        "location": "Utawala Complex, Eastern Bypass, Nairobi, Kenya",
        "lat": -1.2791945388313082,
        "lng": 36.963857345655455,
        "file": "/storage/uploads/files/QoUILoPo2a70JtgAcZxchqbBH0DvYrx40ZFFSZuC.jpeg"
    },
    {
        "id": 153,
        "category": "for sale",
        "name": "Cascadia apartments two rivers mall in Runda",
        "price": 12300000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.2117575880057356,
        "lng": 36.79734986028624,
        "file": "/storage/uploads/files/HimpxWjzudTWElnstFeFAWoDjVoBPtAbjlvi7Kcj.jpeg"
    },
    {
        "id": 152,
        "category": "for sale",
        "name": "Royalton eldoret house for sale",
        "price": 7500000,
        "period": "forever",
        "location": "Eldoret, Kenya",
        "lat": 0.513003886286279,
        "lng": 35.269301999941256,
        "file": "/storage/uploads/files/XhA3aVU6GUcvylQR1G9NE1lmV2kgIL4haeyZKGvo.jpeg"
    },
    {
        "id": 151,
        "category": "for sale",
        "name": "Royalton Eldoret a quarter land for sale",
        "price": 3500000,
        "period": "forever",
        "location": "Eldoret, Kenya",
        "lat": 0.516951935858659,
        "lng": 35.269915077223,
        "file": "/storage/uploads/files/vXbFMxfJRtix3JAYSBuOZ9Pr6DbgwnwQF7uP8ghO.jpeg"
    },
    {
        "id": 150,
        "category": "for rent",
        "name": "Furnished apartments in Kisumu Milimani",
        "price": 9000,
        "period": "day",
        "location": "Milimani, Kisumu, Kenya",
        "lat": -0.11228169241523206,
        "lng": 34.75612885212744,
        "file": "/storage/uploads/files/hdD1BIId96HRAqz0f10OLF9YrDy89KZs82BVpoFB.jpeg"
    },
    {
        "id": 149,
        "category": "for sale",
        "name": "4 bedroom house for sale in Kitisuru",
        "price": 80000000,
        "period": "forever",
        "location": "Kitisuru, Nairobi, Kenya",
        "lat": -1.2200434989970128,
        "lng": 36.79885458658452,
        "file": "/storage/uploads/files/so5iYWFF3aO7HbHAeffxOEtnrRQAsKxy89QzMbUl.jpeg"
    },
    {
        "id": 148,
        "category": "for sale",
        "name": "Amalia apartments along Mombasa road Syokimau",
        "price": 7000000,
        "period": "forever",
        "location": "Syokimau, Nairobi, Kenya",
        "lat": -1.3589427975815849,
        "lng": 36.93549578390469,
        "file": "/storage/uploads/files/CMrvKCdYkHriNHikkBExZ0bRc19LftnlTmv32a9O.jpeg"
    },
    {
        "id": 147,
        "category": "for sale",
        "name": "Redhill 5 bedroom Villas for sale",
        "price": 30500000,
        "period": "forever",
        "location": "Red Hill Road, Nairobi, Kenya",
        "lat": -1.22785085790624,
        "lng": 36.793199229373506,
        "file": "/storage/uploads/files/DEyzwcq5Yuufono2CtflPXQdp3sMZIIk4eIoy58h.jpeg"
    },
    {
        "id": 146,
        "category": "for sale",
        "name": "Redhill Gated community houses for sale",
        "price": 27500000,
        "period": "forever",
        "location": "Red Hill Road, Nairobi, Kenya",
        "lat": -1.2270908166563896,
        "lng": 36.792978522730785,
        "file": "/storage/uploads/files/ZXKMi2qv8G2ZCEMnoF0zqkJc9BuqjjExGA9RmyxP.jpeg"
    },
    {
        "id": 145,
        "category": "for rent",
        "name": "4 bedroom bungalow off waiyaki Highway",
        "price": 38000000,
        "period": "forever",
        "location": "Waiyaki Way, Nairobi, Kenya",
        "lat": -1.2691509223693385,
        "lng": 36.76345163685966,
        "file": "/storage/uploads/files/4e3eTR5ThNoW9ovLbIqIr56l4ssnlSOW7RUQXtLM.jpeg"
    },
    {
        "id": 144,
        "category": "for rent",
        "name": "5 bedroom house for rent in langata",
        "price": 180000,
        "period": "forever",
        "location": "Langata, Nairobi, Kenya",
        "lat": -1.361592225225282,
        "lng": 36.74950171329801,
        "file": "/storage/uploads/files/dIuekjMyxiHPHKsAWRs4D9aQU1OZR8HvPxJXq1ul.jpeg"
    },
    {
        "id": 143,
        "category": "for rent",
        "name": "Kenyatta road ready to build plots for sale",
        "price": 2500000,
        "period": "forever",
        "location": "Kenyatta Road, Kenya",
        "lat": -1.126598736002021,
        "lng": 37.00494529997691,
        "file": "/storage/uploads/files/nU44meBGsibZCWjAcN1qWYMm57k8u0MTESwUcXv7.jpeg"
    },
    {
        "id": 140,
        "category": "for rent",
        "name": "Kiamumbi 5 bedroom house for rent",
        "price": 80000,
        "period": "month",
        "location": "Kiamumbi, Kenya",
        "lat": -1.18384819266013,
        "lng": 36.87457459956409,
        "file": "/storage/uploads/files/lvL1Pg9DhICPa8EdJXYLQzOe0WdwgmtErEA1UtLA.jpeg"
    },
    {
        "id": 139,
        "category": "for sale",
        "name": "Nakuru Beautiful school for sale",
        "price": 490000000,
        "period": "forever",
        "location": "Nakuru, Kenya",
        "lat": -0.30424983719867027,
        "lng": 36.08241699742884,
        "file": "/storage/uploads/files/3Qc01t5f0soHhqo3TBkoYwTcSzEgxD9sgu4uhFEw.jpeg"
    },
    {
        "id": 137,
        "category": "for sale",
        "name": "Syokimau Houses on distress sale in a gated community",
        "price": 15000000,
        "period": "forever",
        "location": "Syokimau, Nairobi, Kenya",
        "lat": -1.3626088970963874,
        "lng": 36.93605944069953,
        "file": "/storage/uploads/files/dVIMsAdnPjO7C1cjqkP7uaCKiXIxEr8s2fs04hnl.jpeg"
    },
    {
        "id": 136,
        "category": "for rent",
        "name": "TIGONI ITHANJI LIMURU 6 BDRMS RESIDENTIAL OR COMMERCIAL HOUSE FOR RENT",
        "price": 240000,
        "period": "month",
        "location": "Ithanji, Kenya",
        "lat": -1.1535871728874871,
        "lng": 36.694293608958844,
        "file": "/storage/uploads/files/yO9fuyqlkA79YMz8ylICa6EaSebgh0w55kE2ycai.jpeg"
    },
    {
        "id": 135,
        "category": "for sale",
        "name": "Lavington Kilimani 5 bedroom house for sale",
        "price": 69000000,
        "period": "forever",
        "location": "Lavington, Nairobi, Kenya",
        "lat": -1.278396094008459,
        "lng": 36.78227385887709,
        "file": "/storage/uploads/files/CQytvfJGRNeOPzBg8ZPHgYVln4cuDFuVCufEVqgb.jpeg"
    },
    {
        "id": 134,
        "category": "for sale",
        "name": "Nanyuki Jua cali commercial plot for sale",
        "price": 700000,
        "period": "forever",
        "location": "Nanyuki, Kenya",
        "lat": 0.011096966450006641,
        "lng": 37.07258588386572,
        "file": "/storage/uploads/files/lO2cHFJrgM9B15WK5vsiBCtSwsLenJFFDAGWjTP9.jpeg"
    },
    {
        "id": 133,
        "category": "for sale",
        "name": "Karen Hardy Prestigious 10 bedrooms house for sale",
        "price": 130000000,
        "period": "forever",
        "location": "Karen Hardy, Nairobi, Kenya",
        "lat": -1.3639178608088263,
        "lng": 36.73695353522631,
        "file": "/storage/uploads/files/tQb5PESVctM7ccVLg15glUQO6tW6yuhkjFqiOj9f.jpeg"
    },
    {
        "id": 132,
        "category": "for sale",
        "name": "Karen Miotoni prestigious 5 bedrooms house for sale",
        "price": 125000000,
        "period": "forever",
        "location": "Miotoni Road, Karen, Nairobi, Kenya",
        "lat": -1.311448951313175,
        "lng": 36.7066170497693,
        "file": "/storage/uploads/files/vzRP8A7sLtxaZKwhIPPsauusTgOv9h6eqYKj36s6.jpeg"
    },
    {
        "id": 131,
        "category": "for sale",
        "name": "Karen ndege road house on 1 acre land on quick sale",
        "price": 78000000,
        "period": "forever",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3171532004897721,
        "lng": 36.69416186367632,
        "file": "/storage/uploads/files/zWh696shoRihTjZre940ZsEdO0rWcIZNrAjHZbO5.jpeg"
    },
    {
        "id": 130,
        "category": "for sale",
        "name": "Konza North uungani Village makueni county agricultural land for sale",
        "price": 950000,
        "period": "forever",
        "location": "Konza, Kenya",
        "lat": -1.7757662352010821,
        "lng": 37.108659001663696,
        "file": "/storage/uploads/files/rh83p3S3Oah7fVa9svaohtyz5wEoREfjhOAKlWLi.jpeg"
    },
    {
        "id": 129,
        "category": "for sale",
        "name": "Kironyaga Central kagumo kamuiru agricultural coffee land for sale",
        "price": 2800000,
        "period": "forever",
        "location": "Central, Kirinyaga Province, Kenya",
        "lat": -0.5086468590690496,
        "lng": 37.374064586301905,
        "file": "/storage/uploads/files/2IEt98vimLEyj98Md8yG7pNPrGBr7sReNVjJCkPJ.jpeg"
    },
    {
        "id": 128,
        "category": "for sale",
        "name": "Westlands 0.5 acre land for quick sale",
        "price": 55000000,
        "period": "forever",
        "location": "Westlands, Nairobi, Kenya",
        "lat": -1.2716419466880529,
        "lng": 36.81200973815152,
        "file": "/storage/uploads/files/V5mf4cYKkDx0BRFQbl1vrFZ8pqpI4PT2JOHv1hOy.jpeg"
    },
    {
        "id": 127,
        "category": "for sale",
        "name": "Weatlands lantana road 1 acre commercial land on quick sale",
        "price": 200000000,
        "period": "forever",
        "location": "Westlands, Nairobi, Kenya",
        "lat": -1.2707245293195994,
        "lng": 36.81716895764582,
        "file": "/storage/uploads/files/hMzTGanFIGBpa8AvLFxpSdeE1pn6rB7KdQ5roW7I.jpeg"
    },
    {
        "id": 126,
        "category": "for sale",
        "name": "Muranga Gikomora 1.6 acre land for sale",
        "price": 1800000,
        "period": "forever",
        "location": "Gikomora, Muranga Province, Kenya",
        "lat": -0.8141778770875094,
        "lng": 37.05487096324706,
        "file": "/storage/uploads/files/Icg0nNhPwPnWdBmFtQhcnuDALKA4DQ0ZmZybLQCU.jpeg"
    },
    {
        "id": 125,
        "category": "for sale",
        "name": "Karen House on a distressed sale",
        "price": 80000000,
        "period": "forever",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3210813186642583,
        "lng": 36.68874716345345,
        "file": "/storage/uploads/files/n9eZcjFdD40DK7p7gq93AoDhDE8rUTCcxydP1QE9.jpeg"
    },
    {
        "id": 124,
        "category": "for sale",
        "name": "Eastleigh section 1 commercial plot on quick sale",
        "price": 30000000,
        "period": "forever",
        "location": "Eastleigh, Nairobi, Kenya",
        "lat": -1.2670208584838776,
        "lng": 36.85042070558765,
        "file": "/storage/uploads/files/UgyBlSloMIWgGgLxCSnlaaLbIJIQeOuOVgN72kns.jpeg"
    },
    {
        "id": 123,
        "category": "for sale",
        "name": "Naivasha dry port commercial land for sale",
        "price": 950000,
        "period": "forever",
        "location": "Naivasha, Kenya",
        "lat": -0.7198245477853142,
        "lng": 36.430399761524576,
        "file": "/storage/uploads/files/1aJVyi6IULedF4U3DcFZX9e2raYB46IhuFRlcPsk.jpeg"
    },
    {
        "id": 122,
        "category": "for sale",
        "name": "Naivasha Dry port commercial land for sale",
        "price": 1700000,
        "period": "forever",
        "location": "Naivasha, Kenya",
        "lat": -0.7192850838934942,
        "lng": 36.43140520682599,
        "file": "/storage/uploads/files/h5bdtTqe4XTw2f1uDDbmT8AqX2RsaY0xZ1l5RZUR.jpeg"
    },
    {
        "id": 121,
        "category": "for sale",
        "name": "Kilimani Kirichwa Road English style House for Sale",
        "price": 450000000,
        "period": "forever",
        "location": "Kilimani, Nairobi, Kenya",
        "lat": -1.2926604798146042,
        "lng": 36.772836495683535,
        "file": "/storage/uploads/files/SpqK5EEyZcoUtauWsJUgAT5eZMGxVwnyHeYlAD4D.jpeg"
    },
    {
        "id": 119,
        "category": "for sale",
        "name": "Narok Mai Mahiu Duka Moja land on quick sale",
        "price": 230000,
        "period": "forever",
        "location": "Kamandura - Mai Mahiu - Narok Road, Narok, Kenya",
        "lat": -1.1333076591783962,
        "lng": 36.09983446290529,
        "file": "/storage/uploads/files/zoTw5yWEQdZ4vwupxp9fMH71ReYsC0cxOGFFS4TD.jpeg"
    },
    {
        "id": 118,
        "category": "for sale",
        "name": "Kajiado namanga at Maili 46 agricultural land for quick sale",
        "price": 190000,
        "period": "forever",
        "location": "Namanga, Kajiado Province, Kenya",
        "lat": -2.5397582010578654,
        "lng": 36.80360598223041,
        "file": "/storage/uploads/files/YdmsWaQbNtjBuEYWYVbg4aNRRkTyl4JDkFAnRlya.jpeg"
    },
    {
        "id": 117,
        "category": "for sale",
        "name": "Kangundo road Malaa Commercial land for sale",
        "price": 870000,
        "period": "forever",
        "location": "Kangundo Road, Kenya",
        "lat": -1.2761443933547734,
        "lng": 36.88479212951936,
        "file": "/storage/uploads/files/BodkyuHJiuFhdkobwPtkaDMhC8FkFBtjvLvXTiUM.jpeg"
    },
    {
        "id": 115,
        "category": "for sale",
        "name": "Kiambu Ruiru Kimbo in Mugutha quater land for sale",
        "price": 7800000,
        "period": "forever",
        "location": "Mugutha, Kiambu Province, Kenya",
        "lat": -1.020650749314562,
        "lng": 36.88113359545886,
        "file": "/storage/uploads/files/wfg1SDbL4MmVp5ZPJpAyOQV1CZu9xsgc8uFEklZK.jpeg"
    },
    {
        "id": 114,
        "category": "for sale",
        "name": "Laikipia Muhotetu Agricultural land for sale",
        "price": 470000,
        "period": "forever",
        "location": "Muhotetu, Laikipia Province, Kenya",
        "lat": 0.3165425250988366,
        "lng": 36.36888841749721,
        "file": "/storage/uploads/files/pGix0o4BdEwkiviO9QldfkUpJeLFRHiJcK3INqA8.jpeg"
    },
    {
        "id": 113,
        "category": "for rent",
        "name": "Milimani furnished apartments in Kisumu",
        "price": 10000,
        "period": "day",
        "location": "Milimani, Kisumu, Kenya",
        "lat": -0.11284572137820632,
        "lng": 34.749801904140476,
        "file": "/storage/uploads/files/P4IelFc5rYTit42aoC5r8abyAt0wRJ3YMTWzGc3Z.jpeg"
    },
    {
        "id": 112,
        "category": "for rent",
        "name": "Furnished apartments in Kisumu Milimani",
        "price": 7000,
        "period": "day",
        "location": "Milimani, Kisumu, Kenya",
        "lat": -0.1128702462554442,
        "lng": 34.7501207042615,
        "file": "/storage/uploads/files/Fexs4BMv3AN7xAYvbVfDJcwCRXqxthdugna3Ebei.jpeg"
    },
    {
        "id": 111,
        "category": "for rent",
        "name": "Furnished apartments in Kisumu Milimani",
        "price": 8500,
        "period": "day",
        "location": "Milimani, Kisumu, Kenya",
        "lat": -0.11274762972708235,
        "lng": 34.749507627307175,
        "file": "/storage/uploads/files/yywC5AEXKnNAETaAtDGLH0fpgVK7S2KZQg9ahXkh.jpeg"
    },
    {
        "id": 110,
        "category": "for rent",
        "name": "Furnished apartments In Kisumu Milimani",
        "price": 4000,
        "period": "day",
        "location": "Milimani, Kisumu, Kenya",
        "lat": -0.11237978668726031,
        "lng": 34.74933596593022,
        "file": "/storage/uploads/files/Wdquf1RobMm7eylP2Mc7p3bR5q9PEmAi9TFnlyAE.jpeg"
    },
    {
        "id": 109,
        "category": "for rent",
        "name": "Ruby's court Milimani short term rental",
        "price": 6500,
        "period": "day",
        "location": "Milimani, Kisumu, Kenya",
        "lat": -0.11218360207188856,
        "lng": 34.75302391257322,
        "file": "/storage/uploads/files/0O01BNC4ZMBzObmn2IPIqeXxPh1vbG6uFZPtW0XZ.jpeg"
    },
    {
        "id": 108,
        "category": "for rent",
        "name": "2 bedroom Mamboleo house for rent",
        "price": 20000,
        "period": "month",
        "location": "Mamboleo Estate, Kisumu, Kenya",
        "lat": -0.06559611721077967,
        "lng": 34.78577149094819,
        "file": "/storage/uploads/files/mXBOTEJ7u9MvdTW4OQcVaUV4qFNzdnJD4ARs0jKz.jpeg"
    },
    {
        "id": 107,
        "category": "for rent",
        "name": "Ninga Flats and apartments in Kisumu Mamboleo",
        "price": 17000,
        "period": "month",
        "location": "Mamboleo Estate, Kisumu, Kenya",
        "lat": -0.05991602575032539,
        "lng": 34.78837005414817,
        "file": "/storage/uploads/files/xUemgT1Wg3ldBcHYWwSc55R8gr2sfAOmuQMg4rgx.jpeg"
    },
    {
        "id": 106,
        "category": "for rent",
        "name": "Ninga Flats and apartments in Kisumu Mamboleo",
        "price": 15000,
        "period": "month",
        "location": "Mamboleo Estate, Kisumu, Kenya",
        "lat": -0.06430631596237044,
        "lng": 34.78337167273844,
        "file": "/storage/uploads/files/pmkvqZhubfXFGz2TkGOjzQ7gknYUraSkwQ6tqRbU.jpeg"
    },
    {
        "id": 104,
        "category": "for rent",
        "name": "Ruiru Thika road land for lease",
        "price": 60000,
        "period": "month",
        "location": "Thika Road, Ruiru, Kenya",
        "lat": -1.1840809749195271,
        "lng": 36.94235188647349,
        "file": "/storage/uploads/files/aXgxjfrzYpZTiOp6rjKBAn1UKvlirl1YMoHPULJ3.jpeg"
    },
    {
        "id": 103,
        "category": "for rent",
        "name": "Kilimani Riara 3 bedroom house for rent",
        "price": 100000,
        "period": "month",
        "location": "Riara Road, Kilimani, Nairobi, Kenya",
        "lat": -1.2914367711525172,
        "lng": 36.76377732792222,
        "file": "/storage/uploads/files/2OuEf7xYO9excTfk3maMNNd7NU0CjL8a0WDw8XTp.jpeg"
    },
    {
        "id": 102,
        "category": "for sale",
        "name": "Ngoingwa Mang'u Thika 4 bedroom house for sale",
        "price": 16000000,
        "period": "forever",
        "location": "Ngoingwa Estate, Thika, Kenya",
        "lat": -1.03929021626318,
        "lng": 37.043866946594584,
        "file": "/storage/uploads/files/1zAnSIhloxQufBh1lqInaLo4wSWDAw5ztX5f5Rsy.jpeg"
    },
    {
        "id": 101,
        "category": "for rent",
        "name": "Rosters homeland Thika road land for lease",
        "price": 380000,
        "period": "month",
        "location": "Thika Road, Nairobi, Kenya",
        "lat": -1.2282177742666471,
        "lng": 36.87727245656869,
        "file": "/storage/uploads/files/L2FnVrqWRgzhnpyHR5Lc5HGpbVS333iYMhE2EZkB.jpeg"
    },
    {
        "id": 100,
        "category": "for sale",
        "name": "Thome Muthaiga North 7 bedroom house for sale",
        "price": 60000000,
        "period": "forever",
        "location": "Muthaiga, Nairobi, Kenya",
        "lat": -1.2503040221522628,
        "lng": 36.82506066744867,
        "file": "/storage/uploads/files/PGkZCPACdfJvqmEPrZ6ClRmFrG2EUchPt9XQxjvn.jpeg"
    },
    {
        "id": 99,
        "category": "for sale",
        "name": "Ruiru Kamakis Eastern bypass house for sale",
        "price": 17000000,
        "period": "forever",
        "location": "Ruiru, Kenya",
        "lat": -1.1500382892876588,
        "lng": 36.961225876810225,
        "file": "/storage/uploads/files/CZZYTWnjJ34SOhzcre97qS4daC0K4Cq5Y42sO9gX.jpeg"
    },
    {
        "id": 98,
        "category": "for sale",
        "name": "Ruiru Kamakis Thika Road house for sale",
        "price": 15000000,
        "period": "forever",
        "location": "Ruiru, Kenya",
        "lat": -1.151705522707105,
        "lng": 36.96095612228239,
        "file": "/storage/uploads/files/lU7NFZehTmQKKKS0E6akamFM97Dh2vZH5GeJo1fi.jpeg"
    },
    {
        "id": 97,
        "category": "for sale",
        "name": "Syokimau Mlolongo Mombasa Road House on Quick sale",
        "price": 11000000,
        "period": "forever",
        "location": "Syokimau, Mlolongo, Kenya",
        "lat": -1.3627533211801846,
        "lng": 36.945214012767615,
        "file": "/storage/uploads/files/GOcQlGEmmhTXFPXiBKAWg06g1YsDUZN9mz8VmX8D.jpeg"
    },
    {
        "id": 96,
        "category": "for sale",
        "name": "Rockvilla 1 gardens",
        "price": 4500000,
        "period": "month",
        "location": "Joska, Kenya",
        "lat": -1.2839960442612564,
        "lng": 37.09655502804434,
        "file": "/storage/uploads/files/3ZnLXSWmspjofn0SU3ECdRXvFJCTjSJWiB6opkcl.jpeg"
    },
    {
        "id": 95,
        "category": "for rent",
        "name": "2 bedroom flat for rent in Mamboleo Makuti Junction",
        "price": 15000,
        "period": "month",
        "location": "Mamboleo Estate, Kisumu, Kenya",
        "lat": -0.06553365796297968,
        "lng": 34.777528393863435,
        "file": "/storage/uploads/files/q5evKbYbHf7Zy0VPQiVekmUuWAiSvS1tsy0PEKmE.jpeg"
    },
    {
        "id": 94,
        "category": "for rent",
        "name": "Kisumu kibuye shops for rent",
        "price": 9000,
        "period": "month",
        "location": "Kisumu, Kenya",
        "lat": -0.09390825781645136,
        "lng": 34.76537374074117,
        "file": "/storage/uploads/files/SH7orjpEvPXGm8XksGUfKAtz0R98hPz6IzmasT8x.jpeg"
    },
    {
        "id": 93,
        "category": "for sale",
        "name": "Kimunyu Gatundu Road Kiambu County 2 acres land for sale",
        "price": 9500000,
        "period": "forever",
        "location": "Gatundu, Kenya",
        "lat": -1.0059968318226238,
        "lng": 36.912168288446466,
        "file": "/storage/uploads/files/CrJGmYp8PhOR5c4543KjWdBB8G7p0HmAu59uZU6y.jpeg"
    },
    {
        "id": 92,
        "category": "for sale",
        "name": "Old Muthaiga commercial land 1.5 on quick sale",
        "price": 150000000,
        "period": "forever",
        "location": "Muthaiga, Nairobi, Kenya",
        "lat": -1.2504266097217633,
        "lng": 36.824766389305694,
        "file": "/storage/uploads/files/ywPpMXOVMeB4p3zl9Wl2MMGPmDTeygeGPxI59edc.jpeg"
    },
    {
        "id": 91,
        "category": "for sale",
        "name": "Loresho Westlands half an acre land on quick sale",
        "price": 35000000,
        "period": "forever",
        "location": "New Loresho Estate, Nairobi, Kenya",
        "lat": -1.2576078101941581,
        "lng": 36.73731874548471,
        "file": "/storage/uploads/files/WvhsVAF78qH3GZi91y8zsYrNK0wEcB44S5PEhR1Y.jpeg"
    },
    {
        "id": 90,
        "category": "for rent",
        "name": "Karen House for rent",
        "price": 100000,
        "period": "month",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3145599077543322,
        "lng": 36.69276894334944,
        "file": "/storage/uploads/files/MXdNNOyvMfAesSM395agZpDG5sNS6SWioyDhlr0J.jpeg"
    },
    {
        "id": 89,
        "category": "for sale",
        "name": "Kirinyaga Sagana Makutano agricultural land for sale",
        "price": 1200000,
        "period": "forever",
        "location": "Sagana, Kirinyaga Province, Kenya",
        "lat": -0.6718411979253058,
        "lng": 37.20722959956411,
        "file": "/storage/uploads/files/QaxfAqlnuLa6UicFCgqAZN7pdaPmA9uftB25DHYT.jpeg"
    },
    {
        "id": 88,
        "category": "for sale",
        "name": "Ndunyu Njeru Kinangop Nyandarua 3 acres agricultural land for sale",
        "price": 1000000,
        "period": "forever",
        "location": "Ndunyu Njeru, Kenya",
        "lat": -0.5456900053182028,
        "lng": 36.564873620182766,
        "file": "/storage/uploads/files/BoUDa5vOLuYwMchjkJ23eRSviFqU6mozQSJBTW3D.jpeg"
    },
    {
        "id": 87,
        "category": "for sale",
        "name": "Kieni Mweiga Solio land for sale",
        "price": 675000,
        "period": "forever",
        "location": "Mweiga, Kenya",
        "lat": -0.33835641872145367,
        "lng": 36.91880527928694,
        "file": "/storage/uploads/files/e4UvuyktBI540Ja7Wio7Hu3NHrqtBGYUufR4wwic.jpeg"
    },
    {
        "id": 86,
        "category": "for sale",
        "name": "Ruai Eastern bypass 6 bedroom house for sale",
        "price": 11000000,
        "period": "forever",
        "location": "Eastern Bypass, Ruai, Kenya",
        "lat": -1.215524339989628,
        "lng": 36.99426385068265,
        "file": "/storage/uploads/files/dbSlg9VV9xn7CHXTL7hDeMXSuKgm85SZlQ32WBXL.jpeg"
    },
    {
        "id": 85,
        "category": "for sale",
        "name": "Rumuruti Thome block 4 agricultural land for sale",
        "price": 500000,
        "period": "forever",
        "location": "Rumuruti, Kenya",
        "lat": 0.2751177766692532,
        "lng": 36.54561135056018,
        "file": "/storage/uploads/files/3RZmuZiajG6DFGdkqpmusfulL5MUbgq4OEk045nG.jpeg"
    },
    {
        "id": 84,
        "category": "for sale",
        "name": "Nyandarua ol Kalao Kaimbaga 3 acre land for sale",
        "price": 980000,
        "period": "forever",
        "location": "Kaimbaga, Nyandarua Province, Kenya",
        "lat": -0.29435469603750725,
        "lng": 36.404195868409374,
        "file": "/storage/uploads/files/KaoJcY4A7Y4VtM9yZgl0Oom27WAuCUei5hjXUmK7.jpeg"
    },
    {
        "id": 83,
        "category": "for sale",
        "name": "Kiambu county Ruiru Githunguri road commercial plot for sale",
        "price": 2700000,
        "period": "forever",
        "location": "Githunguri, Kenya",
        "lat": -1.0528738505998951,
        "lng": 36.77990130961516,
        "file": "/storage/uploads/files/MPNPXeAVXsUuggcfHU5afuNITGQPiH76RQJa1Hfw.jpeg"
    },
    {
        "id": 82,
        "category": "for sale",
        "name": "Naivasha Mai Mahiu Suswa SGR commercial land for sale",
        "price": 1950000,
        "period": "forever",
        "location": "Mai Mahiu, Kenya",
        "lat": -0.9819296911281805,
        "lng": 36.58378394796148,
        "file": "/storage/uploads/files/MLEHFyNoUal2R65j5V48pl7nCglUlOionIqeZVpX.jpeg"
    },
    {
        "id": 81,
        "category": "for sale",
        "name": "Kasarani Maternity flats on quick sale",
        "price": 23000000,
        "period": "forever",
        "location": "Kasarani, Nairobi, Kenya",
        "lat": -1.224932135687461,
        "lng": 36.901965518495935,
        "file": "/storage/uploads/files/ggEEslu5cUisiCKDah4FonZOCgYhpauv2TR05Vqf.jpeg"
    },
    {
        "id": 80,
        "category": "for sale",
        "name": "KAMULU KANGUNDO ROAD COMMERCIAL LAND FOR SALE",
        "price": 2700000,
        "period": "forever",
        "location": "Kangundo Road, Kenya",
        "lat": -1.27160599240729,
        "lng": 36.909170150756836,
        "file": "/storage/uploads/files/qKpmuvyBvQWzp98Q3bbK8hkfa1urk1Zoq0AYkmri.jpeg"
    },
    {
        "id": 79,
        "category": "for sale",
        "name": "LESHAU GWA KUNG'U INYA AGRICULTURAL LAND ON QUICK SALE",
        "price": 370000,
        "period": "forever",
        "location": "Leshau, Kenya",
        "lat": 0.013281017289770937,
        "lng": 36.50152532248878,
        "file": "/storage/uploads/files/SZS1OQt81uFnL9I43lztsKQVUt0Pv3HTSR9rkiKa.jpeg"
    },
    {
        "id": 77,
        "category": "for sale",
        "name": "NYERI MWEIGA  TOWN PLOT FOR SALE",
        "price": 900000,
        "period": "forever",
        "location": "Mweiga, Nyeri Province, Kenya",
        "lat": -0.3403182263769358,
        "lng": 36.92351370665526,
        "file": "/storage/uploads/files/hwR6iW6QGm4hQS8VOejKUbCqGarSs1mSkBoZADma.jpeg"
    },
    {
        "id": 76,
        "category": "for sale",
        "name": "NANYUKI AGRICULTURAL LAND ON QUICK SALE",
        "price": 850000,
        "period": "forever",
        "location": "Nanyuki, Kenya",
        "lat": 0.009723675457093043,
        "lng": 37.07177662290156,
        "file": "/storage/uploads/files/9s3cq0csRFyiRiOA83Yg9VLNpFePNcK1fbiI38p2.jpeg"
    },
    {
        "id": 75,
        "category": "for sale",
        "name": "CITY CABANAS MOMBASA ROAD INDUSTRIAL GODOWNS FOR SALE",
        "price": 160000000,
        "period": "forever",
        "location": "Bridge, Cabanas, Mombasa Road, Nairobi, Kenya",
        "lat": -1.337882963974207,
        "lng": 36.900176174297805,
        "file": "/storage/uploads/files/ASmGx7kKy0bAnvGVxRttBNC8dLvPMWnBUMGOAYj6.jpeg"
    },
    {
        "id": 74,
        "category": "for sale",
        "name": "RUIRU GATUNDU ROAD THIKA ROAD 2 ACRES LAND FOR SALE",
        "price": 18000000,
        "period": "forever",
        "location": "Gatundu-Juja Road, Ruiru, Kenya",
        "lat": -1.1200191465554996,
        "lng": 37.03014850616455,
        "file": "/storage/uploads/files/wAvMgIusSjOkblPshgAJQAOQghdAM3hcLen6bqVU.jpeg"
    },
    {
        "id": 73,
        "category": "for sale",
        "name": "ISINYA TOWN COMMERCIAL LAND ON QUICK SALE",
        "price": 5000000,
        "period": "forever",
        "location": "Isinya, Kenya",
        "lat": -1.6718308131794455,
        "lng": 36.844935721043974,
        "file": "/storage/uploads/files/FUgcLw4YUTbj6sLVWRLrr9Msx9KegdlIOdnzV959.jpeg"
    },
    {
        "id": 72,
        "category": "for sale",
        "name": "NGONG KIBIKO 1 ACRE PLOT ON QUICK SALE",
        "price": 12000000,
        "period": "forever",
        "location": "Ngong, Kenya",
        "lat": -1.3548373620613519,
        "lng": 36.67163596056392,
        "file": "/storage/uploads/files/hxwlAdJIVJsc3ZVXrXyRhaaUXRExa72AOqc7RPKx.jpeg"
    },
    {
        "id": 71,
        "category": "for rent",
        "name": "Ngong town own compound house for rent",
        "price": 50000,
        "period": "month",
        "location": "Ngong Township, Kenya",
        "lat": -1.3410228143060552,
        "lng": 36.65753574717152,
        "file": "/storage/uploads/files/EV5q44AROR7Kr0j1j2HbvFvCCTJYektKTJgWQ1PP.jpeg"
    },
    {
        "id": 70,
        "category": "for sale",
        "name": "Narumoro Nanyuki Nyeri Highway land on quick sale",
        "price": 570000,
        "period": "forever",
        "location": "Naromoru, Kenya",
        "lat": -0.19572559435300607,
        "lng": 37.10479260748084,
        "file": "/storage/uploads/files/ZtJIDpZj47yK4aHXisaAHgugbuaEEiRt7zV4248y.jpeg"
    },
    {
        "id": 69,
        "category": "for sale",
        "name": "Kiambu Ruiru Mutonya plots for sale",
        "price": 980000,
        "period": "forever",
        "location": "Ruiru, Kiambu Province, Kenya",
        "lat": -1.1477581065765654,
        "lng": 36.96105421543327,
        "file": "/storage/uploads/files/BomYva8tH7IChzHM4gOIBbvQhb5idiYHSuYkgxw3.jpeg"
    },
    {
        "id": 68,
        "category": "for sale",
        "name": "Kiambu Ruiru Mutonya plot for sale",
        "price": 1500000,
        "period": "forever",
        "location": "Ruiru, Kiambu Province, Kenya",
        "lat": -1.1492046751587968,
        "lng": 36.96120135384992,
        "file": "/storage/uploads/files/vT65ybGIofKKUEiWbDz8icKB7nOarfNaUiRgnN7C.jpeg"
    },
    {
        "id": 67,
        "category": "for rent",
        "name": "le rossy apartments",
        "price": 45000,
        "period": "month",
        "location": "Mamboleo Estate, Kisumu, Kenya",
        "lat": -0.05778881966685653,
        "lng": 34.787995288360605,
        "file": "/storage/uploads/files/mT4687ijjxkFZt5blw92f1uEGWu3tSz8OGUdrr6s.jpeg"
    },
    {
        "id": 66,
        "category": "for rent",
        "name": "le rossy apartments",
        "price": 4500,
        "period": "day",
        "location": "Mamboleo Estate, Kisumu, Kenya",
        "lat": -0.054484339747021056,
        "lng": 34.78829569577027,
        "file": "/storage/uploads/files/LpEicKqTDEDLMvEj2VTp1CygiURFy5IWSJ4Iht2A.jpeg"
    },
    {
        "id": 65,
        "category": "for rent",
        "name": "le rossy apartments",
        "price": 6000,
        "period": "day",
        "location": "Mamboleo Estate, Kisumu, Kenya",
        "lat": -0.05289647270741822,
        "lng": 34.78795237301637,
        "file": "/storage/uploads/files/MOx0rMGtWz31N4xo3fne3KoRDrIeScmcZ8ZhIrfb.jpeg"
    },
    {
        "id": 64,
        "category": "for sale",
        "name": "le rossy apartments",
        "price": 9000000,
        "period": "forever",
        "location": "Mamboleo Estate, Kisumu, Kenya",
        "lat": -0.053840609871070214,
        "lng": 34.78687948941041,
        "file": "/storage/uploads/files/gkYchCYLYxEeHoJOjmqZ6WiWHHZo3vztncieu1HI.jpeg"
    },
    {
        "id": 63,
        "category": "for sale",
        "name": "le rossy apartments",
        "price": 10000000,
        "period": "forever",
        "location": "Mamboleo Estate, Kisumu, Kenya",
        "lat": -0.054183932472436504,
        "lng": 34.7870940661316,
        "file": "/storage/uploads/files/liBMoqsc7WEWYaJ199RWVPbMvhXdaBVg39GDbyXQ.jpeg"
    },
    {
        "id": 62,
        "category": "for rent",
        "name": "le rossy apartments",
        "price": 40000,
        "period": "month",
        "location": "Mamboleo Estate, Kisumu, Kenya",
        "lat": -0.05298230335925147,
        "lng": 34.78808111904908,
        "file": "/storage/uploads/files/6GT4vCNPSPetAMgktrQ9A1W88YlCVkQMsQT8JF0I.jpeg"
    },
    {
        "id": 58,
        "category": "for sale",
        "name": "PARKLANDS COMMERCIAL LAND FOR SALE",
        "price": 250000000,
        "period": "forever",
        "location": "Parklands, Nairobi, Kenya",
        "lat": -1.2606102435984212,
        "lng": 36.812548839642325,
        "file": "/storage/uploads/files/fJsazA9YW72FyBiVwgAPYBLJib4EFv1e8w7VSSDA.jpeg"
    },
    {
        "id": 57,
        "category": "for sale",
        "name": "KAWANGWARE DAGORETTI COMMERCIAL LAND FOR SALE",
        "price": 95000000,
        "period": "forever",
        "location": "Kawangware, Nairobi, Kenya",
        "lat": -1.2796107728082953,
        "lng": 36.755219070391846,
        "file": "/storage/uploads/files/fNU34uVZMQitUxQIrhSiYuCVWdGvRRtr0jD1eNJm.jpeg"
    },
    {
        "id": 56,
        "category": "for sale",
        "name": "RUIRU WITEITHIE THIKA ROAD PLOTS FOR SALE",
        "price": 900000,
        "period": "forever",
        "location": "Ruiru, Kenya",
        "lat": -0.13887006106962838,
        "lng": 36.25909876403196,
        "file": "/storage/uploads/files/pZfTOcaSEjnX9GV7gLCxI1Tqmv0ugCmHxGA7Hq0A.jpeg"
    },
    {
        "id": 55,
        "category": "for sale",
        "name": "LIMURU KIAMBU 3 ACRES TEA LAND ON QUICK SALE",
        "price": 8000000,
        "period": "forever",
        "location": "Limuru Town., Kenya",
        "lat": -1.1061568270059947,
        "lng": 36.642890665606664,
        "file": "/storage/uploads/files/gh4RmDrK6GZEp69ol4UwH0bzdoYyVelLcrDxisdv.jpeg"
    },
    {
        "id": 54,
        "category": "for sale",
        "name": "NDARAGWA SHAMATA AGRICULTURAL LAND ON QUICK SALE",
        "price": 1200000,
        "period": "forever",
        "location": "Ndaragwa, Kenya",
        "lat": -0.060144079000951214,
        "lng": 36.53255157937621,
        "file": "/storage/uploads/files/ezY7GmgAfXJfZcr14QBQRjj718jc1RjGjs7wmeQz.jpeg"
    },
    {
        "id": 53,
        "category": "for sale",
        "name": "Brick stone gardens",
        "price": 4250000,
        "period": "year",
        "location": "Kenyatta Road, Kenya",
        "lat": -1.1243691,
        "lng": 37.00446710000001,
        "file": "/storage/uploads/files/K3cXIt8bstEeXzAQyMokivYaPl3WITBFQpBzOXm5.jpeg"
    },
    {
        "id": 52,
        "category": "for sale",
        "name": "Hillpark",
        "price": 2.99,
        "period": "year",
        "location": "Witeithie House, Thika, Kenya",
        "lat": -1.035094,
        "lng": 37.0749575,
        "file": "/storage/uploads/files/iMLlqCDgwNU8v7xKKaJtKp15QRmbxRbRbweWs7iZ.jpeg"
    },
    {
        "id": 51,
        "category": "for rent",
        "name": "Rock Gardens 2",
        "price": 5750000,
        "period": "year",
        "location": "Ruiru Plaza, Ruiru, Kenya",
        "lat": -1.1475859,
        "lng": 36.9609,
        "file": "/storage/uploads/files/1mfjx4Q8Z9Y4Gey8x1ZF7VHFzZnmsssQPyqcxYeh.jpeg"
    },
    {
        "id": 49,
        "category": "for sale",
        "name": "GOLDEN CITY ESTATE IN KISUMU MAMBOLEO",
        "price": 11500000,
        "period": "forever",
        "location": "Mamboleo Estate, Kisumu, Kenya",
        "lat": -0.0516519282425159,
        "lng": 34.784991214263925,
        "file": "/storage/uploads/files/iI2rF1LL2znqpHueLxhmfIxxIIUzyZvL3HwBR8aN.jpeg"
    },
    {
        "id": 47,
        "category": "for rent",
        "name": "Juja, oak park",
        "price": 4750000,
        "period": "year",
        "location": "Juja, Kenya",
        "lat": -1.1018224,
        "lng": 37.0144027,
        "file": null
    },
    {
        "id": 46,
        "category": "for sale",
        "name": "Tezo Gardens in Malindi",
        "price": 380000,
        "period": "forever",
        "location": "Malindi, Kenya",
        "lat": -3.2219271176497246,
        "lng": 40.11876661329799,
        "file": "/storage/uploads/files/9IZXWrsTDsDlHcHQ96wNjwe3DDLshx9ptp0zYALJ.jpeg"
    },
    {
        "id": 45,
        "category": "for sale",
        "name": "Ngong suswa commercial land",
        "price": 1700000,
        "period": "forever",
        "location": "Suswa, Kenya",
        "lat": -1.1506612183899096,
        "lng": 36.24230761522683,
        "file": "/storage/uploads/files/vXKx2ZzsQqL4VUP28HrUnmCrnvPKdbODE0Mcyz7Z.jpeg"
    },
    {
        "id": 44,
        "category": "for sale",
        "name": "Muranga Makuyu Agricultural land for sale",
        "price": 700000,
        "period": "forever",
        "location": "Makuyu, Muranga Province, Kenya",
        "lat": -0.9034651893824073,
        "lng": 37.18916332961558,
        "file": "/storage/uploads/files/PZoxFMRm2qqk3hBIgq7BSX4vT0IZ9Vc2U3oZo0wT.jpeg"
    },
    {
        "id": 43,
        "category": "for sale",
        "name": "Ngobit Shopping centre land for quick sale",
        "price": 350000,
        "period": "forever",
        "location": "Ngobit, Kenya",
        "lat": -0.07693725521182511,
        "lng": 36.63219809075046,
        "file": "/storage/uploads/files/2K6zEtu7jl6cOUC1OJ8GCzIC1Yb89grAqn9yqsmS.jpeg"
    },
    {
        "id": 42,
        "category": "for sale",
        "name": "Runda House for sale",
        "price": 135000000,
        "period": "forever",
        "location": "Runda, Nairobi, Kenya",
        "lat": -1.212622260995999,
        "lng": 36.81750826696458,
        "file": "/storage/uploads/files/m0HPQOeLMTVGoP5rIFc2jllhRWet5GDiTEgkD7PA.jpeg"
    },
    {
        "id": 41,
        "category": "for rent",
        "name": "Karen House for rent or sale",
        "price": 150000,
        "period": "month",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3118305431857686,
        "lng": 36.69268267249638,
        "file": "/storage/uploads/files/wm0h2VqjuqAVjqqf98GHOWJy5rJMeTfz8txjLUck.jpeg"
    },
    {
        "id": 39,
        "category": "for sale",
        "name": "Kitusuri Gardens  Villas",
        "price": 9500000,
        "period": "forever",
        "location": "Kitisuru, Nairobi, Kenya",
        "lat": -1.2207299887520182,
        "lng": 36.803342306655274,
        "file": "/storage/uploads/files/IwXNlHFgWfFl6dnBXWIFpblM7zya0BhX7rBiGcsW.jpeg"
    },
    {
        "id": 38,
        "category": "for sale",
        "name": "Rongai Royal Villas",
        "price": 13500000,
        "period": "forever",
        "location": "Rongai, Kenya",
        "lat": -0.17212075822236725,
        "lng": 35.85615489095691,
        "file": "/storage/uploads/files/pwaPd28egT2hbqmjuMFQ3Ow0iOOyPBc6N9MtKvlH.jpeg"
    },
    {
        "id": 37,
        "category": "for rent",
        "name": "Offices in Tom Mboya",
        "price": 65000,
        "period": "month",
        "location": "Tom Mboya Estate, Kisumu, Kenya",
        "lat": -0.0894420157602354,
        "lng": 34.7679465768102,
        "file": "/storage/uploads/files/CZp8pWpWmdEVUrO1sGEiZcbLaMHpbwMVAfqryTR7.jpeg"
    },
    {
        "id": 36,
        "category": "for rent",
        "name": "Karen House for rent",
        "price": 190000,
        "period": "month",
        "location": "Karen, Nairobi, Kenya",
        "lat": -1.3145353932120523,
        "lng": 36.68801147071536,
        "file": "/storage/uploads/files/H0cNz93PhizsZNwouYzCaJfZ15QNyddbLgwdhp8i.jpeg"
    },
    {
        "id": 32,
        "category": "for rent",
        "name": "Jotham Mugo",
        "price": 12500,
        "period": "month",
        "location": "Roysambu, Nairobi, Kenya",
        "lat": -1.2184586,
        "lng": 36.8869064,
        "file": null
    },
    {
        "id": 31,
        "category": "for sale",
        "name": "KITISURU HOUSE FOR SALE",
        "price": 90000000,
        "period": "forever",
        "location": "Kitisuru, Nairobi, Kenya",
        "lat": -1.2172033959969166,
        "lng": 36.80568885585023,
        "file": "/storage/uploads/files/x0dknfCarYrBIKicisijKS06TdnqPWjgOLew111P.jpeg"
    },
    {
        "id": 30,
        "category": "for sale",
        "name": "NGONG HOUSE FOR SALE",
        "price": 7000000,
        "period": "forever",
        "location": "Ngong Township, Kenya",
        "lat": -1.3399013836231333,
        "lng": 36.64442510889282,
        "file": "/storage/uploads/files/udEOAJjoZlMsW3G4wcpRagdyuFQzNk1OKG8AGqzG.jpeg"
    },
    {
        "id": 29,
        "category": "for sale",
        "name": "BURUBURU PHASE 4 HOUSE ON QUICK SALE",
        "price": 14000000,
        "period": "forever",
        "location": "Buru-Buru Phase 4, Nairobi, Kenya",
        "lat": -1.291121499302393,
        "lng": 36.87240816817017,
        "file": "/storage/uploads/files/0yjbXwWtRboCWzXf86yQhCNwCqjuiJsxG0TZoA5Z.jpeg"
    },
    {
        "id": 28,
        "category": "for sale",
        "name": "KAREN MIOTONI HOUSE FOR SALE",
        "price": 110000000,
        "period": "year",
        "location": "Miotoni Road, Karen, Nairobi, Kenya",
        "lat": -1.3037202637421383,
        "lng": 36.6959832406311,
        "file": "/storage/uploads/files/S1SeA7kvmiFvucXINUHUzOZlDz86lQi9Q9sgOYQZ.jpeg"
    },
    {
        "id": 26,
        "category": "for sale",
        "name": "Brookview II estate",
        "price": 5550000,
        "period": "year",
        "location": "Kenyatta Road, Kenya",
        "lat": -1.1243691,
        "lng": 37.00446710000001,
        "file": null
    },
    {
        "id": 24,
        "category": "for sale",
        "name": "Casa De Empeno",
        "price": 135000000,
        "period": "year",
        "location": "Kahawa Wendani, Kenya",
        "lat": -1.1964250263210625,
        "lng": 36.924158334732056,
        "file": "/storage/uploads/files/UcD9KXMOMQpxhEEXbUlc0tvA0f3WdKVlt8X5ASf5.jpeg"
    },
    {
        "id": 23,
        "category": "for sale",
        "name": "BLOOM FOUNTAIN",
        "price": 95000000,
        "period": "forever",
        "location": "Dagoretti, Kenya",
        "lat": -1.2889834,
        "lng": 36.7280692,
        "file": "/storage/uploads/files/dH2HcTHginGHrpPL2bIq5L0LRedVpAUAVP9eLgav.jpeg"
    },
    {
        "id": 22,
        "category": "for sale",
        "name": "OAK PARK JUJA",
        "price": 4750000,
        "period": "year",
        "location": "Juja, Kenya",
        "lat": -1.1019867164646462,
        "lng": 37.01427395396727,
        "file": null
    },
    {
        "id": 21,
        "category": "for sale",
        "name": "NJORO PLAINS",
        "price": 1600000,
        "period": "forever",
        "location": "Nakuru, Kenya",
        "lat": -0.3030987999999999,
        "lng": 36.080026,
        "file": "/storage/uploads/files/qHI4IFqHtXwP0f5Hx5iMhNg26MbJXQnH5Rr3gOYJ.jpeg"
    },
    {
        "id": 20,
        "category": "for sale",
        "name": "HILL PARK ESTATE",
        "price": 2990000,
        "period": "year",
        "location": "Mangu High School Staff Room, Kenya",
        "lat": -1.061519092729694,
        "lng": 37.036202279284666,
        "file": "/storage/uploads/files/RtZOtGTdozGWW0uJbQ20jvms8P1hES2wX0z2wix6.jpeg"
    },
    {
        "id": 19,
        "category": "for sale",
        "name": "Land for sale in Mwea",
        "price": 650000,
        "period": "forever",
        "location": "Mwea, Kenya",
        "lat": -0.6965962263855927,
        "lng": 37.355230137460325,
        "file": "/storage/uploads/files/8ddPipv6TrWjVYS0acRbmTUgYZwPpyoHSQiSR0ME.jpeg"
    },
    {
        "id": 18,
        "category": "for sale",
        "name": "BAHARI GARDENS",
        "price": 475000,
        "period": "forever",
        "location": "Kilifi, Kenya",
        "lat": -3.50722267026571,
        "lng": 39.90765320157472,
        "file": "/storage/uploads/files/GNeMWqkyoBw6Oe3dKgvZ6gIqbo1Y3OddtYBmqT01.jpeg"
    },
    {
        "id": 17,
        "category": "for sale",
        "name": "MTWAPA PHASE 3",
        "price": 1250000,
        "period": "forever",
        "location": "Mtwapa, Kenya",
        "lat": -3.9336873529259715,
        "lng": 39.748983008459476,
        "file": "/storage/uploads/files/C8g2gKIE22tLJ1jGOAoSmcjYXauh9qzsD0mSxChl.jpeg"
    },
    {
        "id": 16,
        "category": "for sale",
        "name": "Inuka homes",
        "price": 450000,
        "period": "forever",
        "location": "Kilifi, Kenya",
        "lat": -3.5073511751604816,
        "lng": 39.907524455542,
        "file": "/storage/uploads/files/eMMMhZlEmXeSLJNGyQcwePCriP7qzGoVHmove4cf.jpeg"
    },
    {
        "id": 15,
        "category": "for sale",
        "name": "INUKA HOMES",
        "price": 3950000,
        "period": "forever",
        "location": "Kilifi, Kenya",
        "lat": -3.506708650510029,
        "lng": 39.90688072537843,
        "file": "/storage/uploads/files/HHewwgJ9Hf5wr2qb8RwNjL66fRAy8hv4iQArSUcN.jpeg"
    },
    {
        "id": 14,
        "category": "for sale",
        "name": "Mariakani Greens",
        "price": 350000,
        "period": "forever",
        "location": "Mariakani, Kenya",
        "lat": -3.861443622145294,
        "lng": 39.47225866295165,
        "file": "/storage/uploads/files/k0g8bPTbcCFdiVjMSWMrX1MyQK8tES8VSXb8H94f.jpeg"
    },
    {
        "id": 13,
        "category": "for sale",
        "name": "CHAKAMA PHASE 2",
        "price": 150000,
        "period": "forever",
        "location": "Chakama, Kenya",
        "lat": -2.9484503206472876,
        "lng": 39.56581524547729,
        "file": "/storage/uploads/files/nR8Sqz4Vx5mevu6FxEDIe3HBkXkWHq0fpJcHXIiK.jpeg"
    },
    {
        "id": 12,
        "category": "for sale",
        "name": "Msabaha Greens",
        "price": 365000,
        "period": "forever",
        "location": "Msabaha, Malindi, Kenya",
        "lat": -3.266661411611602,
        "lng": 40.04997253417969,
        "file": "/storage/uploads/files/TAmyBK0CCdAHZdE3vZ3a9FnRb27z9maZc0OXuvvA.jpeg"
    },
    {
        "id": 11,
        "category": "for rent",
        "name": "RNG BROOKDALE",
        "price": 10000,
        "period": "month",
        "location": "Kawangware, Nairobi, Kenya",
        "lat": -1.2822722,
        "lng": 36.7523652,
        "file": "/storage/uploads/files/EVURxDDI8GrmXanrcW9JubmBjGHf1h7GI8r2gsKB.jpeg"
    },
    {
        "id": 9,
        "category": "for sale",
        "name": "Limuru Tigoni agricultural land for sale",
        "price": 13000000,
        "period": "year",
        "location": "Tigoni, Kenya",
        "lat": -1.1271583290832679,
        "lng": 36.661171851898,
        "file": null
    },
    {
        "id": 8,
        "category": "for sale",
        "name": "Ngara Desai commercial plot for sale",
        "price": 75000000,
        "period": "year",
        "location": "Ngara, Nairobi, Kenya",
        "lat": -1.2781236,
        "lng": 36.8304167,
        "file": null
    }
]