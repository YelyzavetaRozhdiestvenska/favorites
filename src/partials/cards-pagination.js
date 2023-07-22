import axios from 'axios';

export default class RecipeApiService {
  constructor() {
    this.BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
    this.category = '';
    this.page = 1;
    this.limit = 6;
    this.time = '';
    this.area = '';
    this.ingredients = '';
    this.recipeId = '';
  }

  async getEvents() {
    const url = `${this.BASE_URL}/events`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getCategories() {
    const url = `${this.BASE_URL}/categories`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getRecipe() {
    const url = `${this.BASE_URL}/recipes?category=${this.category}&page=${this.page}&limit=${this.limit}&time=${this.time}&area=${this.area}&ingredients=${this.ingredients}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPopular() {
    const url = `${this.BASE_URL}/recipes/popular`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getRecipeById() {
    const url = `${this.BASE_URL}/recipes/${this.recipeId}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async patchRatingById() {
    const url = `${this.BASE_URL}/recipes/${this.recipeId}/rating`;
    try {
      const response = await axios.patch(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getIngredients() {
    const url = `${this.BASE_URL}/ingredients`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getAreas() {
    const url = `${this.BASE_URL}/areas`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async postOrder() {
    const url = `${this.BASE_URL}/recipes/${this.recipeId}/orders/add`;
    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

const recipeApiSerive = new RecipeApiService();

const favorList = document.querySelector('.favor-list');

recipeApiSerive.getRecipe().then(response => {
  const arr = response.results;

  const FAVOR_DATA = 'favotires-data';
  const toStorage = [];

  for (let i = 0; i < 6; i++) {
    const { _id, title, category, rating, preview, description } = arr[i];
    toStorage.push({
      _id,
      title,
      category,
      rating,
      preview,
      description,
    });
  }

  localStorage.setItem(FAVOR_DATA, JSON.stringify(toStorage));
});
