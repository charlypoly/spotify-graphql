import { clearCache } from "../../../lib/utils";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : me.albums', () => {
  beforeEach(() => {
    clearCache();
  });

  let meResponse = {"birthdate":"1992-04-21","country":"FR","display_name":"Charly Poly","email":"charly.poly@live.fr","external_urls":{"spotify":"https://open.spotify.com/user/11879785"},"followers":{"href":null,"total":14},"href":"https://api.spotify.com/v1/users/11879785","id":"11879785","images":[{"height":null,"url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/14708149_10210705575656755_6613177863427368468_n.jpg?oh=edeed1fffe34e4a0f57669b5ffbb3def&oe=5914212D","width":null}],"product":"premium","type":"user","uri":"spotify:user:11879785"};
  let meAlbumsResponse = {"href":"https://api.spotify.com/v1/me/albums?offset=0&limit=2","items":[{"added_at":"2014-08-11T09:34:16Z","album":{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"copyrights":[{"text":"(C) 2013 Getting Out Our Dreams, Inc./The Island Def Jam Music Group","type":"C"},{"text":"(P) 2013 Getting Out Our Dreams, Inc./The Island Def Jam Music Group","type":"P"}],"external_ids":{"upc":"00602537447817"},"external_urls":{"spotify":"https://open.spotify.com/album/0RwyuV6gqs9zKVsMUNF73l"},"genres":[],"href":"https://api.spotify.com/v1/albums/0RwyuV6gqs9zKVsMUNF73l","id":"0RwyuV6gqs9zKVsMUNF73l","images":[{"height":640,"url":"https://i.scdn.co/image/3bf95316a7bab4bed6e240eb3bdddc4f5ddb55d9","width":640},{"height":300,"url":"https://i.scdn.co/image/11ba3ed973dcf9a35e8f839e13f924a5bdc35cb9","width":300},{"height":64,"url":"https://i.scdn.co/image/9ae6d63cf0e022a3d90625d892d67f807902408b","width":64}],"label":"Digital Distribution Trinidad and Tobago","name":"Beware","popularity":43,"release_date":"2013-01-01","release_date_precision":"day","tracks":{"href":"https://api.spotify.com/v1/albums/0RwyuV6gqs9zKVsMUNF73l/tracks?offset=0&limit=50","items":[{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"},{"external_urls":{"spotify":"https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865"},"href":"https://api.spotify.com/v1/artists/55Aa2cqylxrFIXC767Z865","id":"55Aa2cqylxrFIXC767Z865","name":"Lil Wayne","type":"artist","uri":"spotify:artist:55Aa2cqylxrFIXC767Z865"},{"external_urls":{"spotify":"https://open.spotify.com/artist/5ZS223C6JyBfXasXxrRqOk"},"href":"https://api.spotify.com/v1/artists/5ZS223C6JyBfXasXxrRqOk","id":"5ZS223C6JyBfXasXxrRqOk","name":"Jhene Aiko","type":"artist","uri":"spotify:artist:5ZS223C6JyBfXasXxrRqOk"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":236560,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/4bY3kZxBDjRc228sWgGtLI"},"href":"https://api.spotify.com/v1/tracks/4bY3kZxBDjRc228sWgGtLI","id":"4bY3kZxBDjRc228sWgGtLI","name":"Beware","preview_url":"https://p.scdn.co/mp3-preview/aa0d30732148d64029ecd34e4aba294302f1242a?cid=8897482848704f2a8f8d7c79726a70d4","track_number":1,"type":"track","uri":"spotify:track:4bY3kZxBDjRc228sWgGtLI"}],"limit":50,"next":null,"offset":0,"previous":null,"total":1},"type":"album","uri":"spotify:album:0RwyuV6gqs9zKVsMUNF73l"}},{"added_at":"2015-03-06T16:06:47Z","album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"copyrights":[{"text":"(C) 2015 Getting Out Our Dreams, Inc./Def Jam Recordings, a division of UMG Recordings, Inc.","type":"C"},{"text":"(P) 2015 Getting Out Our Dreams, Inc./Def Jam Recordings, a division of UMG Recordings, Inc.","type":"P"}],"external_ids":{"upc":"00602547237903"},"external_urls":{"spotify":"https://open.spotify.com/album/7xue2jn8y2BL3EbonL9mup"},"genres":[],"href":"https://api.spotify.com/v1/albums/7xue2jn8y2BL3EbonL9mup","id":"7xue2jn8y2BL3EbonL9mup","images":[{"height":640,"url":"https://i.scdn.co/image/d745bd6d7c51691f186d7221ae5f3893301a4cb0","width":640},{"height":300,"url":"https://i.scdn.co/image/686222a74c6460d71d599cb65d2c5dc196366e8b","width":300},{"height":64,"url":"https://i.scdn.co/image/e7394880bcaea187dd79a0af478a25a9e06ff0dc","width":64}],"label":"Digital Distribution Trinidad and Tobago","name":"Dark Sky Paradise","popularity":55,"release_date":"2015-02-23","release_date_precision":"day","tracks":{"href":"https://api.spotify.com/v1/albums/7xue2jn8y2BL3EbonL9mup/tracks?offset=0&limit=50","items":[{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":178373,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/30NByGFzy7cyLuu3cZAs18"},"href":"https://api.spotify.com/v1/tracks/30NByGFzy7cyLuu3cZAs18","id":"30NByGFzy7cyLuu3cZAs18","name":"Dark Sky (Skyscrapers)","preview_url":"https://p.scdn.co/mp3-preview/250e1118bdfd1b5b4516b55f34b235d158b36781?cid=8897482848704f2a8f8d7c79726a70d4","track_number":1,"type":"track","uri":"spotify:track:30NByGFzy7cyLuu3cZAs18"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"},{"external_urls":{"spotify":"https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"},"href":"https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4","id":"3TVXtAsR1Inumwj472S9r4","name":"Drake","type":"artist","uri":"spotify:artist:3TVXtAsR1Inumwj472S9r4"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":252040,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/5wgeUiIqgsZieYHFfmTgPo"},"href":"https://api.spotify.com/v1/tracks/5wgeUiIqgsZieYHFfmTgPo","id":"5wgeUiIqgsZieYHFfmTgPo","name":"Blessings","preview_url":"https://p.scdn.co/mp3-preview/857220141a565394de5a3da211b0ee751ed441c1?cid=8897482848704f2a8f8d7c79726a70d4","track_number":2,"type":"track","uri":"spotify:track:5wgeUiIqgsZieYHFfmTgPo"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"},{"external_urls":{"spotify":"https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x"},"href":"https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x","id":"5K4W6rqBFWDnAN6FQUkS6x","name":"Kanye West","type":"artist","uri":"spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":224386,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/1HZSY3HelUSUQtYz99jZym"},"href":"https://api.spotify.com/v1/tracks/1HZSY3HelUSUQtYz99jZym","id":"1HZSY3HelUSUQtYz99jZym","name":"All Your Fault","preview_url":"https://p.scdn.co/mp3-preview/c73517fdfb98adfcee0e47ebef6caf6e1efa3abb?cid=8897482848704f2a8f8d7c79726a70d4","track_number":3,"type":"track","uri":"spotify:track:1HZSY3HelUSUQtYz99jZym"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"},{"external_urls":{"spotify":"https://open.spotify.com/artist/3crnzLy8R4lVwaigKEOz7V"},"href":"https://api.spotify.com/v1/artists/3crnzLy8R4lVwaigKEOz7V","id":"3crnzLy8R4lVwaigKEOz7V","name":"E-40","type":"artist","uri":"spotify:artist:3crnzLy8R4lVwaigKEOz7V"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":284386,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/2kqulrVGq7cCQapNp3g31T"},"href":"https://api.spotify.com/v1/tracks/2kqulrVGq7cCQapNp3g31T","id":"2kqulrVGq7cCQapNp3g31T","name":"I Don't Fuck With You","preview_url":"https://p.scdn.co/mp3-preview/e3a2f76f7f44b2b6e0ac69ae1c2db004ebd60478?cid=8897482848704f2a8f8d7c79726a70d4","track_number":4,"type":"track","uri":"spotify:track:2kqulrVGq7cCQapNp3g31T"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"},{"external_urls":{"spotify":"https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z"},"href":"https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z","id":"7bXgB6jMjp9ATFy66eO08Z","name":"Chris Brown","type":"artist","uri":"spotify:artist:7bXgB6jMjp9ATFy66eO08Z"},{"external_urls":{"spotify":"https://open.spotify.com/artist/7c0XG5cIJTrrAgEC3ULPiq"},"href":"https://api.spotify.com/v1/artists/7c0XG5cIJTrrAgEC3ULPiq","id":"7c0XG5cIJTrrAgEC3ULPiq","name":"Ty Dolla $ign","type":"artist","uri":"spotify:artist:7c0XG5cIJTrrAgEC3ULPiq"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":216653,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/24q9Be1cFHYNRLvrPMvRjU"},"href":"https://api.spotify.com/v1/tracks/24q9Be1cFHYNRLvrPMvRjU","id":"24q9Be1cFHYNRLvrPMvRjU","name":"Play No Games","preview_url":"https://p.scdn.co/mp3-preview/26d442ad49d5eec67a143e35e4346d4782dffa75?cid=8897482848704f2a8f8d7c79726a70d4","track_number":5,"type":"track","uri":"spotify:track:24q9Be1cFHYNRLvrPMvRjU"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":215440,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/0x7QB9wjm3ol6Pn2VKl51o"},"href":"https://api.spotify.com/v1/tracks/0x7QB9wjm3ol6Pn2VKl51o","id":"0x7QB9wjm3ol6Pn2VKl51o","name":"Paradise - Extended","preview_url":"https://p.scdn.co/mp3-preview/e577ce5b7ef161effe03b2308c7e6e4e07a994bb?cid=8897482848704f2a8f8d7c79726a70d4","track_number":6,"type":"track","uri":"spotify:track:0x7QB9wjm3ol6Pn2VKl51o"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":304493,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/0dEmCEnTdupc1TaxWj8Fqp"},"href":"https://api.spotify.com/v1/tracks/0dEmCEnTdupc1TaxWj8Fqp","id":"0dEmCEnTdupc1TaxWj8Fqp","name":"Win Some, Lose Some","preview_url":"https://p.scdn.co/mp3-preview/bd983b48eb4a6eba7f49fdcada3a81af22dc38df?cid=8897482848704f2a8f8d7c79726a70d4","track_number":7,"type":"track","uri":"spotify:track:0dEmCEnTdupc1TaxWj8Fqp"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":250533,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/51C6AkskrwEK46ZlvMCf6m"},"href":"https://api.spotify.com/v1/tracks/51C6AkskrwEK46ZlvMCf6m","id":"51C6AkskrwEK46ZlvMCf6m","name":"Stay Down","preview_url":"https://p.scdn.co/mp3-preview/67d6cc214beadfb29ad388c3a30020b5a9ce5d97?cid=8897482848704f2a8f8d7c79726a70d4","track_number":8,"type":"track","uri":"spotify:track:51C6AkskrwEK46ZlvMCf6m"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"},{"external_urls":{"spotify":"https://open.spotify.com/artist/5ZS223C6JyBfXasXxrRqOk"},"href":"https://api.spotify.com/v1/artists/5ZS223C6JyBfXasXxrRqOk","id":"5ZS223C6JyBfXasXxrRqOk","name":"Jhene Aiko","type":"artist","uri":"spotify:artist:5ZS223C6JyBfXasXxrRqOk"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":319973,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/0jrM3MvbIPJ2RO6mrRWQoM"},"href":"https://api.spotify.com/v1/tracks/0jrM3MvbIPJ2RO6mrRWQoM","id":"0jrM3MvbIPJ2RO6mrRWQoM","name":"I Know","preview_url":"https://p.scdn.co/mp3-preview/932351b8d7dbc70468082f418e2cfa78cfd680e0?cid=8897482848704f2a8f8d7c79726a70d4","track_number":9,"type":"track","uri":"spotify:track:0jrM3MvbIPJ2RO6mrRWQoM"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"},{"external_urls":{"spotify":"https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865"},"href":"https://api.spotify.com/v1/artists/55Aa2cqylxrFIXC767Z865","id":"55Aa2cqylxrFIXC767Z865","name":"Lil Wayne","type":"artist","uri":"spotify:artist:55Aa2cqylxrFIXC767Z865"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":275933,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/2AKox6vFyUhmiqJSvZh3E4"},"href":"https://api.spotify.com/v1/tracks/2AKox6vFyUhmiqJSvZh3E4","id":"2AKox6vFyUhmiqJSvZh3E4","name":"Deep","preview_url":"https://p.scdn.co/mp3-preview/162c40aa48f38b84fbd2708730a0aefe95fab120?cid=8897482848704f2a8f8d7c79726a70d4","track_number":10,"type":"track","uri":"spotify:track:2AKox6vFyUhmiqJSvZh3E4"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"},{"external_urls":{"spotify":"https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x"},"href":"https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x","id":"5K4W6rqBFWDnAN6FQUkS6x","name":"Kanye West","type":"artist","uri":"spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"},{"external_urls":{"spotify":"https://open.spotify.com/artist/5y2Xq6xcjJb2jVM54GHK3t"},"href":"https://api.spotify.com/v1/artists/5y2Xq6xcjJb2jVM54GHK3t","id":"5y2Xq6xcjJb2jVM54GHK3t","name":"John Legend","type":"artist","uri":"spotify:artist:5y2Xq6xcjJb2jVM54GHK3t"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":254626,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/6ZLk6np2KprIGmrSHCdXNa"},"href":"https://api.spotify.com/v1/tracks/6ZLk6np2KprIGmrSHCdXNa","id":"6ZLk6np2KprIGmrSHCdXNa","name":"One Man Can Change The World","preview_url":"https://p.scdn.co/mp3-preview/38f9d2669e1efc791ecef1544fa5768b8fecd7ce?cid=8897482848704f2a8f8d7c79726a70d4","track_number":11,"type":"track","uri":"spotify:track:6ZLk6np2KprIGmrSHCdXNa"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh"},"href":"https://api.spotify.com/v1/artists/0c173mlxpT3dSFRgMO8XPh","id":"0c173mlxpT3dSFRgMO8XPh","name":"Big Sean","type":"artist","uri":"spotify:artist:0c173mlxpT3dSFRgMO8XPh"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CH","CL","CO","CR","CY","CZ","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":223493,"explicit":true,"external_urls":{"spotify":"https://open.spotify.com/track/5tQno5PmVN6SYCTS48JFit"},"href":"https://api.spotify.com/v1/tracks/5tQno5PmVN6SYCTS48JFit","id":"5tQno5PmVN6SYCTS48JFit","name":"Outro","preview_url":"https://p.scdn.co/mp3-preview/c4dc3b9073409d5685b9884cd61da1f70376d696?cid=8897482848704f2a8f8d7c79726a70d4","track_number":12,"type":"track","uri":"spotify:track:5tQno5PmVN6SYCTS48JFit"}],"limit":50,"next":null,"offset":0,"previous":null,"total":12},"type":"album","uri":"spotify:album:7xue2jn8y2BL3EbonL9mup"}}],"limit":2,"next":"https://api.spotify.com/v1/me/albums?offset=2&limit=2","offset":0,"previous":null,"total":2};

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching', () => {
    let meRequest, meAlbumsRequest;
    beforeEach(() => {
      meRequest = nock('https://api.spotify.com:443')
        .get('/v1/me')
        .reply(200, meResponse);
      meAlbumsRequest = nock('https://api.spotify.com:443')
        .get('/v1/me/albums?limit=50&offset=0')
        .reply(200, meAlbumsResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.me.albums[0].album.id).toBe('0RwyuV6gqs9zKVsMUNF73l');
        expect(!!executionResult.errors).toBeFalsy();
        expect(meRequest.isDone()).toBeTruthy();
        expect(meAlbumsRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          me {
            id
            albums {
              album {
                id
              }
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});