class Datasource {
    constructor() {
      this.endpoint = 'https://interview.switcheo.com/test.json';
    }
  
    /**
     * Fetches price data from the remote pricing engine.
     * @returns {Promise<Array>} - A promise that resolves to an array of price objects.
     */
    getPrices() {
      return fetch(this.endpoint)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          return data.data.prices.map((price) => new Price(price));
        })
        .catch((error) => {
          console.error(`There was a problem with the fetch operation: ${error}`);
        });
    }
  }
  
  class Price {
    constructor(price) {
      this.buy = price.buy / 100; // Divide by 100 to get the correct value
      this.sell = price.sell / 100; // Divide by 100 to get the correct value
      this.pair = price.pair;
    }
  
    /**
     * Calculates the mid-point value between buy and sell prices.
     * @returns {number} - The mid-point value.
     */
    mid() {
      return (this.buy + this.sell) / 2;
    }
  
    /**
     * Returns the quote currency (counter currency) of the trade pair.
     * @returns {string} - The quote currency.
     */
    quote() {
      return this.pair.slice(-3);
    }
  }
  
const ds = new Datasource();

ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(`Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`);
    });
  })
  .catch((error) => {
    console.error(error);
  });