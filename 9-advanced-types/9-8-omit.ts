/**
 * Omit : 정의된 타입에서 원하지 않는 key들을 제외한 데이터들을 가져와서 새로운 타입들을 만듦.
 * Omit<Video, 'url' | 'data'>; // url 과 data 빼고 다 가져옴.
 */

{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
