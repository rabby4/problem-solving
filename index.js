// 1. Object Manipulation
const allBooks = [
	{
		title: "Pother Pachali",
		author: "Bibhutibhushan Bandopadhyay",
		year: 1929,
	},
	{ title: "Chander Pahar", author: "Bibhutibhushan Bandopadhyay", year: 1937 },
	{ title: "KapalKundala", author: "Bankim Chandra Chattopadhyay", year: 1866 },
	{ title: "Devdas", author: "Sarat Chandra Chattopadhyay", year: 1917 },
	{ title: "Gora", author: "Rabindranath Tagore", year: 1910 },
]

const getBookTitles = (books) => {
	const bookTitles = books.map((book) => book.title)
	return bookTitles
}

const bookTitles = getBookTitles(allBooks)
console.log(bookTitles)

// 2. Sorting Objects
const bikes = [
	{ make: "Yamaha", model: "R15", year: 2018 },
	{ make: "Honda", model: "CBR600RR", year: 2020 },
	{ make: "Suzuki", model: "GSX-R750", year: 2019 },
	{ make: "Kawasaki", model: "Ninja 400", year: 2021 },
	{ make: "Ducati", model: "Panigale V2", year: 2022 },
]

const sortCarsByYear = (cars) => {
	const sortedCars = cars.sort((a, b) => a.year - b.year)
	return sortedCars
}
const carsByYear = sortCarsByYear(cars)
console.log(carsByYear)

// 3. Array Reduction
const numbersForSum = [10, 32, 35, 55, 53, 72, 70, 89]

const sumEvenNumbers = (numbers) => {
	const total = numbers.reduce(
		(sum, num) => (num % 2 === 0 ? sum + num : sum),
		0
	)
	return total
}
const totalOfEvenNumbers = sumEvenNumbers(numbersForSum)
console.log(totalOfEvenNumbers)

// 4. Leap Year Checker
const isLeapYear = (year) => {
	const checkLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
	return checkLeapYear
}
const leapYear = isLeapYear(2024)
console.log(leapYear)

// 05. Find Maximum Value:
const findMaxValue = (numbers) => {
	let max = numbers[0]
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] > max) {
			max = numbers[i]
		}
	}
	return max
}

const numbersForMaxValue = [42, 17, 89, 53, 26, 34, 55]
const maxValue = findMaxValue(numbersForMaxValue)
console.log("The maximum value is:", maxValue)
