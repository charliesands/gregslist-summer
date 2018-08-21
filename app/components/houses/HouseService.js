import House from '../../models/House.js'

//@ts-ignore
const housesApi = axios.create({
  baseURL: 'http://localhost:3000/api/houses',
  timeout: 3000
})

export default class HouseService {
  constructor() {

  }

  getHouses(draw) {
    housesApi.get()
      .then(res => {
        let houses = res.data.map(rawHouse => {
          return new House(rawHouse)
        })
        draw(houses)
      })
  }

  addHouse(formData, draw) {
    let newHouse = new House({
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      imgUrl: formData.imgUrl.value,
      levels: formData.levels.value,
      year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value
    })
    housesApi.post('', newHouse)
      .then(res => {
        this.getHouses(draw)
      })
  }
}