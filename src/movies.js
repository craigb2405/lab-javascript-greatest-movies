// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray){
    const directors = moviesArray.map(function(value){
    return value.director
})
return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDrama = moviesArray.filter(function(object){
        return object.director === "Steven Spielberg" && object.genre.includes("Drama")
})
    return spielbergDrama.length  
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const averageScores = moviesArray.reduce(
        function(total, currentValue){
        return movies.score + currentValue / movies.length
    }, 0)
    return averageScores
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function(object){
        return object.genre.includes("Drama")
    })
    let dramaScoresAverage = dramaMovies.score/dramaMovies.length
    return dramaScoresAverage
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = moviesArray.map((moviesArray) => moviesArray) //use map not ...
    const sortedByYear = newArray.sort(
        function(a,b){
            return a.year-b.year;
        }//sort alphabetically using localcompare
    )
    return sortedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleAlpha = moviesArray.map((moviesArray) => moviesArray)
    const sortedByTitle = titleAlpha.sort(
        function(a,b){
            return a.title-b.title
        }
       
    )
    return sortedByTitle.slice(0 , 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {} //deep clone needed

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
