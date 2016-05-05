import { Model } from 'falcor';
import HttpDataSource from 'falcor-http-datasource';

const model = new Model({ source: new HttpDataSource('http://localhost:3000/model.json') });

export function getTitle() {
  model.get('title').then(res => {
    console.log('res:', res.json);
  });
  return {
  	type: "TEST"
  }; 
}
