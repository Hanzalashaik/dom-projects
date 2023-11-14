async function fetchData() {
  const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=computers";
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "X-Api-Key": "USjlb75Sl+/s62RSmnDkLQ==wa6WQOA6RaBRvzBJ",
      },
    });
    return response.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function updateQuote() {
  try {
    const quoteData = await fetchData();
    console.log(quoteData);
    
    const quote = document.querySelector(".quotes");
    console.log(quote);
    
    const person = document.querySelector(".person");
    console.log(person);
    
    quote.innerHTML = quoteData.quote;
    person.innerHTML = quoteData.author;
  } catch (error) {
    console.error("Error updating quote:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".new-quotes");
  btn.addEventListener("click", updateQuote);
  updateQuote(); // Initial quote when the page loads
});

