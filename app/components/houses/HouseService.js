import House from '../../models/House.js'

let houses = []

export default class HouseService {
  constructor() {

  }

  getHouses() {
    let housesCopy = []
    houses.forEach(house => {
      housesCopy.push(new House(
        house.address,
        house.color,
        house.rooms,
        house.price,
        house.imgUrl
      ))
    })
    return housesCopy
  }

  addHouse(formData) {
    let newHouse = new House(
      formData.address.value,
      formData.color.value,
      formData.rooms.value,
      formData.price.value,
      formData.imgUrl.value
    )
    houses.push(newHouse)
    console.log(houses)
  }

}