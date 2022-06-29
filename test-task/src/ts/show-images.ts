import changeBackground from './change-background';
import { columnCount, widthOFColumn, gap } from './user-settings';
import { dataStructure, resultStructure } from './types';

const showImages = (data: dataStructure) => {
  const imgContainer = document.querySelector(
    '.img-container'
  ) as HTMLDivElement;

  imgContainer.innerHTML = '';

  for (let i = 0; i < columnCount; i++) {
    const flex = document.createElement('div');
    flex.classList.add('flex');
    flex.classList.add(`flex${i}`);
    flex.style.width = widthOFColumn;
    flex.style.gap = gap;

    imgContainer.appendChild(flex);
    imgContainer.style.gap = gap;
  }

  data.results.forEach((result: resultStructure, index: number) => {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-div');

    const img = document.createElement('img');
    img.classList.add('img');
    img.alt = result.alt_description;
    img.src = result.urls.thumb;
    img.dataset.index = String(index);
    img.style.height = `${
      Math.ceil(result.height * parseInt(widthOFColumn)) / result.width
    }px`;

    const flexes = imgContainer.querySelectorAll<HTMLDivElement>('.flex');
    const heightArr: number[] = [];

    for (let i = 0; i < flexes.length; i++) {
      heightArr.push(flexes[i].offsetHeight);
    }

    const minHeight = Math.min(...heightArr);
    const minHeightIndex = heightArr.indexOf(minHeight);

    const minFlex = imgContainer.querySelector(
      `.flex${minHeightIndex}`
    ) as HTMLDivElement;

    minFlex.appendChild(imgDiv);
    imgDiv.appendChild(img);
  });

  imgContainer.addEventListener('click', (event) =>
    changeBackground(event, imgContainer, data)
  );
};

export default showImages;
