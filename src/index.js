// write your code here
const ramenMenu = document.getElementById('ramen-menu')
const ramenDetail = document.getElementById('ramen-detail')
const detailImage = document.querySelector('.detail-image')
const detailName = document.querySelector('.name')
const detailRestaurant = document.querySelector('.restaurant')



fetch(`http://localhost:3000/ramens`)
    .then(r => r.json())
    .then((ramens) => {
        (console.log(ramens))
        ramens.forEach(ramen => {
            console.log(ramen)
            let ramenImage = document.createElement('img')
            ramenImage.alt = ramen.name
            ramenImage.src = ramen.image
            ramenImage.id = ramen.id
            ramenMenu.append(ramenImage)
            ramenImage.addEventListener('click', () => {
                console.log(ramen.name)
                detailImage.src = ramen.image
                detailName.textContent = ramen.name
                detailRestaurant.textContent = ramen.restaurant
            }
            )

        });

    });






// ramenMenu.addEventListener('click', (e) => {
//     e.preventDefault();
//     img.forEach
//     let name = e.target.name
//     console.log(name)

// })

// document.addEventListener('DOMContentLoaded', (e) => {
//     e.preventDefault
//     console.log("DOM content loaded")
//     detailImage.src = e.target[0].image
//     detailImage.alt = e.target[0].name
// })

//example ramen object info:
// "id": 1,
// "name": "Shoyu Ramen",
// "restaurant": "Nonono",
// "image": "./assets/ramen/shoyu.jpg",
// "rating": 7,
// "comment": "Delish. Can't go wrong with a classic!"

// document.addEventListener('DOMContentLoaded', (e) => {
//     console.log("DOM content loaded")
//     let ramenImage = document.createElement('img')
//     ramenImage.alt = e.target.name
//     ramenImage.src = e.target.image
//     ramenMenu.append(ramenImage)
// })