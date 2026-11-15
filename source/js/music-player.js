/* 左下角悬浮音乐播放器（基于 APlayer）
   想换歌：改下面 songs 数组里的 name / artist / url / cover 就行
   歌文件放在 source/music/ 目录下 */

(function () {
  if (!window.APlayer) return;

  var songs = [
    {
      name: 'Hallowed Be Thy Name',
      artist: 'Iron Maiden',
      url: '/music/hallowed-be-thy-name.mp3',
      cover: '/images/music-hallowed.jpg',
    },
    {
      name: 'Run To The Hills',
      artist: 'Iron Maiden',
      url: '/music/run-to-the-hills.mp3',
      cover: '/images/music-run-to-the-hills.jpg',
    },
  ];

  function mount() {
    if (document.getElementById('global-music-player')) return;

    var box = document.createElement('div');
    box.id = 'global-music-player';
    document.body.appendChild(box);

    window.blogMusic = new window.APlayer({
      container: box,
      fixed: true,
      mini: true,
      autoplay: false,
      loop: 'all',
      order: 'list',
      preload: 'none',
      volume: 0.55,
      listFolded: true,
      theme: '#425aef',
      audio: songs,
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
