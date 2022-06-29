type requestData = {
  method?: string;
  url: string;
  type?: XMLHttpRequestResponseType;
  onSuccess: (data: dataStructure) => void;
  onError?: (data: string) => void;
};

type dataStructure = {
  total: number;
  total_pages: number;
  results: resultStructure[];
};

type resultStructure = {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: urlsStructure;
  links: object;
  categories: string[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: string;
  topic_submissions: object;
  user: object;
  tags: object[];
};

type urlsStructure = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

export { requestData, dataStructure, resultStructure, urlsStructure };
