import '../style.scss';
import searchImages from './search-images';

document.addEventListener('DOMContentLoaded', () => {
  const formSearch = document.querySelector('.form-search') as HTMLFormElement;
  const searchInput = document.querySelector('.input') as HTMLInputElement;

  formSearch.addEventListener('submit', (event) =>
    searchImages(event, searchInput)
  );
});

abstract;
