export default class contentService {

  constructor() {
    this._api = 'http://localhost:3000';
  }

  getResource = async (url) => {
    const res = await fetch(this._api + url);

    if(!res.ok) {
      throw new Error(`Ошибка пути ${url}, статус ошибки ${res.status}`);
    }

    return await res.json();
  }

  getAllSongs = async () => {
    const res = await this.getResource('/posts/');

    return res;
  }

  getProfile = async () => {
    const res = await this.getResource('/posts/');

    return res.map(this._transformProfileData)
  }

  _transformProfileData = (profile) => {

  }

}