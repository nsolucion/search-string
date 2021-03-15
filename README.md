# search-string

Search String is a javascript package to search string or part of it in string

## Installation

Use the package manager [npm](https://www.npmjs.com/package/search-string-eerg) to install search string.

```bash
npm i search-string-eerg --save
```

## Usage
```html
 <button (click)="test('juan perez')" >test</button>

```

```angular
import { Component } from '@angular/core';
import { customSearch } from 'search-string-eerg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    'juan alfredo carias perez',
    'Jhon Doe',
    'random text',
  ];

  test(query){
    const searchResult = this.users.filter(function (elem) {
        if(customSearch(elem, query)){
          return true;
        }else{ return false; }
    });
    console.log('result of search', searchResult);
  }
}


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
