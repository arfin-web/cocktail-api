document.getElementById('search-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input');
    const userInputText = userInput.value;

    userInput.value = '';
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInputText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => showResult(data.drinks))
})

const showResult = (drinks) => {
    const resultDiv = document.getElementById('result-div');
    for (const drink of drinks) {
        console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div class="card h-100 shadow-lg border-0 rounded-3" onclick="showDetails(${drink.idDrink})">
                    <img src="${drink.strDrinkThumb}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${drink.strDrink}</h5>
                        <p class="card-text">${drink.strInstructionsIT}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
        `;
        resultDiv.appendChild(div);
    }
}

const showDetails = (drinkId) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

    fetch(url)
        .then(res => res.json())
        .then(data => seeDatails(data.drinks))
}

const seeDatails = (details) => {
    const seeDiv = document.getElementById('see-details');
    seeDiv.innerHTML = `
            <img src="${details[0].strDrinkThumb}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${details[0].strDrink}</h5>
                <p class="card-text">${details[0].strInstructionsIT}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
    `;
}