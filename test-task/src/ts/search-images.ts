import showImages from './show-images';
import { accessKey } from './user-settings';
import { numberOfImages } from './user-settings';
import httpRequest from './http-request';
import { dataStructure } from './types';

const searchImages = (event: SubmitEvent, searchInput: HTMLInputElement) => {
  event.preventDefault();

  httpRequest({
    method: 'GET',
    url: `https://api.unsplash.com/search/photos?page=1&query=${searchInput.value.trim()}&per_page=${numberOfImages}&lang=en&client_id=${accessKey}`,

    onSuccess: (data: dataStructure) => {
      showImages(data);
    },
  });
};

export default searchImages;
