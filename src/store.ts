import {
  observable,
  action,
  runInAction,
  makeObservable,
  computed,
} from "mobx";
import IWeatherData from "./api/interfaces/IWeatherData";
import MyApi from "./api/MyApi";

export class WeatherStore {
  @observable city: string = "";
  @observable isLoading: boolean = false;
  @observable data: IWeatherData[] = [];

  constructor() {
    makeObservable(this);
  }

  @computed get dataCount() {
    return this.data.length;
  }

  @action updateData = async (city: string) => {
    if (!city || this.city === city) return;
    this.city = city;
    this.isLoading = true;

    const apis: Array<Promise<IWeatherData | null>> = [];
    MyApi.getApiList().forEach((api) =>
      apis.push(api.getWeatherByCity(this.city))
    );
    Promise.all(apis)
      .then((fetchedData) => fetchedData.filter((o) => !!o) as IWeatherData[])
      .then((data) => {
        runInAction(() => {
          this.data = data;
          this.isLoading = false;
        });
      });
  };
}
