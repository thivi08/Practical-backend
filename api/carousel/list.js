async function list() {
    try {
        const carouselList = {
            slides: [
                {
                    image: "https://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg",
                    title: "Strong mask01",
                    subTitle: "Secondary text01"
                },
                {
                    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--MZvaMEOV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qll2w5atklv13ljmqope.png",
                    title: "Strong mask02",
                    subTitle: "Secondary text02"
                },
            ]
        }
        return carouselList
    } catch (error) {
        console.log('[ Error occurred]', error)
        const { response } = error
        return response
    }
}
module.exports = [list]