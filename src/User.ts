import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor(){
    this.name = faker.name.firstName('male');
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    }
  }

  markerContent(): string {
    return `
      <h2>User name is ${this.name}</h2>
    `;
  }
};