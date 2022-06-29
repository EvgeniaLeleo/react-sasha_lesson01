import { dataStructure } from './types';

const changeBackground = (
  event: MouseEvent,
  imgContainer: HTMLDivElement,
  data: dataStructure
) => {
  let target = event.target as HTMLElement;

  if (target.tagName !== 'IMG') return;

  const url = data.results[Number(target.dataset.index)].urls.regular;
  const screenContainer = document.querySelector(
    '.screen-container'
  ) as HTMLDivElement;

  screenContainer.style.backgroundImage = `url(${url})`;
  imgContainer.innerHTML = '';

  const searchInput = document.querySelector('.input') as HTMLInputElement;
  searchInput.value = '';
  searchInput.focus();
};

export default changeBackground;
