import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  name = 'sathya';
  name1 = 'ravi';
  status = true;

  @ViewChild('name') child!: ElementRef;
  @ViewChildren('name') children!: QueryList<any>;

  cityValue = '';
  cityName: string = '';
  timeImageSrc: string = '';
  weatherIconSrc: string = '';
  weatherData: any; // Adjust the type based on the actual response structure

  constructor(private weatherService: WeatherService) {}

  updateWeather(): void {
    this.weatherService.getWeather(this.cityValue.trim()).subscribe(
      (data) => {
        this.weatherData = data;
        this.updateUI();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateUI(): void {
    const imageName = this.weatherData.weather[0].icon;
    this.weatherIconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`;
    this.cityName = this.weatherData.name;

    // if (this.isDayTime(imageName)) {
    //   this.timeImageSrc = '../../assets/images/day_image.svg';
    // } else {
    //   this.timeImageSrc = '../../assets/images/night_image.svg';
    // }
  }

  spitOutCelcius(kelvin: number): number {
    return Math.round(kelvin - 273.15);
  }

  isDayTime(icon: string): boolean {
    return icon.includes('d');
  }

  buttonViewChildren() {
    // let count = 0;
    this.children.forEach((el) => {
      // count++;
      // if (count == 1) {
      //   el.nativeElement.classList.add('bgblue');
      // }
      // el.nativeElement.classList.add('bgblue');

      if (el.nativeElement.classList.contains('bgred')) {
        el.nativeElement.classList.remove('bgred');
        el.nativeElement.classList.add('bgblue');
      } else {
        el.nativeElement.classList.remove('bgblue');
        el.nativeElement.classList.add('bgred');
      }
    });
  }

  buttonViewChild() {
    if (this.child.nativeElement.classList.contains('bgred')) {
      this.child.nativeElement.classList.remove('bgred');
      this.child.nativeElement.classList.add('bgblue');
    } else {
      this.child.nativeElement.classList.remove('bgblue');
      this.child.nativeElement.classList.add('bgred');
    }
  }
}
