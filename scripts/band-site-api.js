class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }
  async getShows() {
    const gettingShows = await axios.get(
      `${this.baseUrl}showdates?api_key=${this.apiKey}`
    );
    return gettingShows.data;
  }

  async getComments() {
    const gettingComments = await axios.get(
      `${this.baseUrl}comments?api_key=${this.apiKey}`
    );
    return gettingComments.data;
  }

async postComments(newComment) {
  const commentResponse = await axios.post(
    `${this.baseUrl}comments?api_key=${this.apiKey}`, newComment
  );
  return commentResponse;
}
}

const bandSiteKey = new BandSiteApi("56f17880-0672-4262-9938-9ff830ab1b44");

function getCurrentDate(timestamp) {
  const currentDate = new Date(timestamp);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  return `${month}/${day}/${year}`;
}




