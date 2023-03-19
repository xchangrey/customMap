import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'blue';

  constructor(){
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerContent = (): string => {
    return `
      <h2>The company name is ${this.companyName}</h2>
      <h3>${this.catchPhrase}</h3>
    `;
  }
}