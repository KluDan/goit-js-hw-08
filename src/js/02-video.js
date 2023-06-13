import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onCurrentTime = function(data) {
    console.log(data.seconds);
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate',throttle(onCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
