import { clearCache } from "../../../lib/utils";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : Album.tracks', () => {
  beforeEach(() => {
    clearCache();
  });

  let albumReponse = {"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"copyrights":[{"text":"(C) 2011 Disney","type":"C"},{"text":"(P) 2011 Walt Disney Records","type":"P"}],"external_ids":{"upc":"00050087239633"},"external_urls":{"spotify":"https://open.spotify.com/album/382ObEPsp2rxGrnsizN5TX"},"genres":[],"href":"https://api.spotify.com/v1/albums/382ObEPsp2rxGrnsizN5TX","id":"382ObEPsp2rxGrnsizN5TX","images":[{"height":640,"url":"https://i.scdn.co/image/2e2ab47a005625bd233e5baa0234502b51a4f32a","width":640},{"height":300,"url":"https://i.scdn.co/image/8239e8408eb461055a785cbaef37da6e5a4f5240","width":300},{"height":64,"url":"https://i.scdn.co/image/fdfcdcabae6d1a659e9d493dcedf73c2d170d917","width":64}],"label":"Walt Disney Records","name":"TRON: Legacy Reconfigured","popularity":56,"release_date":"2011-01-01","release_date_precision":"day","tracks":{"href":"https://api.spotify.com/v1/albums/382ObEPsp2rxGrnsizN5TX/tracks?offset=0&limit=50","items":[{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":262240,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/4lteJuSjb9Jt9W1W7PIU2U"},"href":"https://api.spotify.com/v1/tracks/4lteJuSjb9Jt9W1W7PIU2U","id":"4lteJuSjb9Jt9W1W7PIU2U","name":"Derezzed - Remixed by The Glitch Mob","preview_url":"https://p.scdn.co/mp3-preview/6ca3fbac2df0ca59f10d8f8752b5c7f936e900fb?cid=8897482848704f2a8f8d7c79726a70d4","track_number":1,"type":"track","uri":"spotify:track:4lteJuSjb9Jt9W1W7PIU2U"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":234986,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/66uVqkmHAc0MBUzoPhIypN"},"href":"https://api.spotify.com/v1/tracks/66uVqkmHAc0MBUzoPhIypN","id":"66uVqkmHAc0MBUzoPhIypN","name":"Fall - Remixed by M83 VS Big Black Delta","preview_url":"https://p.scdn.co/mp3-preview/f7b95991dbdc34ca60591edf1c2e46a932c1d5d9?cid=8897482848704f2a8f8d7c79726a70d4","track_number":2,"type":"track","uri":"spotify:track:66uVqkmHAc0MBUzoPhIypN"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":267786,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/4OEnpg5ubhg6OQ4M2ZjtsL"},"href":"https://api.spotify.com/v1/tracks/4OEnpg5ubhg6OQ4M2ZjtsL","id":"4OEnpg5ubhg6OQ4M2ZjtsL","name":"The Grid - Remixed by The Crystal Method","preview_url":"https://p.scdn.co/mp3-preview/cf8ebfc2f2893459421e03cf34f1aa24715654a4?cid=8897482848704f2a8f8d7c79726a70d4","track_number":3,"type":"track","uri":"spotify:track:4OEnpg5ubhg6OQ4M2ZjtsL"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":334346,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/2EyK6JBWqftJlxAuqd0Dsq"},"href":"https://api.spotify.com/v1/tracks/2EyK6JBWqftJlxAuqd0Dsq","id":"2EyK6JBWqftJlxAuqd0Dsq","name":"Adagio for TRON - Remixed by Teddybears","preview_url":"https://p.scdn.co/mp3-preview/8ff4bcc588e36e77f8fa505f8d6263558f774186?cid=8897482848704f2a8f8d7c79726a70d4","track_number":4,"type":"track","uri":"spotify:track:2EyK6JBWqftJlxAuqd0Dsq"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":291506,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/1TT6gRprLQ5vSWgoWpyKfR"},"href":"https://api.spotify.com/v1/tracks/1TT6gRprLQ5vSWgoWpyKfR","id":"1TT6gRprLQ5vSWgoWpyKfR","name":"The Son of Flynn - Remixed by Ki:Theory","preview_url":"https://p.scdn.co/mp3-preview/774bad961c88a6e8ad44ea481ae0c0f187aec018?cid=8897482848704f2a8f8d7c79726a70d4","track_number":5,"type":"track","uri":"spotify:track:1TT6gRprLQ5vSWgoWpyKfR"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":275266,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/6hEvTmmvby9ZTkSdfmPW3m"},"href":"https://api.spotify.com/v1/tracks/6hEvTmmvby9ZTkSdfmPW3m","id":"6hEvTmmvby9ZTkSdfmPW3m","name":"C.L.U. - Remixed by Paul Oakenfold","preview_url":"https://p.scdn.co/mp3-preview/1c6a0a2f972f713fd1e45e5703dddbbba0cb25f0?cid=8897482848704f2a8f8d7c79726a70d4","track_number":6,"type":"track","uri":"spotify:track:6hEvTmmvby9ZTkSdfmPW3m"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":392293,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/03uOJUuuTgaFFI1Efal1no"},"href":"https://api.spotify.com/v1/tracks/03uOJUuuTgaFFI1Efal1no","id":"03uOJUuuTgaFFI1Efal1no","name":"The Son of Flynn - Remixed by Moby","preview_url":"https://p.scdn.co/mp3-preview/bcedd85b520094b195e799643914cf7fefc190ce?cid=8897482848704f2a8f8d7c79726a70d4","track_number":7,"type":"track","uri":"spotify:track:03uOJUuuTgaFFI1Efal1no"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":340186,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/3YYnfKM02WkygOwg6ozfrL"},"href":"https://api.spotify.com/v1/tracks/3YYnfKM02WkygOwg6ozfrL","id":"3YYnfKM02WkygOwg6ozfrL","name":"End of Line - Remixed by Boys Noize","preview_url":"https://p.scdn.co/mp3-preview/1095fec0e38d69c1c75a60ae47134a998e1c24fb?cid=8897482848704f2a8f8d7c79726a70d4","track_number":8,"type":"track","uri":"spotify:track:3YYnfKM02WkygOwg6ozfrL"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":412440,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/2jFLd9OdNcLsblpv4fDTRn"},"href":"https://api.spotify.com/v1/tracks/2jFLd9OdNcLsblpv4fDTRn","id":"2jFLd9OdNcLsblpv4fDTRn","name":"Rinzler - Remixed by Kaskade","preview_url":"https://p.scdn.co/mp3-preview/5b9b307b3068ca547a8337c161391a2c562a9980?cid=8897482848704f2a8f8d7c79726a70d4","track_number":9,"type":"track","uri":"spotify:track:2jFLd9OdNcLsblpv4fDTRn"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":292093,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/3SL3UavpjRKNMM9UVlE9Bx"},"href":"https://api.spotify.com/v1/tracks/3SL3UavpjRKNMM9UVlE9Bx","id":"3SL3UavpjRKNMM9UVlE9Bx","name":"Encom Part 2 - Remixed by Com Truise","preview_url":"https://p.scdn.co/mp3-preview/076c15d549362c5a7e49471c512805e1b4efb133?cid=8897482848704f2a8f8d7c79726a70d4","track_number":10,"type":"track","uri":"spotify:track:3SL3UavpjRKNMM9UVlE9Bx"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":318720,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/2UBYw2qf9PkvoKQ610ocft"},"href":"https://api.spotify.com/v1/tracks/2UBYw2qf9PkvoKQ610ocft","id":"2UBYw2qf9PkvoKQ610ocft","name":"End of Line - Remixed by Photek","preview_url":"https://p.scdn.co/mp3-preview/07fe957d6bcfd32f6758ba9d9284b5484c27b3e8?cid=8897482848704f2a8f8d7c79726a70d4","track_number":11,"type":"track","uri":"spotify:track:2UBYw2qf9PkvoKQ610ocft"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":367720,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/7irNlzUSPNgCDtEyQuS3lm"},"href":"https://api.spotify.com/v1/tracks/7irNlzUSPNgCDtEyQuS3lm","id":"7irNlzUSPNgCDtEyQuS3lm","name":"Arena - Remixed by The Japanese Popstars","preview_url":"https://p.scdn.co/mp3-preview/97231ee85ec3b03a2cd81bcdbd7e5acb030dcba2?cid=8897482848704f2a8f8d7c79726a70d4","track_number":12,"type":"track","uri":"spotify:track:7irNlzUSPNgCDtEyQuS3lm"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":303946,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/1rn6JIHBuBZiwvA57jeoOB"},"href":"https://api.spotify.com/v1/tracks/1rn6JIHBuBZiwvA57jeoOB","id":"1rn6JIHBuBZiwvA57jeoOB","name":"Derezzed - Remixed by Avicii","preview_url":"https://p.scdn.co/mp3-preview/d083878ef6e329050755c18c047e9d8c09d3fbef?cid=8897482848704f2a8f8d7c79726a70d4","track_number":13,"type":"track","uri":"spotify:track:1rn6JIHBuBZiwvA57jeoOB"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":272853,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/4OgB6TRmIGBRT4NoFxxIQd"},"href":"https://api.spotify.com/v1/tracks/4OgB6TRmIGBRT4NoFxxIQd","id":"4OgB6TRmIGBRT4NoFxxIQd","name":"Solar Sailer - Remixed by Pretty Lights","preview_url":"https://p.scdn.co/mp3-preview/2daf670f702697a22fa74de8d068ecdb2ac8f12d?cid=8897482848704f2a8f8d7c79726a70d4","track_number":14,"type":"track","uri":"spotify:track:4OgB6TRmIGBRT4NoFxxIQd"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":304466,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/1Nv1h7ANN9E4rAjLP4OfgA"},"href":"https://api.spotify.com/v1/tracks/1Nv1h7ANN9E4rAjLP4OfgA","id":"1Nv1h7ANN9E4rAjLP4OfgA","name":"TRON Legacy (End Titles) - Remixed by Sander Kleinenberg","preview_url":"https://p.scdn.co/mp3-preview/939dc24d8ea1bcb35dc2532a0275de7e6e02088b?cid=8897482848704f2a8f8d7c79726a70d4","track_number":15,"type":"track","uri":"spotify:track:1Nv1h7ANN9E4rAjLP4OfgA"}],"limit":50,"next":null,"offset":0,"previous":null,"total":15},"type":"album","uri":"spotify:album:382ObEPsp2rxGrnsizN5TX"};
  let albumTracksResponse = {"href":"https://api.spotify.com/v1/albums/382ObEPsp2rxGrnsizN5TX/tracks?offset=0&limit=20","items":[{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":262240,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/4lteJuSjb9Jt9W1W7PIU2U"},"href":"https://api.spotify.com/v1/tracks/4lteJuSjb9Jt9W1W7PIU2U","id":"4lteJuSjb9Jt9W1W7PIU2U","name":"Derezzed - Remixed by The Glitch Mob","preview_url":"https://p.scdn.co/mp3-preview/6ca3fbac2df0ca59f10d8f8752b5c7f936e900fb?cid=8897482848704f2a8f8d7c79726a70d4","track_number":1,"type":"track","uri":"spotify:track:4lteJuSjb9Jt9W1W7PIU2U"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":234986,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/66uVqkmHAc0MBUzoPhIypN"},"href":"https://api.spotify.com/v1/tracks/66uVqkmHAc0MBUzoPhIypN","id":"66uVqkmHAc0MBUzoPhIypN","name":"Fall - Remixed by M83 VS Big Black Delta","preview_url":"https://p.scdn.co/mp3-preview/f7b95991dbdc34ca60591edf1c2e46a932c1d5d9?cid=8897482848704f2a8f8d7c79726a70d4","track_number":2,"type":"track","uri":"spotify:track:66uVqkmHAc0MBUzoPhIypN"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":267786,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/4OEnpg5ubhg6OQ4M2ZjtsL"},"href":"https://api.spotify.com/v1/tracks/4OEnpg5ubhg6OQ4M2ZjtsL","id":"4OEnpg5ubhg6OQ4M2ZjtsL","name":"The Grid - Remixed by The Crystal Method","preview_url":"https://p.scdn.co/mp3-preview/cf8ebfc2f2893459421e03cf34f1aa24715654a4?cid=8897482848704f2a8f8d7c79726a70d4","track_number":3,"type":"track","uri":"spotify:track:4OEnpg5ubhg6OQ4M2ZjtsL"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":334346,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/2EyK6JBWqftJlxAuqd0Dsq"},"href":"https://api.spotify.com/v1/tracks/2EyK6JBWqftJlxAuqd0Dsq","id":"2EyK6JBWqftJlxAuqd0Dsq","name":"Adagio for TRON - Remixed by Teddybears","preview_url":"https://p.scdn.co/mp3-preview/8ff4bcc588e36e77f8fa505f8d6263558f774186?cid=8897482848704f2a8f8d7c79726a70d4","track_number":4,"type":"track","uri":"spotify:track:2EyK6JBWqftJlxAuqd0Dsq"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":291506,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/1TT6gRprLQ5vSWgoWpyKfR"},"href":"https://api.spotify.com/v1/tracks/1TT6gRprLQ5vSWgoWpyKfR","id":"1TT6gRprLQ5vSWgoWpyKfR","name":"The Son of Flynn - Remixed by Ki:Theory","preview_url":"https://p.scdn.co/mp3-preview/774bad961c88a6e8ad44ea481ae0c0f187aec018?cid=8897482848704f2a8f8d7c79726a70d4","track_number":5,"type":"track","uri":"spotify:track:1TT6gRprLQ5vSWgoWpyKfR"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":275266,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/6hEvTmmvby9ZTkSdfmPW3m"},"href":"https://api.spotify.com/v1/tracks/6hEvTmmvby9ZTkSdfmPW3m","id":"6hEvTmmvby9ZTkSdfmPW3m","name":"C.L.U. - Remixed by Paul Oakenfold","preview_url":"https://p.scdn.co/mp3-preview/1c6a0a2f972f713fd1e45e5703dddbbba0cb25f0?cid=8897482848704f2a8f8d7c79726a70d4","track_number":6,"type":"track","uri":"spotify:track:6hEvTmmvby9ZTkSdfmPW3m"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":392293,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/03uOJUuuTgaFFI1Efal1no"},"href":"https://api.spotify.com/v1/tracks/03uOJUuuTgaFFI1Efal1no","id":"03uOJUuuTgaFFI1Efal1no","name":"The Son of Flynn - Remixed by Moby","preview_url":"https://p.scdn.co/mp3-preview/bcedd85b520094b195e799643914cf7fefc190ce?cid=8897482848704f2a8f8d7c79726a70d4","track_number":7,"type":"track","uri":"spotify:track:03uOJUuuTgaFFI1Efal1no"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":340186,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/3YYnfKM02WkygOwg6ozfrL"},"href":"https://api.spotify.com/v1/tracks/3YYnfKM02WkygOwg6ozfrL","id":"3YYnfKM02WkygOwg6ozfrL","name":"End of Line - Remixed by Boys Noize","preview_url":"https://p.scdn.co/mp3-preview/1095fec0e38d69c1c75a60ae47134a998e1c24fb?cid=8897482848704f2a8f8d7c79726a70d4","track_number":8,"type":"track","uri":"spotify:track:3YYnfKM02WkygOwg6ozfrL"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":412440,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/2jFLd9OdNcLsblpv4fDTRn"},"href":"https://api.spotify.com/v1/tracks/2jFLd9OdNcLsblpv4fDTRn","id":"2jFLd9OdNcLsblpv4fDTRn","name":"Rinzler - Remixed by Kaskade","preview_url":"https://p.scdn.co/mp3-preview/5b9b307b3068ca547a8337c161391a2c562a9980?cid=8897482848704f2a8f8d7c79726a70d4","track_number":9,"type":"track","uri":"spotify:track:2jFLd9OdNcLsblpv4fDTRn"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":292093,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/3SL3UavpjRKNMM9UVlE9Bx"},"href":"https://api.spotify.com/v1/tracks/3SL3UavpjRKNMM9UVlE9Bx","id":"3SL3UavpjRKNMM9UVlE9Bx","name":"Encom Part 2 - Remixed by Com Truise","preview_url":"https://p.scdn.co/mp3-preview/076c15d549362c5a7e49471c512805e1b4efb133?cid=8897482848704f2a8f8d7c79726a70d4","track_number":10,"type":"track","uri":"spotify:track:3SL3UavpjRKNMM9UVlE9Bx"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":318720,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/2UBYw2qf9PkvoKQ610ocft"},"href":"https://api.spotify.com/v1/tracks/2UBYw2qf9PkvoKQ610ocft","id":"2UBYw2qf9PkvoKQ610ocft","name":"End of Line - Remixed by Photek","preview_url":"https://p.scdn.co/mp3-preview/07fe957d6bcfd32f6758ba9d9284b5484c27b3e8?cid=8897482848704f2a8f8d7c79726a70d4","track_number":11,"type":"track","uri":"spotify:track:2UBYw2qf9PkvoKQ610ocft"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":367720,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/7irNlzUSPNgCDtEyQuS3lm"},"href":"https://api.spotify.com/v1/tracks/7irNlzUSPNgCDtEyQuS3lm","id":"7irNlzUSPNgCDtEyQuS3lm","name":"Arena - Remixed by The Japanese Popstars","preview_url":"https://p.scdn.co/mp3-preview/97231ee85ec3b03a2cd81bcdbd7e5acb030dcba2?cid=8897482848704f2a8f8d7c79726a70d4","track_number":12,"type":"track","uri":"spotify:track:7irNlzUSPNgCDtEyQuS3lm"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":303946,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/1rn6JIHBuBZiwvA57jeoOB"},"href":"https://api.spotify.com/v1/tracks/1rn6JIHBuBZiwvA57jeoOB","id":"1rn6JIHBuBZiwvA57jeoOB","name":"Derezzed - Remixed by Avicii","preview_url":"https://p.scdn.co/mp3-preview/d083878ef6e329050755c18c047e9d8c09d3fbef?cid=8897482848704f2a8f8d7c79726a70d4","track_number":13,"type":"track","uri":"spotify:track:1rn6JIHBuBZiwvA57jeoOB"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":272853,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/4OgB6TRmIGBRT4NoFxxIQd"},"href":"https://api.spotify.com/v1/tracks/4OgB6TRmIGBRT4NoFxxIQd","id":"4OgB6TRmIGBRT4NoFxxIQd","name":"Solar Sailer - Remixed by Pretty Lights","preview_url":"https://p.scdn.co/mp3-preview/2daf670f702697a22fa74de8d068ecdb2ac8f12d?cid=8897482848704f2a8f8d7c79726a70d4","track_number":14,"type":"track","uri":"spotify:track:4OgB6TRmIGBRT4NoFxxIQd"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"},"href":"https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi","id":"4tZwfgrHOc3mvqYlEYSvVi","name":"Daft Punk","type":"artist","uri":"spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"}],"available_markets":["CA","MX","US"],"disc_number":1,"duration_ms":304466,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/1Nv1h7ANN9E4rAjLP4OfgA"},"href":"https://api.spotify.com/v1/tracks/1Nv1h7ANN9E4rAjLP4OfgA","id":"1Nv1h7ANN9E4rAjLP4OfgA","name":"TRON Legacy (End Titles) - Remixed by Sander Kleinenberg","preview_url":"https://p.scdn.co/mp3-preview/939dc24d8ea1bcb35dc2532a0275de7e6e02088b?cid=8897482848704f2a8f8d7c79726a70d4","track_number":15,"type":"track","uri":"spotify:track:1Nv1h7ANN9E4rAjLP4OfgA"}],"limit":20,"next":null,"offset":0,"previous":null,"total":15};

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching a existing Albums', () => {
    let albumRequest, albumTracksRequest;
    beforeEach(() => {
      albumRequest = nock('https://api.spotify.com:443')
        .get('/v1/albums/382ObEPsp2rxGrnsizN5TX')
        .reply(200, albumReponse);
      albumTracksRequest = nock('https://api.spotify.com:443')
        .get('/v1/albums/382ObEPsp2rxGrnsizN5TX/tracks?limit=50&offset=0')
        .reply(200, albumTracksResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.album.name).toBe('TRON: Legacy Reconfigured')
        expect(data.album.id).toBe('382ObEPsp2rxGrnsizN5TX')
        expect(data.album.tracks[0].id).toBe('4lteJuSjb9Jt9W1W7PIU2U')
        expect(!!executionResult.errors).toBeFalsy();
        expect(albumRequest.isDone()).toBeTruthy();
        expect(albumTracksRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          album(id: "382ObEPsp2rxGrnsizN5TX") {
            id
            name
            tracks {
              id
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});