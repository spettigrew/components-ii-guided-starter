// Your Javascript goes in this file.
// It is attached to index.html via the <script> tag at the end of body.

const container = document.querySelector('.dogs')
const button = document.querySelector('#getdogs')

// Our component creator function

function DogCard(imageUrl, titleText) {
    const card = document.createElement('div')
    card.classList.add('dog-card')

    const image = document.createElement('img')
    image.classList.add('dog-image')
    image.src = imageUrl
    card.appendChild(image)

    const title = document.createElement('h3')
    title.textContent = titleText
    card.appendChild(title)

    card.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('selected')
    })

    return card
}

// const dog1 = DogCard('https://images.dog.ceo/breeds/husky/20180924_193829.jpg', 'Husky'),
// const dog2 = DogCard('https://images.dog.ceo/breeds/husky/n02110185_1066.jpg', 'Husky'),
// const dog3 = DogCard('https://images.dog.ceo/breeds/husky/n02110185_2736.jpg', 'Husky')
    
//    const container = document.querySelector('.dogs')
    // container.appendChild(dog1)
    // container.appendChild(dog2)
    // container.appendChild(dog3)

    // const button = document.querySelector('#getdogs')

// Don't make network request until button is clicked
    button.addEventListener('click', () => {
        // Make a dynamic GET request without refreshing the page
        axios.get('https://dog.ceo/api/breed/husky/images/random/12')
        // Promise has resolved
            .then((response) => { 
                console.log('Network request was successful')
                // Network request finished.
                // Data that comes back from the server
               
                // response.data.message.forEach((item) => {
                //     const dogCard = DogCard(item, 'Husky')
                //     container.appendChild(dogCard)
                // })

                const imageUrls = response.data.message

                // Create a component for each image returned
                imageUrls.forEach((imageUrl) => {
                    const dogCard = DogCard(imageUrl, 'Husky')
                    container.appendChild(dogCard)
                })
            })

            // Promise was rejected
            .catch((error) => {
                console.log('Network request was unsuccessful')
                console.log(error)
    })
})
